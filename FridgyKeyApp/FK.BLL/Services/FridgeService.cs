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

        public FridgeService(IUnitOfWork uow)
        {
            db = uow;
        }

        async Task<Fridge> IService<Fridge, int>.Add(Fridge entity)
        {
            Fridge Fridge = await db.Fridges.Add(entity);
            return Fridge;
        }

        async Task<Fridge> IService<Fridge, int>.Delete(Fridge entity)
        {
            Fridge Fridge = await db.Fridges.Delete(entity);
            return Fridge;
        }

        async Task<IEnumerable<Fridge>> IService<Fridge, int>.Get()
        {
            IEnumerable<Fridge> Fridges = await db.Fridges.Get();
            return Fridges;
        }

        async Task<IEnumerable<Fridge>> IService<Fridge, int>.Get(Func<Fridge, bool> predicate)
        {
            IEnumerable<Fridge> Fridges = await db.Fridges.Get(predicate);
            return Fridges;
        }

        async Task<Fridge> IService<Fridge, int>.Get(int id)
        {
            Fridge Fridge = await db.Fridges.Get(id);
            return Fridge;
        }

        async Task<Fridge> IService<Fridge, int>.Update(Fridge entity)
        {
            Fridge Fridge = await db.Fridges.Update(entity);
            return Fridge;
        }
    }
}
