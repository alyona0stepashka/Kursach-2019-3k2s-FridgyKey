using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.Models;
using FridgyKeyApp.Models; 
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace FridgyKeyApp.Controllers
{
    [Authorize]
    public class FridgeProductController : Controller
    {

        IFridgeService fridgeService;
        IFridgeProductService fridgeProductService;
        IUserFridgeService userFridgeService;
        IUserService userService;
        IProductService productService;
        IProductInfoService productInfoService;

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
        [HttpGet]
        [Authorize]
        public IActionResult Index(int id)  //fridge_id
        {
            return View();
        }
        //[AllowAnonymous]
        //[HttpGet]
        //public ActionResult Show(int id) //fridgeproduct_id
        //{
        //    var product = fridgeProductService.GetFridgeProduct(id); 
        //    return View(product);
        //}
        [HttpGet]
        [Authorize]
        public IActionResult Create(int id)  //fridge_id
        {
            //    string user_id = _userManager.GetUserId(User); 
            //    var product = new ProductInfoViewModel
            //        (
            //        new Product
            //        {
            //            UserId = user_id 
            //        },
            //        new ProductInfo()
            //        );
            SelectList productName = new SelectList(productService.GetAllAccess(_userManager.GetUserId(User)), "Name", "Name");
            ViewBag.ProductName = productName;
            return View(new OneFridgeProductViewModel() { FridgeId = id});
        }

        [HttpPost]
        [Authorize]
        public IActionResult Create(OneFridgeProductViewModel model)
        {
            var user_id = _userManager.GetUserId(User);
            var product = new FridgeProduct()
            {
                Amount = model.Amount,
                DateBuy = DateTime.Now,
                DateValid = model.DateValid,
                Description = model.Description,
                EI = model.EI,
                FridgeId = model.FridgeId,
                Price = model.Price,
                UserId = user_id,
                ProductId = productService.GetProductByUserIdProductName(user_id, model.Name).Id 
            };
            fridgeProductService.Create(product); 
            return Redirect("/Fridge/Open/"+model.FridgeId);
        }
        [HttpGet]
        [Authorize] 
        public IActionResult Edit(int id)  //fridgeproduct_id
        {
            var product = productInfoService.GetProductInfoByProductId(id);
            var prod = new ProductInfoViewModel(product.Product, product);
            return View(prod);
        }

        [HttpPost]
        [Authorize]
        public IActionResult Edit(ProductInfoViewModel product)
        {
            var prod = new ProductInfo
            {
                Carb = product.Carb,
                Fat = product.Fat,
                Kkal = product.Kkal,
                Protein = product.Protein,
                ProductId = product.ProductId,
                Product = productService.GetProduct(product.ProductId)
            };
            productInfoService.Update(prod);
            return Redirect("/Product/Index");
        }
        [HttpGet]
        [Authorize]
        public IActionResult Delete(int id)  //fridgeproduct_id
        {
            fridgeProductService.Delete(fridgeProductService.GetFridgeProduct(id));
            return Redirect("/Product/Index");
        }
    }
}