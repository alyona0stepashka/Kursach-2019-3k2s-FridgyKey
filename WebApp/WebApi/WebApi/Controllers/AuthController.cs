using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using FK.API.ViewModels; 
using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FK.API.Controllers
{
    [Produces("application/json")]
    public class AuthController : Controller
    {
        private readonly IUserService _userService;
        private readonly IEmailService _emailService;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IMapper _mapper;

        public AuthController(IUserService userService, IEmailService emailService, UserManager<ApplicationUser> userManager, IMapper mapper)
        {
            _userService = userService;
            _emailService = emailService;
            _userManager = userManager;
            _mapper = mapper;
            _userService.SeedDatabase();
        }

        [HttpPost]
        [Route("api/auth/login")]
        public async Task<IActionResult> Login([FromBody]SignInViewModel SignInViewModel)
        {
            if (ModelState.IsValid)
            {
                ApplicationUser ApplicationUser = _mapper.Map<SignInViewModel, ApplicationUser>(SignInViewModel);
                ApplicationUser user = await _userManager.FindByNameAsync(ApplicationUser.UserName);

                if (user != null)
                {
                    if (!await _userManager.IsEmailConfirmedAsync(user))
                    {
                        return Unauthorized();
                    }
                    else
                    {
                        Microsoft.AspNetCore.Identity.SignInResult result = await _userService.SignIn(ApplicationUser);
                        return Ok(result.Succeeded);
                    }
                }
                return NotFound();
            }
            return BadRequest(ModelState);
        }

        [HttpPost]
        [Route("api/auth/externalLogin")]
        public async Task<IActionResult> ExternalLogin([FromBody]SignUpViewModel externelUser)
        {
            if (ModelState.IsValid)
            {
                ApplicationUser user = await _userManager.FindByNameAsync(externelUser.Username);
                if (user != null)
                {
                    return await Login(new SignInViewModel { Username = externelUser.Username, Password = externelUser.Password });
                }
                IActionResult result = await SignUp(externelUser);
                ApplicationUser newUser = await _userManager.FindByNameAsync(externelUser.Username);
                string code = await _userManager.GenerateEmailConfirmationTokenAsync(newUser);
                await _userManager.ConfirmEmailAsync(newUser, code);
                return await Login(new SignInViewModel { Username = externelUser.Username, Password = externelUser.Password });
            }
            return BadRequest(ModelState);
        }

        [HttpGet]
        [Route("api/auth/logout")]
        public async Task<IActionResult> Logout()
        {
            await _userService.Logout();
            return Ok();
        }

        [HttpPost]
        [Route("api/auth/registration")]
        public async Task<IActionResult> SignUp([FromBody]SignUpViewModel signUp)
        {
            if (ModelState.IsValid)
            {
                ApplicationUser ApplicationUser = _mapper.Map<SignUpViewModel, ApplicationUser>(signUp);

                OperationResult operationResult = await _userService.SignUp(ApplicationUser);
                if (operationResult.Result)
                {
                    ApplicationUser user = await _userManager.FindByEmailAsync(ApplicationUser.Email);
                    string code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    string callbackUrl = Url.Action(
                        "ConfirmEmail",
                        "Auth",
                        new { userId = user.Id, code = code },
                        protocol: HttpContext.Request.Scheme
                    );
                    await _emailService.SendEmailAsync(user.Email, "Confirm your account", GetEmailMessageText(callbackUrl));
                }

                return Ok(operationResult);
            }
            return BadRequest(ModelState);
        }

        [HttpGet]
        [Route("api/auth/user")]
        public async Task<CurrentUser> GetCurrentUser()
        {
            if (User.Identity.IsAuthenticated)
            {
                CurrentUser user = await _userService.GetUser(User.Identity.Name);
                user.IsAuntificated = true;
                return user;
            }
            return new CurrentUser();
        }

        [HttpGet]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId != null && code != null)
            {
                ApplicationUser user = await _userManager.FindByIdAsync(userId);
                if (user != null)
                {
                    IdentityResult result = await _userManager.ConfirmEmailAsync(user, code);
                    if (result.Succeeded)
                    {
                        return RedirectToAction("Index", "Home");
                    }
                }
            }

            return BadRequest();
        }

        private string GetEmailMessageText(string url)
        {
            return $"Подтвердите регистрацию, перейдя по ссылке: <a href='{url}'>link</a>";
        }
    }
}