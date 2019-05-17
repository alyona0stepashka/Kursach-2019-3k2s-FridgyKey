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
    public class FridgeService : IFridgeService
    {
        IUnitOfWork db { get; set; }
        IUserFridgeService userFridgeService { get; set; }

        public FridgeService(IUnitOfWork uow, IUserFridgeService service)
        {
            db = uow;
            userFridgeService = service;
        }
        async Task<List<FridgeModel>> IFridgeService.GetListForOwner(string user_id)
        {
            var userFridges = (await db.UserFridges.Get(m => m.UserId == user_id));
            var fridges = new List<FridgeModel>();
            foreach (var fridge in userFridges)
            {
                var owners = await userFridgeService.GetListOwner(fridge.FridgeId);
                var users = new List<CurrentUser>();
                foreach (var user in owners)
                {
                    users.Add(new CurrentUser(user));
                }
                fridges.Add(new FridgeModel(fridge.Fridge, users));
            }
            return fridges;
        }

        async Task<Fridge> IService<Fridge, int>.Add(Fridge entity)
        {
            var user_id = entity.UserFridges.FirstOrDefault().UserId;
            entity.UserFridges = null;
            var Fridge = await db.Fridges.Add(entity);
            var usfridge = await db.UserFridges.Add(new UserFridge { FridgeId=entity.Id, UserId=user_id});
            return Fridge;
        }

        async Task<Fridge> IService<Fridge, int>.Delete(Fridge entity)
        {
            var Fridge = await db.Fridges.Delete(entity);
            return Fridge;
        }

        async Task<IEnumerable<Fridge>> IService<Fridge, int>.Get()
        {
            var Fridges = await db.Fridges.Get();
            return Fridges;
        }

        async Task<IEnumerable<Fridge>> IService<Fridge, int>.Get(Func<Fridge, bool> predicate)
        {
            var Fridges = await db.Fridges.Get(predicate);
            return Fridges;
        }

        async Task<Fridge> IService<Fridge, int>.Get(int id)
        {
            var Fridge = await db.Fridges.Get(id);
            return Fridge;
        }

        async Task<Fridge> IService<Fridge, int>.Update(Fridge entity)
        {
            var Fridge = await db.Fridges.Update(entity);
            return Fridge;
        }
    }
}
