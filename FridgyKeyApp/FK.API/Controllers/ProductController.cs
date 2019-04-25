using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.API.ViewModels;
using FK.BLL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FK.API.Controllers
{
    [Produces("application/json")]
    public class ProductController : Controller
    {
        private readonly IFridgeService fridgeService;
        private readonly IFridgeProductService fridgeProductService;
        private readonly IUserFridgeService userFridgeService;
        private readonly IUserService userService;
        private readonly IProductService productService;
        private readonly IProductInfoService productInfoService;

        private UserManager<ApplicationUser> _userManager;

        public ProductController(
            UserManager<ApplicationUser> userManager,
            IUserFridgeService serv,
            IUserService serv2,
            IFridgeService serv3,
            IFridgeProductService serv4,
            IProductService serv5,
            IProductInfoService serv6
            )
        {
            _userManager = userManager;
            userFridgeService = serv;
            userService = serv2;
            fridgeService = serv3;
            fridgeProductService = serv4;
            productService = serv5;
            productInfoService = serv6;
        }

        [Route("api/product/getall")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            List<ProductInfoViewModel> list = new List<ProductInfoViewModel>();
            var products = await productInfoService.Get(); 
            foreach (var prod in products)
            {
                list.Add(new ProductInfoViewModel(prod.Product, prod));
                ViewBag.Username.Add(prod.Product.User.UserName);
            } 
            return Ok(list);
        }



        // GET api/values
        [Route("api/product")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<ProductInfoViewModel> list = new List<ProductInfoViewModel>();
            var user_id = _userManager.GetUserId(User);
            var products = await productInfoService.Get(m=>m.Product.UserId==user_id); 
            foreach (var prod in products)
            {
                list.Add(new ProductInfoViewModel(prod.Product, prod)); 
            } 
            return Ok(list);
        }

        // GET api/values/5
        [Route("api/product")]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)  //product_id
        {
            var product = await productInfoService.GetByProductId(id);
            var prod_info = new ProductInfoViewModel(product.Product, product);
            return Ok(prod_info);
        }

        // POST api/values
        [Route("api/product")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ProductInfoViewModel model)
        {
            if (ModelState.IsValid)
            {
                var prod = new ProductInfo
                {
                    Carb = model.Carb,
                    Fat = model.Fat,
                    Kkal = model.Kkal,
                    Protein = model.Protein,
                    ProductId = model.ProductId,
                    Product = new Product
                    {
                        Description = model.Description,
                        ImgURL = model.ImgURL,
                        Name = model.Name,
                        UserId = _userManager.GetUserId(User)
                    }
                };
                await productInfoService.Add(prod);
                return Ok(prod);
                //return Redirect("/Product/Index");
            }
            return BadRequest(ModelState);

        }

        // PUT api/values/5
        [Route("api/product")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody]ProductInfoViewModel model)  //product_id
        {
            if (ModelState.IsValid)
            {
                var db_prod = await productInfoService.GetByProductId(id);
                if (db_prod != null)
                {
                    //???
                    var prod = new ProductInfo
                    {
                        Carb = model.Carb,
                        Fat = model.Fat,
                        Kkal = model.Kkal,
                        Protein = model.Protein,
                        ProductId = model.ProductId,
                        Product = await productService.Get(model.ProductId)
                    };
                    await productInfoService.Update(prod); 
                    return Ok(prod);
                }
                return NotFound();
            }
            return BadRequest(ModelState);
        }


        // DELETE api/values/5
        [Route("api/product")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)  //product_id
        {
            if (ModelState.IsValid)
            {
                var prod = await productInfoService.GetByProductId(id);
                if (prod != null)
                {
                    await productInfoService.Delete(prod);
                    return Ok(prod);
                }
                return NotFound();
            }
            return BadRequest(ModelState); 
        }
    }
}