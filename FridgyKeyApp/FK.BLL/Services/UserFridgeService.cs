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
        private readonly UserService userService;

        public UserFridgeService(IUnitOfWork uow, UserService userService1)
        {
            db = uow;
            userService = userService1;
        }

        async Task<bool> IUserFridgeService.IsAccess(int id, string password)
        {
           // password = userService.Hash(password);  //???
            var access = (await db.Fridges.Get(m => m.Id == id && m.PasswordHash == password)).ToList();
            return (access.Count == 1); 
        }


        async Task<FridgeOwners> IUserFridgeService.GetListOwner(int fridge_id)
        {
            var userFridges = await db.UserFridges.Get(m=>m.FridgeId==fridge_id);
            var owners = new FridgeOwners { FridgeId=fridge_id };
            owners.Users = new List<ApplicationUser>(); 
            foreach (var fridge in userFridges)
            { 
                if (!owners.Users.Contains(fridge.User))
                {
                    owners.Users.Add(fridge.User); 
                }
            }
            return owners;
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
