using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.DAL.Interfaces;
using FK.DAL.Repositories;
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
    public class UserFridgeService : IUserFridgeService
    {
        IUnitOfWork db { get; set; }

        private readonly IUserService userService;

        public UserFridgeService(IUnitOfWork uow, IUserService userService1)
        {
            db = uow;
            userService = userService1;
        }

        async Task<bool> IUserFridgeService.IsAccess(string name, string password)
        {
            password = userService.Hash(password);  //???
            var access = (await db.Fridges.Get(m => m.Name==name && m.PasswordHash == password)).ToList();
            return (access.Count == 1); 
        }


        async Task<List<ApplicationUser>> IUserFridgeService.GetListOwner(int fridge_id)
        {
            var userFridges = await db.UserFridges.Get(m=>m.FridgeId==fridge_id); 
            var users = new List<ApplicationUser>(); 
            foreach (var fridge in userFridges)
            { 
                if (!users.Contains(fridge.User))
                {
                    users.Add(fridge.User); 
                }
            }
            return users;
        }

        async Task<UserFridge> IService<UserFridge, int>.Add(UserFridge entity)
        {
            var UserFridge = await db.UserFridges.Add(entity);
            return UserFridge;
        }

        async Task<UserFridge> IService<UserFridge, int>.Delete(UserFridge entity)
        {
            var UserFridge = await db.UserFridges.Delete(entity);
            return UserFridge;
        }

        async Task<IEnumerable<UserFridge>> IService<UserFridge, int>.Get()
        {
            var UserFridges = await db.UserFridges.Get();
            return UserFridges;
        }

        async Task<IEnumerable<UserFridge>> IService<UserFridge, int>.Get(Func<UserFridge, bool> predicate)
        {
            var UserFridges = await db.UserFridges.Get(predicate);
            return UserFridges;
        }

        async Task<UserFridge> IService<UserFridge, int>.Get(int id)
        {
            var UserFridge = await db.UserFridges.Get(id);
            return UserFridge;
        }

        async Task<UserFridge> IService<UserFridge, int>.Update(UserFridge entity)
        {
            var UserFridge = await db.UserFridges.Update(entity);
            return UserFridge;
        }
    }
}
