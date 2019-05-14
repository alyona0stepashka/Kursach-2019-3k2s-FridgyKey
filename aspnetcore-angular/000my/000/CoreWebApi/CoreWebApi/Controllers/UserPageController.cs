using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Models;
using FK.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/userpage")]
    public class UserPageController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        public UserPageController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        //GET : /api/UserProfile
        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            var model = new CurrentUser
            {
                Id = user.Id,
                Email = user.Email,
                FullName = user.FullName,
                Password = user.PasswordHash,
                Role = (await _userManager.GetRolesAsync(user)).FirstOrDefault()
            };
            return Ok(model);
        }

        //[HttpGet]
        //[Authorize(Roles = "admin")]
        //[Route("admin")]
        //public string GetForAdmin()
        //{
        //    return "Web method for Admin";
        //}

        //[HttpGet]
        //[Authorize(Roles = "user")]
        //[Route("customer")]
        //public string GetCustomer()
        //{
        //    return "Web method for Customer";
        //}

        //[HttpGet]
        //[Authorize(Roles = "admin,user")]
        //[Route("foradminorcustomer")]
        //public string GetForAdminOrCustomer()
        //{
        //    return "Web method for Admin or Customer";
        //}
    }
}