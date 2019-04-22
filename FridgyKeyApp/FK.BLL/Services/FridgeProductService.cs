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
    public class FridgeProductService : IFridgeProductService
    {
        IUnitOfWork db { get; set; }

        public FridgeProductService(IUnitOfWork uow)
        {
            db = uow;
        } 

        async Task<FridgeProduct> IService<FridgeProduct, int>.Add(FridgeProduct entity)
        {
            FridgeProduct FridgeProduct = await db.FridgeProducts.Add(entity);
            return FridgeProduct;
        }

        async Task<FridgeProduct> IService<FridgeProduct, int>.Delete(FridgeProduct entity)
        {
            FridgeProduct FridgeProduct = await db.FridgeProducts.Delete(entity);
            return FridgeProduct; 
        }

        async Task<IEnumerable<FridgeProduct>> IService<FridgeProduct, int>.Get()
        {
            IEnumerable<FridgeProduct> FridgeProducts = await db.FridgeProducts.Get();
            return FridgeProducts;
        }

        async Task<IEnumerable<FridgeProduct>> IService<FridgeProduct, int>.Get(Func<FridgeProduct, bool> predicate)
        { 
            IEnumerable<FridgeProduct> FridgeProducts = await db.FridgeProducts.Get(predicate);
            return FridgeProducts;
        }

        async Task<FridgeProduct> IService<FridgeProduct, int>.Get(int id)
        {
            FridgeProduct FridgeProduct = await db.FridgeProducts.Get(id);
            return FridgeProduct;
        }

        async Task<FridgeProduct> IService<FridgeProduct, int>.Update(FridgeProduct entity)
        {
            FridgeProduct FridgeProduct = await db.FridgeProducts.Update(entity);
            return FridgeProduct;
        }
    }
}
