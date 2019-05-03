using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.DAL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Services
{
    public class AccountService : IAccountService
    {
        private IUnitOfWork Database { get; set; }
        public UserManager<ApplicationUser> ApplicationUserManager { get; }
        public SignInManager<ApplicationUser> SignInManager { get; }

        public AccountService(IUnitOfWork uow, UserManager<ApplicationUser> manager, SignInManager<ApplicationUser> signManager)
        {
            Database = uow;
            ApplicationUserManager = manager;
            SignInManager = signManager;
        }

        public string GetId(ClaimsPrincipal claimsPrincipal)
        {
            return ApplicationUserManager.GetUserId(claimsPrincipal);
        }

        public async Task<OperationDetails> CreateApplicationUser(ApplicationUser newApplicationUser, string password)
        {
            var user = await ApplicationUserManager.FindByEmailAsync(newApplicationUser.Email);
            if (user == null)
            {
                user = new ApplicationUser
                {
                    Email = newApplicationUser.Email,
                    UserName = newApplicationUser.Email, 
                };
                var result = await ApplicationUserManager.CreateAsync(user, password);
                if (result.Errors.Any())
                {
                    return new OperationDetails(false, result.Errors.FirstOrDefault().ToString(), "");
                }
                else
                {
                    await ApplicationUserManager.AddToRoleAsync(user, "user");
                    return new OperationDetails(true, "Successful registration", user.Id);
                }
            }
            else
            {
                return new OperationDetails(false, "ApplicationUser with this login already exists", "Email");
            }
        }

        public async Task<IdentityResult> CreateApplicationUser(ApplicationUser newApplicationUser)
        {
            return await ApplicationUserManager.CreateAsync(newApplicationUser);
        }

        public async Task<ApplicationUser> FindApplicationUserById(string userId)
        {
            var user = await ApplicationUserManager.FindByIdAsync(userId);
            return user ?? null;
        }

        public async Task<ApplicationUser> FindApplicationUserByName(string email)
        {
            var user = await ApplicationUserManager.FindByNameAsync(email);
            return user ?? null;
        }

        public async Task<OperationDetails> ConfirmEmail(ApplicationUser user, string code)
        {
            var success = await ApplicationUserManager.ConfirmEmailAsync(user, code);
            return success.Succeeded ? new OperationDetails(true, "Success", "") : new OperationDetails(false, "Error", "");
        }

        public async Task<OperationDetails> GenerateCode(ApplicationUser user)
        {
            var code = await ApplicationUserManager.GenerateEmailConfirmationTokenAsync(user);
            return code != null ? new OperationDetails(true, "Success", code) : new OperationDetails(false, "Error", "");
        }

        public async Task<OperationDetails> EmailConfirmed(ApplicationUser user)
        {
            var confirm = await ApplicationUserManager.IsEmailConfirmedAsync(user);
            return !confirm ? new OperationDetails(false, "Error", "") : new OperationDetails(true, "Success", "");
        }

        public async Task<OperationDetails> Authentication(string email, string password, bool rememberMe, bool value)
        {
            var success = await SignInManager.PasswordSignInAsync(email, password, rememberMe, value);
            return success.Succeeded ? new OperationDetails(true, "Successful login", "") : new OperationDetails(false, "Error login", "");
        }

        public async Task<OperationDetails> Exit()
        {
            await SignInManager.SignOutAsync();
            return new OperationDetails(true, "Successful exit", "");
        }

        public AuthenticationProperties ConfigureExternalProperties(string provider, string redirectUrl)
        {
            return SignInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
        }

        public async Task<ExternalLoginInfo> GetExternalLoginInfo()
        {
            return await SignInManager.GetExternalLoginInfoAsync();
        }

        public async Task<SignInResult> ExternalLoginSignIn(string loginProvider, string providerKey, bool isPersistent)
        {
            return await SignInManager.ExternalLoginSignInAsync(loginProvider, providerKey, isPersistent);
        }

        public async Task<IdentityResult> AddLogin(ApplicationUser user, ExternalLoginInfo info)
        {
            return await ApplicationUserManager.AddLoginAsync(user, info);
        }

        public async Task<IdentityResult> AddClaim(ApplicationUser user, IEnumerable<Claim> newApplicationUserClaims)
        {
            return await ApplicationUserManager.AddClaimsAsync(user, newApplicationUserClaims);
        }

        public async Task SignIn(ApplicationUser user, bool isPersistent)
        {
            await SignInManager.SignInAsync(user, isPersistent);
        }

        public void Dispose()
        {
            Database.Dispose();
        }

    }
}
