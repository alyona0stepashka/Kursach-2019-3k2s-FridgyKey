using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.Models;
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

        private UserManager<ApplicationUser> _userManager;
         
        public ProductController(
            UserManager<ApplicationUser> userManager,
            IUserFridgeService serv,
            IUserService serv2,
            IFridgeService serv3,
            IFridgeProductService serv4,
            IProductService serv5
            )
        {
            _userManager = userManager;
            userFridgeService = serv;
            userService = serv2;
            fridgeService = serv3;
            fridgeProductService = serv4;
            productService = serv5;
        }


        public IActionResult Index()
        {
            var products = productService.GetAll().ToList();
            return View(products);
        }

        [HttpGet]
        [Authorize]
        public ActionResult 
    }
}