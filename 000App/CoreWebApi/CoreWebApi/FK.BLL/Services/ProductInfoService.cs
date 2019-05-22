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
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Chesee",
                            Description = "Milk product",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 30f,
                        Carb = 0f,
                        Protein = 23.4f,
                        Kkal = 371f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Bread",
                            Description = "Bread product",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0.7f,
                        Carb = 49.8f,
                        Protein = 4.7f,
                        Kkal = 214f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Mayonnaise",
                            Description = "Sauce",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 67f,
                        Carb = 2.6f,
                        Protein = 3.1f,
                        Kkal = 627f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Cabbage",
                            Description = "Vegitables",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 5.4f,
                        Protein = 1.8f,
                        Kkal = 28f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Patato",
                            Description = "Vegitables",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0.1f,
                        Carb = 19.7f,
                        Protein = 2f,
                        Kkal = 83f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Onion",
                            Description = "Vegitables",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 9.7f,
                        Protein = 1.7f,
                        Kkal = 43f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Carrot",
                            Description = "Vegitables",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0.1f,
                        Carb = 7f,
                        Protein = 1.3f,
                        Kkal = 33f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Apple",
                            Description = "Fruit",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 11.3f,
                        Protein = 0.4f,
                        Kkal = 46f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Orange",
                            Description = "Fruit",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 8.4f,
                        Protein = 0.9f,
                        Kkal = 38f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Grape",
                            Description = "Fruit",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 17.7f,
                        Protein = 0.4f,
                        Kkal = 69f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Pork",
                            Description = "Meat",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 49.3f,
                        Carb = 0f,
                        Protein = 11.4f,
                        Kkal = 489f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Beef",
                            Description = "Meat",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 12.4f,
                        Carb = 0f,
                        Protein = 18.9f,
                        Kkal = 187f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Chicken",
                            Description = "Meat",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 8.8f,
                        Carb = 0.6f,
                        Protein = 20.8f,
                        Kkal = 165f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Pork",
                            Description = "Meat",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 49.3f,
                        Carb = 0f,
                        Protein = 11.4f,
                        Kkal = 489f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Egg",
                            Description = "Egg",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 11.5f,
                        Carb = 0.7f,
                        Protein = 12.4f,
                        Kkal = 157f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Crucian",
                            Description = "Fish",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 1.8f,
                        Carb = 0f,
                        Protein = 17.7f,
                        Kkal = 89f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Carp",
                            Description = "Fish",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 3.6f,
                        Carb = 0f,
                        Protein = 16f,
                        Kkal = 96f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Honey",
                            Description = "Sweet",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 80f,
                        Protein = 0.8f,
                        Kkal = 308f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Marshmallow",
                            Description = "Sweet",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 78f,
                        Protein = 0.8f,
                        Kkal = 299f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Pork",
                            Description = "Meat",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 49.3f,
                        Carb = 0f,
                        Protein = 11.4f,
                        Kkal = 489f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Milk chocolate",
                            Description = "Sweet",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 35.7f,
                        Carb = 52.4f,
                        Protein = 6.9f,
                        Kkal = 547f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Sponge cake",
                            Description = "Sweet",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 20f,
                        Carb = 49.8f,
                        Protein = 4.7f,
                        Kkal = 389f
                    },
                    new ProductInfo
                    {
                        Product = new Product
                        {
                            Name = "Water",
                            Description = "Drink",
                            ImgURL = "",
                            UserId = admin.Id
                        },
                        Fat = 0f,
                        Carb = 0f,
                        Protein = 0f,
                        Kkal = 0f
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
