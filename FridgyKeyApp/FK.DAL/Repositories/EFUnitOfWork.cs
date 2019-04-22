
using FK.DAL.Interfaces;
using FK.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext db; 
        private FridgeRepository fridgeRepository;
        private UserFridgeRepository userFridgeRepository;
        private ProductRepository productRepository;
        private FridgeProductRepository fridgeProductRepository;
        private StickerRepository stickerRepository;
        private ProductInfoRepository productInfoRepository;
        private RecipeRepository recipeRepository;
        private IngredientRepository ingredientRepository;
        private RecipeIngredientRepository recipeIngredientRepository;

        public EFUnitOfWork(DbContextOptions<ApplicationDbContext> ortions)
        {
            db = new ApplicationDbContext(ortions);   
        } 
        public IRepository<ProductInfo, int> ProductInfos
        {
            get
            {
                if (productInfoRepository == null)
                    productInfoRepository = new ProductInfoRepository(db);
                return productInfoRepository;
            }
        }

        public IRepository<Fridge, int> Fridges
        {
            get
            {
                if (fridgeRepository == null)
                    fridgeRepository = new FridgeRepository(db);
                return fridgeRepository;
            }
        }
        public IRepository<Product, int> Products
        {
            get
            {
                if (productRepository == null)
                    productRepository = new ProductRepository(db);
                return productRepository;
            }
        }

        public IRepository<UserFridge, int> UserFridges
        {
            get
            {
                if (userFridgeRepository == null)
                    userFridgeRepository = new UserFridgeRepository(db);
                return userFridgeRepository;
            }
        }
        public IRepository<Sticker, int> Stickers
        {
            get
            {
                if (stickerRepository == null)
                    stickerRepository = new StickerRepository(db);
                return stickerRepository;
            }
        }

        public IRepository<Recipe, int> Recipes
        {
            get
            {
                if (recipeRepository == null)
                    recipeRepository = new RecipeRepository(db);
                return recipeRepository;
            }
        }

        public IRepository<Ingredient, int> Ingredients
        {
            get
            {
                if (ingredientRepository == null)
                    ingredientRepository = new IngredientRepository(db);
                return ingredientRepository;
            }
        }

        public IRepository<RecipeIngredient, int> RecipeIngredients
        {
            get
            {
                if (recipeIngredientRepository == null)
                    recipeIngredientRepository = new RecipeIngredientRepository(db);
                return recipeIngredientRepository;
            }
        }

        public IRepository<FridgeProduct, int> FridgeProducts
        {
            get
            {
                if (fridgeProductRepository == null)
                    fridgeProductRepository = new FridgeProductRepository(db);
                return fridgeProductRepository;
            }
        }

        public void Save()
        {
            db.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
