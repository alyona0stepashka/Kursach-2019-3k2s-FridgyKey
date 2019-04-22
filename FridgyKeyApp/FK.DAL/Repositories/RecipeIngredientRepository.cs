using FK.DAL.Interfaces;
//using FK.Interfaces;
using FK.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FK.DAL.Repositories
{
    public class RecipeIngredientRepository : IRepository<RecipeIngredient, int>
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<RecipeIngredient> _dbSet;

        public RecipeIngredientRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<RecipeIngredient>();
            _context.RecipeIngredients.Load();
        }

        async Task<RecipeIngredient> IRepository<RecipeIngredient, int>.Add(RecipeIngredient entity)
        {
            RecipeIngredient resRecipeIngredient;
            try
            {
                resRecipeIngredient = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resRecipeIngredient = null;
            }
            return resRecipeIngredient;
        }

        async Task<RecipeIngredient> IRepository<RecipeIngredient, int>.Delete(RecipeIngredient entity)
        {
            RecipeIngredient resRecipeIngredient;
            try
            {
                resRecipeIngredient = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resRecipeIngredient = null;
            }
            return resRecipeIngredient;
        }

        async Task<IEnumerable<RecipeIngredient>> IRepository<RecipeIngredient, int>.Get()
        {
            IEnumerable<RecipeIngredient> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<RecipeIngredient> IRepository<RecipeIngredient, int>.Get(int id)
        {
            RecipeIngredient RecipeIngredient;
            try
            {
                RecipeIngredient = await _dbSet.FindAsync(id);
            }
            catch
            {
                RecipeIngredient = null;
            }
            return RecipeIngredient;
        }

        async Task<IEnumerable<RecipeIngredient>> IRepository<RecipeIngredient, int>.Get(Func<RecipeIngredient, bool> predicate)
        {
            IEnumerable<RecipeIngredient> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<RecipeIngredient>);
            return cities;
        }

        IQueryable<RecipeIngredient> IRepository<RecipeIngredient, int>.Query()
        {
            return _dbSet;
        }

        async Task<RecipeIngredient> IRepository<RecipeIngredient, int>.Update(RecipeIngredient entity)
        {
            RecipeIngredient resRecipeIngredient;
            try
            {
                resRecipeIngredient = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resRecipeIngredient = null;
            }
            return resRecipeIngredient;
        }
    }
}
