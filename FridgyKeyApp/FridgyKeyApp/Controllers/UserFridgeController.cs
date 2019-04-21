using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
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
    public class UserFridgeController : Controller
    {
        //transient - new for every обращение
        //score - дл одного запроса
        //singltone - для всего приложения

        IFridgeService fridgeService;
        IFridgeProductService fridgeProductService;
        IUserFridgeService userFridgeService;
        IUserService userService;
        IProductService productService;
        IProductInfoService productInfoService;

        private UserManager<ApplicationUser> _userManager;

        public UserFridgeController(
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


        [Authorize]
        public async Task<IActionResult> Index()
        { 
            var user_id = _userManager.GetUserId(User);
            var user_fridges = userFridgeService.GetFridgeByUserId(user_id).ToList();
            var user = await _userManager.FindByIdAsync(user_id);
            return View(new UserFridgeViewModel(user_fridges, user));
        }



        [HttpGet]
        [Authorize]
        public ActionResult Edit(int fridge_id)  //??? создание каскадное и удаление, нужно перед созданием и удалением проиниициализировать все поля
        {
            var fridge = fridgeService.GetFridge(fridge_id);
            return View(fridge);
        }
        [HttpPost]
        [Authorize]
        public ActionResult Create(UserFridge fridge)
        {
            userFridgeService.Create(fridge);

        //    fridgeService.Create(fridge);
        //    userFridgeService.Create(new UserFridge
        //    {
        //        Fridge = fridge,
        //        FridgeId = fridge.Id,
        //        User = userService.GetUser(_userManager.GetUserId(User)),
        //        UserId = _userManager.GetUserId(User)
        //    });
            return Redirect("/UserFridge/Index");
        }
        [HttpGet]
        [Authorize]
        public ActionResult Create()
        {
            var fridge = new UserFridge
            {
                Fridge = new Fridge(), 
                User = userService.GetUser(_userManager.GetUserId(User)),
                UserId = _userManager.GetUserId(User)
            };
            return View(fridge);
        }
        [HttpPost]
        [Authorize]
        public ActionResult Edit(UserFridge fridge)
        {
            fridge.Fridge.PasswordHash = fridge.Fridge.PasswordHash.GetHashCode().ToString();
            userFridgeService.Update(fridge);
            //    var user_id = _userManager.GetUserId(User);
            //    var user = await _userManager.FindByIdAsync(user_id);
            //    fridge.DateCreate = DateTime.Now;
            //    fridge.PasswordHash = fridge.PasswordHash.GetHashCode().ToString();
            //    fridgeService.Create(fridge);
            //    userFridgeService.Create(new UserFridge { Fridge = fridge, FridgeId = fridge.Id, User = user, UserId = user_id });
            return Redirect("/UserFridge/Index");
        }



        protected override void Dispose(bool disposing)
        {
            userFridgeService.Dispose();
            base.Dispose(disposing);
        }


    }
}