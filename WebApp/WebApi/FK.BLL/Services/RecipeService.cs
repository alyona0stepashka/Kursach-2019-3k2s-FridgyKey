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
    //public class RecipeService : IRecipeService
    //{
    //    IUnitOfWork db { get; set; }

    //    public RecipeService(IUnitOfWork uow)
    //    {
    //        db = uow;
    //    }

    //    async Task<Recipe> IService<Recipe, int>.Add(Recipe entity)
    //    {
    //        var Recipe = await db.Recipes.Add(entity);
    //        return Recipe;
    //    }

    //    async Task<Recipe> IService<Recipe, int>.Delete(Recipe entity)
    //    {
    //        var Recipe = await db.Recipes.Delete(entity);
    //        return Recipe;
    //    }

    //    async Task<IEnumerable<Recipe>> IService<Recipe, int>.Get()
    //    {
    //        var Recipes = await db.Recipes.Get();
    //        return Recipes;
    //    }

    //    async Task<IEnumerable<Recipe>> IService<Recipe, int>.Get(Func<Recipe, bool> predicate)
    //    {
    //        var Recipes = await db.Recipes.Get(predicate);
    //        return Recipes;
    //    }

    //    async Task<Recipe> IService<Recipe, int>.Get(int id)
    //    {
    //        var Recipe = await db.Recipes.Get(id);
    //        return Recipe;
    //    }

    //    async Task<Recipe> IService<Recipe, int>.Update(Recipe entity)
    //    {
    //        var Recipe = await db.Recipes.Update(entity);
    //        return Recipe;
    //    }
    //}
}
