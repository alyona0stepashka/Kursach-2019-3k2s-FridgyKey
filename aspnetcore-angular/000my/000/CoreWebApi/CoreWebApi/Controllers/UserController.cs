using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks; 
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

namespace CoreWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/user")]
    public class UserController : Controller
    {
        private readonly IUserService _userService; 

        public UserController(IUserService ser1)
        { 
            _userService = ser1; 
        }

        [HttpPost]
        [Route("register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser([FromBody]CurrentUser model)
        {
            return Ok(await _userService.RegisterNewUser(model));
        }

        [HttpPost]
        [Route("login")]
        //POST : /api/ApplicationUser/Login
        public async Task<ActionResult> Login([FromBody]LoginModel model)
        {
            var user = (await _userService.GetUsers()).Where(m=>m.Email==model.UserName).SingleOrDefault(); 
            var checkPassw = await _userService.CheckPassword(user, model.Password);
            if (user != null && checkPassw)
            { 
                var token = await _userService.LoginForToken(user);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        } 
    }
}