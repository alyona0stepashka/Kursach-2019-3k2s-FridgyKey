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


        [Authorize(Roles ="admin")]
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
        //[HttpGet]
        //[Authorize]
        //public ActionResult Edit(int fridge_id)  //?!? создание каскадное и удаление, нужно перед созданием и удалением проиниициализировать все поля
        //{
        //    var fridge = fridgeService.GetFridge(fridge_id);
        //    return View(fridge);
        //}
        //[HttpPost]
        //[Authorize]
        //public ActionResult Create(Fridge fridge)
        //{ 
        //    fridgeService.Create(fridge);
        //    userFridgeService.Create(new UserFridge
        //    {
        //        Fridge = fridge,
        //        FridgeId = fridge.Id,
        //        User = userService.GetUser(_userManager.GetUserId(User)),
        //        UserId = _userManager.GetUserId(User)
        //    });
        //    return Redirect("/UserFridge/Index");
        //}
        //[HttpGet]
        //[Authorize]
        //public ActionResult Create()
        //{
        //    var fridge = new Fridge();  
        //    return View(fridge);
        //}
        //[HttpPost]
        //[Authorize]
        //public async Task<ActionResult> EditAsync(Fridge fridge)
        //{
        //    var user_id = _userManager.GetUserId(User); 
        //    var user = await _userManager.FindByIdAsync(user_id);
        //    fridge.DateCreate = DateTime.Now;
        //    fridge.PasswordHash = fridge.PasswordHash.GetHashCode().ToString();
        //    fridgeService.Create(fridge);
        //    userFridgeService.Create(new UserFridge { Fridge=fridge, FridgeId=fridge.Id,User=user, UserId=user_id}); 
        //    return Redirect("/UserFridge/Index");
        //}

        [HttpGet]
        [Authorize]
        public IActionResult Create()  
        {
            return View(new FridgeViewModel());
        }

        [HttpPost]
        [Authorize]
        public IActionResult Create(FridgeViewModel model)
        {
            var user_id = _userManager.GetUserId(User);
            var fridge = new UserFridge()
            {
                UserId = user_id,
                //User = userService.GetUser(user_id),
                Fridge = new Fridge()
                {
                    Name = model.Name,
                    DateCreate = DateTime.Now,
                    Description = model.Description,
                    PasswordHash = userService.Hash(model.PasswordHash)
                }
            };
            userFridgeService.Create(fridge);
            return Index();
        }


        [HttpGet]
        [Authorize]
        public IActionResult Open(int id)  //fridge_id
        { 
            var fridge = fridgeService.GetFridge(id);
            var products = fridge.FridgeProducts.ToList();
            var stickers = stickerservice.GetAllByFridgeId(id).ToList();
            ViewBag.FridgeId = id;
            return View(new FridgeProductViewModel(products, stickers));
        }
        [HttpGet]
        [Authorize]
        public IActionResult Delete(int id)  //fridge_id
        {
            fridgeService.Delete(fridgeService.GetFridge(id)); 
            return View("Index");
        }
    }
}