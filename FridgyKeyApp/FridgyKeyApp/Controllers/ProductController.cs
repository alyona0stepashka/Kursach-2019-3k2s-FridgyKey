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

namespace FridgyKeyApp.Controllers
{
    public class ProductController : Controller
    {

        IFridgeService fridgeService;
        IFridgeProductService fridgeProductService;
        IUserFridgeService userFridgeService;
        IUserService userService;
        IProductService productService;
        IProductInfoService productInfoService;

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


        public IActionResult Index()
        {
            var products = productInfoService.GetAll().ToList();
            return View(products);
        }

        [HttpGet] 
        public ActionResult  Show(int product_id)
        {
            var product = productInfoService.GetProductInfoByProductId(product_id);
            var prod_info = new ProductInfoViewModel(product.Product, product);
            return View(prod_info);
        }
        [HttpGet]
        [Authorize]
        public ActionResult Create()
        {
            string user_id = _userManager.GetUserId(User);
            var user = userService.GetUser(user_id);
            var product = new ProductInfoViewModel
                (
                new Product
                {
                    UserId = user_id,
                    User = user
                },
                new ProductInfo()
                );
            return View(product);
        }

        [HttpPost]
        [Authorize]
        public ActionResult Create(ProductInfoViewModel product)
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
            //string user_id = _userManager.GetUserId(User);
            //product.Product.UserId = user_id;
            //product.Product.User = userService.GetUser(user_id);
            productInfoService.Create(prod);
            return Redirect("/Product/Index");
        }
        [HttpGet]
        [Authorize]
        public ActionResult Edit(int product_id)
        {
            var product = productInfoService.GetProductInfoByProductId(product_id);
            return View(product);
        }

        [HttpPost]
        [Authorize]
        public ActionResult Edit(ProductInfo product)
        {
            productInfoService.Update(product);
            return Redirect("/Product/Index");
        }
        [HttpGet]
        [Authorize]
        public ActionResult Delete(int product_id)
        {
            productService.Delete(productService.GetProduct(product_id));
            return View("Index");
        }
    }
}