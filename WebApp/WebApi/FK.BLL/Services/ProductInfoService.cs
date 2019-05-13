﻿using FK.BLL.Infrastructure;
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
        private UserManager<ApplicationUser> _userManager;

        public ProductInfoService(IUnitOfWork uow, UserManager<ApplicationUser> userManager)
        {
            db = uow;
            _userManager = userManager;
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
            var users = _userManager.Users.ToList();
            var admin = users.FirstOrDefault();
            var products = (await db.Products.Get()).ToList();
            if (products.Count == 0)
            {
                var prod_list_for_db = new List<ProductInfo>
                {
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Milk 3.2%",
                            Description = "Drink",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 3.2f,
                        Carb = 4.7f,
                        Protein = 2.8f,
                        Kkal = 58f

                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Banana",
                            Description = "Fruit",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 22.4f,
                        Protein = 1.5f,
                        Kkal = 91f
                    }
                };
                foreach (var product in prod_list_for_db)
                {
                    await db.ProductInfos.Add(product);
                }
            }
        }
    }
}