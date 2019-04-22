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
    public class ProductService : IProductService
    {
        IUnitOfWork db { get; set; }

        public ProductService(IUnitOfWork uow)
        {
            db = uow;
        }

        async Task<Product> IService<Product, int>.Add(Product entity)
        {
            var Product = await db.Products.Add(entity);
            return Product;
        }

        async Task<Product> IService<Product, int>.Delete(Product entity)
        {
            var Product = await db.Products.Delete(entity);
            return Product;
        }

        async Task<IEnumerable<Product>> IService<Product, int>.Get()
        {
            var Products = await db.Products.Get();
            return Products;
        }

        async Task<IEnumerable<Product>> IService<Product, int>.Get(Func<Product, bool> predicate)
        {
            var Products = await db.Products.Get(predicate);
            return Products;
        }

        async Task<Product> IService<Product, int>.Get(int id)
        {
            var Product = await db.Products.Get(id);
            return Product;
        }

        async Task<Product> IService<Product, int>.Update(Product entity)
        {
            var Product = await db.Products.Update(entity);
            return Product;
        }
    }
}
