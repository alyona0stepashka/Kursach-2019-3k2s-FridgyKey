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
            ProductInfo ProductInfo = await db.ProductInfos.Add(entity);
            return ProductInfo;
        }

        async Task<ProductInfo> IService<ProductInfo, int>.Delete(ProductInfo entity)
        {
            ProductInfo ProductInfo = await db.ProductInfos.Delete(entity);
            return ProductInfo;
        }

        async Task<IEnumerable<ProductInfo>> IService<ProductInfo, int>.Get()
        {
            IEnumerable<ProductInfo> ProductInfos = await db.ProductInfos.Get();
            return ProductInfos;
        }

        async Task<IEnumerable<ProductInfo>> IService<ProductInfo, int>.Get(Func<ProductInfo, bool> predicate)
        {
            IEnumerable<ProductInfo> ProductInfos = await db.ProductInfos.Get(predicate);
            return ProductInfos;
        }

        async Task<ProductInfo> IService<ProductInfo, int>.Get(int id)
        {
            ProductInfo ProductInfo = await db.ProductInfos.Get(id);
            return ProductInfo;
        }

        async Task<ProductInfo> IService<ProductInfo, int>.Update(ProductInfo entity)
        {
            ProductInfo ProductInfo = await db.ProductInfos.Update(entity);
            return ProductInfo;
        }
    }
}
