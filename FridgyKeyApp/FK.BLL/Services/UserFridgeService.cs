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

        public UserFridgeService(IUnitOfWork uow)
        {
            db = uow;
        }

        async Task<UserFridge> IService<UserFridge, int>.Add(UserFridge entity)
        {
            UserFridge UserFridge = await db.UserFridges.Add(entity);
            return UserFridge;
        }

        async Task<UserFridge> IService<UserFridge, int>.Delete(UserFridge entity)
        {
            UserFridge UserFridge = await db.UserFridges.Delete(entity);
            return UserFridge;
        }

        async Task<IEnumerable<UserFridge>> IService<UserFridge, int>.Get()
        {
            IEnumerable<UserFridge> UserFridges = await db.UserFridges.Get();
            return UserFridges;
        }

        async Task<IEnumerable<UserFridge>> IService<UserFridge, int>.Get(Func<UserFridge, bool> predicate)
        {
            IEnumerable<UserFridge> UserFridges = await db.UserFridges.Get(predicate);
            return UserFridges;
        }

        async Task<UserFridge> IService<UserFridge, int>.Get(int id)
        {
            UserFridge UserFridge = await db.UserFridges.Get(id);
            return UserFridge;
        }

        async Task<UserFridge> IService<UserFridge, int>.Update(UserFridge entity)
        {
            UserFridge UserFridge = await db.UserFridges.Update(entity);
            return UserFridge;
        }
    }
}
