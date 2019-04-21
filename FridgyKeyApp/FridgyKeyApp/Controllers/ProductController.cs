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
    [Authorize]
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

        [AllowAnonymous]
        public IActionResult Index()
        {
            List<ProductInfoViewModel> list = new List<ProductInfoViewModel>();
            var products = productInfoService.GetAllAccess(_userManager.GetUserId(User)).ToList();
            ViewBag.Username = new List<string>();
            foreach (var prod in products)
            {
                list.Add(new ProductInfoViewModel(prod.Product, prod));
                ViewBag.Username.Add(prod.Product.User.UserName);
            }
            return View(list);
        }
        [AllowAnonymous]
        [HttpGet] 
        public ActionResult Show(int id)
        {
            var product = productInfoService.GetProductInfoByProductId(id);
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
                Product = new Product
                {
                    Description=product.Description,
                    ImgURL=product.ImgURL,
                    Name=product.Name,
                    UserId= _userManager.GetUserId(User)          
                }
            };
            //string user_id = _userManager.GetUserId(User);
            //product.Product.UserId = user_id;
            //product.Product.User = userService.GetUser(user_id);
            productInfoService.Create(prod);
            return Redirect("/Product/Index");
        }
        [HttpGet]
        [Authorize]
        public ActionResult Edit(int id)  //product_id
        {
            var product = productInfoService.GetProductInfoByProductId(id);
            var prod = new ProductInfoViewModel(product.Product, product);
            return View(prod);
        }

        [HttpPost]
        [Authorize]
        public ActionResult Edit(ProductInfoViewModel product)
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
        public ActionResult Delete(int id)
        {
            productService.Delete(productService.GetProduct(id));
            return View("Index");
        }
    }
}