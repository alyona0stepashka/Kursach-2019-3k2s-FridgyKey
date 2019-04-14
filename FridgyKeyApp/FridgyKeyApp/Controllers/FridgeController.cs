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
    public class FridgeController : Controller
    {
        IFridgeService fridgeService;
        IFridgeProductService fridgeProductService;
        IUserFridgeService userFridgeService;
        IUserService userService;
        IStickerService stickerservice;

        private UserManager<ApplicationUser> _userManager;


        //public FridgeController(UserManager<ApplicationUser> userManager)
        //{
        //    _userManager = userManager;
        //}
        public FridgeController(
            UserManager<ApplicationUser> userManager,
            IUserFridgeService serv, 
            IUserService serv2, 
            IFridgeService serv3, 
            IFridgeProductService serv4,
            IStickerService serv5
            )
        {
            _userManager = userManager;
            userFridgeService = serv;
            userService = serv2;
            fridgeService = serv3;
            fridgeProductService = serv4;
            stickerservice = serv5;
        }


        [Authorize]
        public IActionResult Index()
        {
            List<UsersFridgeViewModel> model = new List<UsersFridgeViewModel>();
            var fridges = fridgeService.GetAll().ToList();
            foreach (var fridge in fridges)
            {
                var users = userFridgeService.GetAllUsersByFridgeId(fridge.Id).ToList();
                model.Add(new UsersFridgeViewModel(fridge, users));
            }
            return View(model);
        }

        [HttpGet]
        [Authorize]
        public ActionResult Edit(int fridge_id)
        {
            var fridge = fridgeService.GetFridge(fridge_id);
            return View(fridge);
        }
        [HttpPost]
        [Authorize]
        public ActionResult Edit(Fridge fridge)
        {
            fridgeService.Update(fridge);
            return Redirect("UserFridge/Index/");
        }
        [HttpGet]
        [Authorize]
        public ActionResult Open(int fridge_id)
        { 
            var fridge = fridgeService.GetFridge(fridge_id);
            var products = fridge.FridgeProducts.ToList();
            var stickers = stickerservice.GetAllByFridgeId(fridge_id).ToList();

            return View(new FridgeProductViewModel(products, fridge, stickers));
        }
    }
}