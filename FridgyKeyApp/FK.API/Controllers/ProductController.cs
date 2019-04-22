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
    [Route("api/Product")]
    public class ProductController : Controller
    {
        //private readonly IFridgeService fridgeService;
        //private readonly IFridgeProductService fridgeProductService;
        //private readonly IUserFridgeService userFridgeService;
        //private readonly IUserService userService;
        //private readonly IProductService productService;
        //private readonly IProductInfoService productInfoService;

        //private UserManager<ApplicationUser> _userManager;

        //public ProductController(
        //    UserManager<ApplicationUser> userManager,
        //    IUserFridgeService serv,
        //    IUserService serv2,
        //    IFridgeService serv3,
        //    IFridgeProductService serv4,
        //    IProductService serv5,
        //    IProductInfoService serv6
        //    )
        //{
        //    _userManager = userManager;
        //    userFridgeService = serv;
        //    userService = serv2;
        //    fridgeService = serv3;
        //    fridgeProductService = serv4;
        //    productService = serv5;
        //    productInfoService = serv6;
        //}

        //// GET api/values
        //[HttpGet]
        //public async Task<IActionResult> Get()
        //{
        //    List<ProductInfoViewModel> list = new List<ProductInfoViewModel>();
        //    var products = productInfoService.GetAll().ToList();
        //    ViewBag.Username = new List<string>();
        //    foreach (var prod in products)
        //    {
        //        list.Add(new ProductInfoViewModel(prod.Product, prod));
        //        ViewBag.Username.Add(prod.Product.User.UserName);
        //    }
        //    return Ok(list);
        //}

        //// GET api/values/5
        //[HttpGet("{id}")]
        //public async Task<IActionResult> Get(int id)  //product_id
        //{
        //    var product = productInfoService.GetProductInfoByProductId(id);
        //    var prod_info = new ProductInfoViewModel(product.Product, product);
        //    return Ok(prod_info);
        //}

        //// POST api/values
        //[HttpPost]
        //public async Task<IActionResult> Create([FromBody] ProductInfoViewModel model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        var prod = new ProductInfo
        //        {
        //            Carb = model.Carb,
        //            Fat = model.Fat,
        //            Kkal = model.Kkal,
        //            Protein = model.Protein,
        //            ProductId = model.ProductId,
        //            Product = new Product
        //            {
        //                Description = model.Description,
        //                ImgURL = model.ImgURL,
        //                Name = model.Name,
        //                UserId = _userManager.GetUserId(User)
        //            }
        //        };
        //        productInfoService.Create(prod);
        //        return Ok(prod);
        //        //return Redirect("/Product/Index");
        //    }
        //    return BadRequest(ModelState);

        //}

        //// PUT api/values/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> Update(int id, [FromBody]ProductInfoViewModel model)  //product_id
        //{
        //    if (ModelState.IsValid)
        //    {
        //        var db_prod = productInfoService.GetProductInfoByProductId(id);
        //        if (db_prod != null)
        //        {
        //            //???
        //            var prod = new ProductInfo
        //            {
        //                Carb = model.Carb,
        //                Fat = model.Fat,
        //                Kkal = model.Kkal,
        //                Protein = model.Protein,
        //                ProductId = model.ProductId,
        //                Product = productService.GetProduct(model.ProductId)
        //            };
        //            productInfoService.Update(prod);
        //            //return Redirect("/Product/Index");
        //            return Ok(prod);
        //        }
        //        return NotFound();
        //    }
        //    return BadRequest(ModelState);
        //}
    

        //// DELETE api/values/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> Delete(int id)  //product_id
        //{
        //    if (ModelState.IsValid)
        //    {
        //        var prod = productInfoService.GetProductInfoByProductId(id);
        //        if (prod != null)
        //        {
        //            productInfoService.Delete(prod);
        //            return Ok(prod);
        //        }
        //        return NotFound();
        //    }
        //    return BadRequest(ModelState);


        //    //return View("Index");

        //}
    }
}