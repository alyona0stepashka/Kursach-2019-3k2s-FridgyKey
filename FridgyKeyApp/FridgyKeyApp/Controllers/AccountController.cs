using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using FridgyKeyApp.Models; 
using FK.Models;
using FK.BLL.Interfaces;
using FridgeKeyApp.Models.New;

namespace FridgyKeyApp.Controllers
{
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;
        private readonly IEmailService _emailService;
        public AccountController(IAccountService accountService,
            IEmailService emailService)
        {
            _accountService = accountService;
            _emailService = emailService;
        }

        [HttpGet]
        public IActionResult Register() => View();

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var user = new ApplicationUser
            {
                Email = model.Email,
                UserName = model.Email,
            };
            var result = await _accountService.CreateApplicationUser(user, model.Password);
            if (result.Succeeded)
            {
                var findUser = await _accountService.FindApplicationUserById(result.Property);
                var code = await _accountService.GenerateCode(findUser);

                var callbackUrl = Url.Action(
                    "ConfirmEmail",
                    "Account",
                    new { userId = findUser.Id, code = code.Property },
                    protocol: HttpContext.Request.Scheme);

                await _emailService.SendEmailAsync(user.Email, "Confirm your account",
                    $"Confirm the registration by clicking on the link: <a href='{callbackUrl}'>link</a>");
                return View("DisplayEmail");
            }
            else
                ModelState.AddModelError("", result.Message);
            return View(model);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return View("Error");
            }
            var user = await _accountService.FindApplicationUserById(userId);
            if (user == null)
            {
                return View("Error");
            }
            var result = await _accountService.ConfirmEmail(user, code);
            if (result.Succeeded)
                return RedirectToAction("Index", "Home");
            else
                return View("Error");
        }

        [HttpGet]
        public IActionResult Login(string returnUrl = null) => View(new LoginViewModel { ReturnUrl = returnUrl });

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (!ModelState.IsValid)
                return View(model);

            var user = await _accountService.FindApplicationUserByName(model.Email);
            if (user != null)
            {
                var res = await _accountService.EmailConfirmed(user);
                if (!res.Succeeded)
                {
                    ModelState.AddModelError(string.Empty, "You have not confirmed your email");
                    return View(model);
                }
            }

            var result = await _accountService.Authentication(model.Email, model.Password, model.RememberMe, false);
            if (result.Succeeded)
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                ModelState.AddModelError("", "Incorrect username and / or password");
            }
            return View(model);
        }

        public IActionResult SignInWithGoogle()
        {
            var authenticationProperties =
                _accountService.ConfigureExternalProperties("Google",
                    Url.Action(nameof(SignInWithSomeServiceCallback)));
            return Challenge(authenticationProperties, "Google");
        }

        public IActionResult SignInWithFacebook()
        {
            var authenticationProperties =
                _accountService.ConfigureExternalProperties("Google",
                    Url.Action(nameof(SignInWithSomeServiceCallback)));
            return Challenge(authenticationProperties, "Facebook");
        }

        public async Task<IActionResult> SignInWithSomeServiceCallback()
        {
            var info = await _accountService.GetExternalLoginInfo();
            var result = await _accountService.ExternalLoginSignIn(info.LoginProvider, info.ProviderKey, isPersistent: false);

            if (result.Succeeded)
                return RedirectToAction("Index", "Home");

            var email = info.Principal.FindFirstValue(ClaimTypes.Email);
            var newUser = new ApplicationUser
            {
                UserName = email,
                Email = email,
                EmailConfirmed = true
            };
            var createResult = await _accountService.CreateApplicationUser(newUser);
            if (!createResult.Succeeded)
                throw new Exception(createResult.Errors.Select(e => e.Description).Aggregate((errors, error) => $"{errors}, {error}"));

            await _accountService.AddLogin(newUser, info);
            var newUserClaims = info.Principal.Claims.Append(new Claim("userId", newUser.Id));
            await _accountService.AddClaim(newUser, newUserClaims);
            await _accountService.SignIn(newUser, isPersistent: false);
            await HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);

            return RedirectToAction("Index", "Home");
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> LogOff()
        {
            var result = await _accountService.Exit();
            return result.Succeeded ? RedirectToAction("Login", "Account") : RedirectToAction("Index", "Home");
        }
    }
}
