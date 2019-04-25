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
    public class FridgeProductController : Controller
    {
        private readonly IFridgeService fridgeService;
        private readonly IFridgeProductService fridgeProductService;
        private readonly IUserFridgeService userFridgeService;
        private readonly IUserService userService;
        private readonly IProductService productService;
        private readonly IProductInfoService productInfoService;

        private UserManager<ApplicationUser> _userManager;

        public FridgeProductController(
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

        [Route("api/fridgeproduct/admingetall")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var list = new List<OneFridgeProductViewModel>();
            var products = (await fridgeProductService.Get()).ToList();
            foreach (var prod in products)
            {
                list.Add(new OneFridgeProductViewModel(prod)); 
            }
            return Ok(list);
        }
        
        // GET api/values
        [Route("api/fridgeproduct")]
        [HttpGet]
        public async Task<IActionResult> Get()
        { 
            var list = new List<OneFridgeProductViewModel>();
            var user_id = _userManager.GetUserId(User);
            var products = (await fridgeProductService.Get(m=>m.UserId==user_id)).ToList();
            foreach (var prod in products)
            {
                list.Add(new OneFridgeProductViewModel(prod));
            }
            return Ok(list);
        }

        // GET api/values/5
        [Route("api/fridgeproduct")]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)  //fridgeproduct_id
        { 
            var product = await fridgeProductService.Get(id); 
            return Ok(product);
        }

        [Route("api/fridgeproduct/getforfridge")]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetForFridge(int id)  //fridge_id
        {
            var list = new List<OneFridgeProductViewModel>();
            var products = (await fridgeProductService.Get(m => m.FridgeId == id)).ToList();
            foreach (var prod in products)
            {
                list.Add(new OneFridgeProductViewModel(prod));
            }
            return Ok(list);
        }

        // POST api/values
        [Route("api/fridgeproduct")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] OneFridgeProductViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user_id = _userManager.GetUserId(User);
                var prod = new FridgeProduct
                {
                    Amount=model.Amount,
                    DateBuy=model.DateBuy,
                    DateValid=model.DateValid,
                    Description=model.Description,
                    EI=model.EI,
                    FridgeId=model.FridgeId,
                    Price=model.Price,
                    ProductId=model.ProductId,
                    UserId=user_id
                };
                await fridgeProductService.Add(prod);
                return Ok(prod); 
            }
            return BadRequest(ModelState);

        }

        // PUT api/values/5
        [Route("api/fridgeproduct")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody]OneFridgeProductViewModel model)  //product_id
        {
            if (ModelState.IsValid)
            {
                var db_prod = await fridgeProductService.Get(id);
                if (db_prod != null)
                {
                    var user_id = _userManager.GetUserId(User);
                    var prod = new FridgeProduct
                    {
                        Amount = model.Amount,
                        DateBuy = model.DateBuy,
                        DateValid = model.DateValid,
                        Description = model.Description,
                        EI = model.EI,
                        FridgeId = model.FridgeId,
                        Price = model.Price,
                        ProductId = model.ProductId,
                        UserId = user_id
                    };
                    await fridgeProductService.Update(prod);
                    return Ok(prod);
                }
                return NotFound();
            }
            return BadRequest(ModelState);
        }


        // DELETE api/values/5
        [Route("api/fridgeproduct")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)  //fridgeproduct_id
        {
            if (ModelState.IsValid)
            {
                var prod = await fridgeProductService.Get(id);
                if (prod != null)
                {
                    await fridgeProductService.Delete(prod);
                    return Ok(prod);
                }
                return NotFound();
            }
            return BadRequest(ModelState);
        }
    }
}