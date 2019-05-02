using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    { 
        IRepository<UserFridge,int> UserFridges { get; }
        IRepository<Fridge, int> Fridges { get; }
        IRepository<FridgeProduct, int> FridgeProducts { get; }
        IRepository<Product, int> Products { get; }
        IRepository<Sticker, int> Stickers { get; }
        IRepository<ProductInfo, int> ProductInfos { get; }
        //IRepository<Recipe, int> Recipes { get; }
        //IRepository<RecipeIngredient, int> RecipeIngredients { get; }
        //IRepository<Ingredient, int> Ingredients { get; }
        void Save();
    }
}
