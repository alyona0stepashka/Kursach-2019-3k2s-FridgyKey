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
    public class ProductInfoRepository : IRepository<ProductInfo>
    {
        private ApplicationDbContext db;

        public ProductInfoRepository(ApplicationDbContext context)
        {
            this.db = context;
        }

        public IEnumerable<ProductInfo> GetAll()
        {
            //return db.ProductInfos;
            return db.ProductInfos.Include(m => m.Product);
        }

        public ProductInfo Get(int id)
        {
            return db.ProductInfos.Find(id);
        }

        public void Create(ProductInfo ProductInfo)
        {
            db.ProductInfos.Add(ProductInfo);
        }

        public void Update(ProductInfo ProductInfo)
        {
            db.Entry(ProductInfo).State = EntityState.Modified;
        }

        public IEnumerable<ProductInfo> Find(Func<ProductInfo, Boolean> predicate)
        {
            return db.ProductInfos.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            ProductInfo ProductInfo = db.ProductInfos.Find(id);
            if (ProductInfo != null)
                db.ProductInfos.Remove(ProductInfo);
        }
    }
}
