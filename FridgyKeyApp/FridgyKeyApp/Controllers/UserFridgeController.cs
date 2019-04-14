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
    public class UserFridgeController : Controller
    { 

        IUserFridgeService userFridgeService;
        IUserService userService;

        private UserManager<ApplicationUser> _userManager;

      
        public UserFridgeController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }
        public UserFridgeController(IUserFridgeService serv,IUserService serv2)
        {
            userFridgeService = serv;
            userService = serv2;
        }


        [Authorize]
        public async Task<IActionResult> Index()
        { 
            var user_id = _userManager.GetUserId(User);
            var user_fridges = userFridgeService.GetFridgeByUserId(user_id).ToList();
            var user = await _userManager.FindByIdAsync(user_id);
            return View(new UserFridgeViewModel(user_fridges, user));
        }






        protected override void Dispose(bool disposing)
        {
            userFridgeService.Dispose();
            base.Dispose(disposing);
        }


    }
}