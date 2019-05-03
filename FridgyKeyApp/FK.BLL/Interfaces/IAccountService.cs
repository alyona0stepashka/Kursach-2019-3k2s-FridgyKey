using FK.BLL.Infrastructure;
using FK.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Interfaces
{
    public interface IAccountService
    {
        string GetId(ClaimsPrincipal claimsPrincipal);
        Task<ApplicationUser> FindApplicationUserById(string userId);
        Task<ApplicationUser> FindApplicationUserByName(string email);
        Task<OperationDetails> ConfirmEmail(ApplicationUser user, string code);
        Task<OperationDetails> CreateApplicationUser(ApplicationUser newApplicationUser, string password);
        Task<IdentityResult> CreateApplicationUser(ApplicationUser newApplicationUser);
        Task<OperationDetails> EmailConfirmed(ApplicationUser user);
        Task<OperationDetails> Authentication(string email, string password, bool rememberMe, bool value);
        Task<OperationDetails> GenerateCode(ApplicationUser user);
        Task<ExternalLoginInfo> GetExternalLoginInfo();
        Task<SignInResult> ExternalLoginSignIn(string loginProvider, string providerKey, bool isPersistent);
        Task<IdentityResult> AddLogin(ApplicationUser user, ExternalLoginInfo info);
        Task<IdentityResult> AddClaim(ApplicationUser user, IEnumerable<Claim> newApplicationUserClaims);
        Task SignIn(ApplicationUser user, bool isPersistent);
        AuthenticationProperties ConfigureExternalProperties(string provider, string redirectUrl);
        Task<OperationDetails> Exit();
        void Dispose();
    }
}
