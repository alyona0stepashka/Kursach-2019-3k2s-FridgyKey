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
    public class ProductInfoService : IProductInfoService
    {
        IUnitOfWork db { get; set; }

        public ProductInfoService(IUnitOfWork uow)
        {
            db = uow;
        }

        async Task<ProductInfo> IService<ProductInfo, int>.Add(ProductInfo entity)
        {
            var ProductInfo = await db.ProductInfos.Add(entity);
            return ProductInfo;
        }

        async Task<ProductInfo> IService<ProductInfo, int>.Delete(ProductInfo entity)
        {
            var ProductInfo = await db.ProductInfos.Delete(entity);
            return ProductInfo;
        }

        async Task<IEnumerable<ProductInfo>> IService<ProductInfo, int>.Get()
        {
            var ProductInfos = await db.ProductInfos.Get();
            return ProductInfos;
        }

        async Task<IEnumerable<ProductInfo>> IService<ProductInfo, int>.Get(Func<ProductInfo, bool> predicate)
        {
            var ProductInfos = await db.ProductInfos.Get(predicate);
            return ProductInfos;
        }

        async Task<ProductInfo> IService<ProductInfo, int>.Get(int id)
        {
            var ProductInfo = await db.ProductInfos.Get(id);
            return ProductInfo;
        }

        async Task<ProductInfo> IService<ProductInfo, int>.Update(ProductInfo entity)
        {
            var ProductInfo = await db.ProductInfos.Update(entity);
            return ProductInfo;
        }

        async Task<ProductInfo> IProductInfoService.GetByProductId(int product_id)
        { 
            var ProductInfo = (await db.ProductInfos.Get(m => m.ProductId == product_id)).ToList()[0];
            return ProductInfo;
        }
        async Task IProductInfoService.SeedDatabase()
        {
            var products = (await db.Products.Get()).ToList();
            if (products.Count == 0)
            {
                var product = new ProductInfo
                {
                    Product = new Product
                    {
                        Name = "Milk 3.2%",
                        Description = "Drink",
                        ImgURL = "",
                        UserId = ""
                    },
                    Fat=3.2f,
                    Carb=4.7f,
                    Protein=2.8f,
                    Kkal=58
                };
                await db.ProductInfos.Add(product); 
            } 
        }
    }
}
