using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.DAL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork db { get; set; }
         
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        private RoleManager<IdentityRole> _roleManager;
        private readonly ApplicationSettings _appSettings;

        public UserService(IOptions<ApplicationSettings> appSettings, IUnitOfWork uow, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager,
            RoleManager<IdentityRole> roleManager)
        {
            db = uow;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _appSettings = appSettings.Value;
        }

        async Task<IdentityResult> IUserService.RegisterNewUser(CurrentUser model)
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
                return result;
            }
            catch (Exception ex)
            { 
                throw ex;
            }
        }
        async Task<string> IUserService.LoginForToken(ApplicationUser user)
        {
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
            return token;
        }
        async Task<bool> IUserService.CheckPassword(ApplicationUser user, string password)
        {
            return await _userManager.CheckPasswordAsync(user, password);
        }


















        string IUserService.Hash(string input)
        {
            byte[] hash = Encoding.ASCII.GetBytes(input);
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] hashenc = md5.ComputeHash(hash);
            string output = "";
            foreach (var b in hashenc)
            {
                output += b.ToString("x2");
            }
            return output;
        }


        async Task<SignInResult> IUserService.SignIn(ApplicationUser user)
        {
            return await _signInManager.PasswordSignInAsync(user.UserName, user.PasswordHash, true, false);
        }

        async Task IUserService.Logout()
        {
            await _signInManager.SignOutAsync();
        }

        async Task<OperationResult> IUserService.SignUp(ApplicationUser ApplicationUser)
        {
            var result = await AddUser(ApplicationUser);
            var operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }

        async Task<IEnumerable<ApplicationUser>> IUserService.GetUsers()
        {
            var users = await Task.Factory.StartNew(() => _userManager.Users.ToList());
            return users;
        }

        async Task<OperationResult> IUserService.DeleteUser(ApplicationUser user)
        {
            var result = await _userManager.DeleteAsync(user);
            var operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }



        async Task<IEnumerable<string>> IUserService.GetUserRoles(string userName)
        {
            var userDb = await _userManager.FindByNameAsync(userName);
            return await _userManager.GetRolesAsync(userDb);
        }

        async Task<CurrentUser> IUserService.GetUser(string userName)
        {
            var userDb = await _signInManager.UserManager.FindByNameAsync(userName);
            if (userDb != null)
            {
                var user = new CurrentUser
                {
                    Id = userDb.Id,
                    Role = (await _signInManager.UserManager.GetRolesAsync(userDb)).SingleOrDefault(),
                    Email = userDb.Email,
                    FullName = userDb.FullName
                };
                return user;
            }
            return null;
        } 
        private async Task<IdentityResult> AddUser(ApplicationUser ApplicationUser)
        { 
            var result = await _userManager.CreateAsync(ApplicationUser, ApplicationUser.PasswordHash);
            return result;
        }

        async Task<ApplicationUser> IUserService.GetUserById(string id)
        {
            return await _userManager.FindByIdAsync(id);
        }

        async Task<OperationResult> IUserService.AddToRole(ApplicationUser user, string role)
        {
            var result = await _userManager.AddToRoleAsync(user, role);
            var operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }
         

        async Task<OperationResult> IUserService.UpdateUser(CurrentUser currentUser)
        {
            var user = await _userManager.FindByNameAsync(currentUser.Email); 
            var result = await _userManager.UpdateAsync(user);
            var operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }

    }
}
