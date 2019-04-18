using FK.DAL.Interfaces;
//using FK.Interfaces;
using FK.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FK.DAL.Repositories
{
    public class FridgeProductRepository : IRepository<FridgeProduct>
    {
        private ApplicationDbContext db;

        public FridgeProductRepository(ApplicationDbContext context)
        {
            this.db = context;
        }

        public IEnumerable<FridgeProduct> GetAll()
        {
            return db.FridgeProducts.Include(m=>m.User).Include(m=>m.Product).Include(m=>m.Fridge);
        }

        public FridgeProduct Get(int id)
        {
            return db.FridgeProducts.Find(id);
        }

        public void Create(FridgeProduct fridgeProduct)
        {
            db.FridgeProducts.Add(fridgeProduct);
        }

        public void Update(FridgeProduct fridgeProduct)
        {
            db.Entry(fridgeProduct).State = EntityState.Modified;
        }

        public IEnumerable<FridgeProduct> Find(Func<FridgeProduct, Boolean> predicate)
        {
            return db.FridgeProducts.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            FridgeProduct fridgeProduct = db.FridgeProducts.Find(id);
            if (fridgeProduct != null)
                db.FridgeProducts.Remove(fridgeProduct);
        }
    }
}
