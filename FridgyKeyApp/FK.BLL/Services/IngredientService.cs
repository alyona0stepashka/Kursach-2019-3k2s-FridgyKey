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
    public class IngredientService : IIngredientService
    {
        IUnitOfWork db { get; set; }

        public IngredientService(IUnitOfWork uow)
        {
            db = uow;
        }

        async Task<Ingredient> IService<Ingredient, int>.Add(Ingredient entity)
        {
            var Ingredient = await db.Ingredients.Add(entity);
            return Ingredient;
        }

        async Task<Ingredient> IService<Ingredient, int>.Delete(Ingredient entity)
        {
            var Ingredient = await db.Ingredients.Delete(entity);
            return Ingredient;
        }

        async Task<IEnumerable<Ingredient>> IService<Ingredient, int>.Get()
        {
            var Ingredients = await db.Ingredients.Get();
            return Ingredients;
        }

        async Task<IEnumerable<Ingredient>> IService<Ingredient, int>.Get(Func<Ingredient, bool> predicate)
        {
            var Ingredients = await db.Ingredients.Get(predicate);
            return Ingredients;
        }

        async Task<Ingredient> IService<Ingredient, int>.Get(int id)
        {
            var Ingredient = await db.Ingredients.Get(id);
            return Ingredient;
        }

        async Task<Ingredient> IService<Ingredient, int>.Update(Ingredient entity)
        {
            var Ingredient = await db.Ingredients.Update(entity);
            return Ingredient;
        }
    }
}
