﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using FK.API.Models; 
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
        private UserManager<ApplicationUser> _userManager;
        private RoleManager<IdentityRole> _roleManager;
        private SignInManager<ApplicationUser> _singInManager;
        private readonly ApplicationSettings _appSettings;

        public UserController(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _singInManager = signInManager;
            _appSettings = appSettings.Value;
            //SeedDatabase();
        }

        [HttpPost]
        [Route("register")]
        //POST : /api/ApplicationUser/Register
        public async Task<Object> PostApplicationUser([FromBody]ApplicationUserModel model)
        {
            model.Role = "user";
            var applicationUser = new ApplicationUser()
            {
                UserName = model.Email,
                Email = model.Email,
                FullName = model.FullName
            };

            try
            {
                var result = await _userManager.CreateAsync(applicationUser, model.Password);
                await _userManager.AddToRoleAsync(applicationUser, model.Role);
                return Ok(result);
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        [HttpPost]
        [Route("login")]
        //POST : /api/ApplicationUser/Login
        public async Task<ActionResult> Login([FromBody]LoginModel model)
        {
            var user = _userManager.Users.Where(m => m.Email == model.UserName).FirstOrDefault();
            //var user = await _userManager.FindByNameAsync(model.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
            {
                //Get role assigned to the user
                var role = await _userManager.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();

                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID",user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType,role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddDays(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                return Ok(new { token });
            }
            else
                return BadRequest(new { message = "Username or password is incorrect." });
        }

        //async void SeedDatabase()
        //{
        //    try
        //    {
        //        var users = _userManager.Users.ToList();
        //        var roles = _roleManager.Roles.ToList();
        //        if (roles.Count == 0)
        //        {
        //            await _roleManager.CreateAsync(new IdentityRole("admin"));
        //            await _roleManager.CreateAsync(new IdentityRole("user"));
        //        }
        //        if (users.Count == 0)
        //        {
        //            var user = new ApplicationUser
        //            {
        //                UserName = "pas@mail.ru",
        //                EmailConfirmed = true,
        //                Email = "pas@mail.ru"
        //            };
        //            await _userManager.CreateAsync(user, "Parol_01");
        //            await _userManager.AddToRoleAsync(user, "admin");
        //        }
        //    }
        //    catch (Exception e)
        //    {

        //    }
        //}
    }
}