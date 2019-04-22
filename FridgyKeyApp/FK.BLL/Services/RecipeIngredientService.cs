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
    public class RecipeIngredientService : IRecipeIngredientService
    {
        IUnitOfWork db { get; set; }

        public RecipeIngredientService(IUnitOfWork uow)
        {
            db = uow;
        }

        async Task<RecipeIngredient> IService<RecipeIngredient, int>.Add(RecipeIngredient entity)
        {
            RecipeIngredient RecipeIngredient = await db.RecipeIngredients.Add(entity);
            return RecipeIngredient;
        }

        async Task<RecipeIngredient> IService<RecipeIngredient, int>.Delete(RecipeIngredient entity)
        {
            RecipeIngredient RecipeIngredient = await db.RecipeIngredients.Delete(entity);
            return RecipeIngredient;
        }

        async Task<IEnumerable<RecipeIngredient>> IService<RecipeIngredient, int>.Get()
        {
            IEnumerable<RecipeIngredient> RecipeIngredients = await db.RecipeIngredients.Get();
            return RecipeIngredients;
        }

        async Task<IEnumerable<RecipeIngredient>> IService<RecipeIngredient, int>.Get(Func<RecipeIngredient, bool> predicate)
        {
            IEnumerable<RecipeIngredient> RecipeIngredients = await db.RecipeIngredients.Get(predicate);
            return RecipeIngredients;
        }

        async Task<RecipeIngredient> IService<RecipeIngredient, int>.Get(int id)
        {
            RecipeIngredient RecipeIngredient = await db.RecipeIngredients.Get(id);
            return RecipeIngredient;
        }

        async Task<RecipeIngredient> IService<RecipeIngredient, int>.Update(RecipeIngredient entity)
        {
            RecipeIngredient RecipeIngredient = await db.RecipeIngredients.Update(entity);
            return RecipeIngredient;
        }
    }
}
