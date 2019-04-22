﻿using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.DAL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
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

        public UserService(IUnitOfWork uow, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager,
            RoleManager<IdentityRole> roleManager)
        {
            db = uow;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager; 
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
            IdentityResult result = await AddUser(ApplicationUser);
            OperationResult operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }

        async Task<IEnumerable<ApplicationUser>> IUserService.GetUsers()
        {
            IEnumerable<ApplicationUser> users = await Task.Factory.StartNew(() => _userManager.Users.ToList());
            return users;
        }

        async Task<OperationResult> IUserService.DeleteUser(ApplicationUser user)
        {
            IdentityResult result = await _userManager.DeleteAsync(user);
            OperationResult operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }



        async Task<IEnumerable<string>> IUserService.GetUserRoles(string userName)
        {
            ApplicationUser userDb = await _userManager.FindByNameAsync(userName);
            return await _userManager.GetRolesAsync(userDb);
        }

        async Task<CurrentUser> IUserService.GetUser(string userName)
        {
            ApplicationUser userDb = await _signInManager.UserManager.FindByNameAsync(userName);
            if (userDb != null)
            {
                CurrentUser user = new CurrentUser
                {
                    Id = userDb.Id,
                    Roles = await _signInManager.UserManager.GetRolesAsync(userDb), 
                    Email = userDb.Email,
                    Username = userDb.UserName
                };
                return user;
            }
            return null;
        }

        private async Task<IdentityResult> AddUser(ApplicationUser ApplicationUser)
        { 
            IdentityResult result = await _userManager.CreateAsync(ApplicationUser, ApplicationUser.PasswordHash);
            return result;
        }

        async Task<ApplicationUser> IUserService.GetUserById(string id)
        {
            return await _userManager.FindByIdAsync(id);
        }

        async Task<OperationResult> IUserService.AddToRole(ApplicationUser user, string role)
        {
            IdentityResult result = await _userManager.AddToRoleAsync(user, role);
            OperationResult operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }

        async Task IUserService.SeedDatabase()
        {
            await _roleManager.CreateAsync(new IdentityRole("Admin"));
            ApplicationUser user = new ApplicationUser
            {
                UserName = "pas@mail.ru",
                EmailConfirmed = true,
                Email = "pas@mail.ru"
            };
            await _userManager.CreateAsync(user, "a80291227107_A");
            await _userManager.AddToRoleAsync(user, "Admin");
        }

        async Task<OperationResult> IUserService.UpdateUser(CurrentUser currentUser)
        {
            ApplicationUser user = await _userManager.FindByNameAsync(currentUser.Username); 
            IdentityResult result = await _userManager.UpdateAsync(user);
            OperationResult operationResult = new OperationResult
            {
                Result = result.Succeeded,
                Errors = result.Errors.Select(p => p.Description)
            };
            return operationResult;
        }

    }
}
