using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Castle.Core.Logging;
using FK.BLL.Interfaces;
using FK.Models;
using FridgyKeyApp.Models;
using FridgyKeyApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FridgyKeyApp.Controllers
{
    [Authorize]
    public class StickerController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager; 
        IFridgeService fridgeService;
        IFridgeProductService fridgeProductService;
        IUserFridgeService userFridgeService;
        IUserService userService;
        IStickerService stickerService;

        public StickerController(
            UserManager<ApplicationUser> userManager, 
            IUserFridgeService serv,
            IUserService serv2,
            IFridgeService serv3,
            IFridgeProductService serv4,
            IStickerService serv5)
        {
            _userManager = userManager;  
            userFridgeService = serv;
            userService = serv2;
            fridgeService = serv3;
            fridgeProductService = serv4;
            stickerService = serv5;
        }
        public IActionResult Index()
        {
            return View();
        }

        //public IActionResult FridgeStickers(int id) //fridge_id
        //{

        //}

        //[HttpGet]
        //[Authorize]
        //public IActionResult Send(int id)  //fridge_id
        //{
        //    var user = userService.GetUser(_userManager.GetUserId(User));
        //    return PartialView("SendSticker",new SendStickerViewModel() { Username = user.UserName, FridgeId = id });
        //}
        [HttpPost]
        [Authorize]
        public IActionResult Send(SendStickerViewModel model)  //???
        {
            var sticker = new Sticker()
            {
                DateAdd=DateTime.Now,
                Text=model.Text,
                FridgeId=model.FridgeId,
                UserId=_userManager.GetUserId(User)
            };
            stickerService.Create(sticker);
            return Redirect("Fridge/Open/"+model.FridgeId);
        }
    }
}