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
    public class RecipeRepository : IRepository<Recipe, int>
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<Recipe> _dbSet;

        public RecipeRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<Recipe>();
            _context.Recipes.Load();
        }

        async Task<Recipe> IRepository<Recipe, int>.Add(Recipe entity)
        {
            Recipe resRecipe;
            try
            {
                resRecipe = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resRecipe = null;
            }
            return resRecipe;
        }

        async Task<Recipe> IRepository<Recipe, int>.Delete(Recipe entity)
        {
            Recipe resRecipe;
            try
            {
                resRecipe = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resRecipe = null;
            }
            return resRecipe;
        }

        async Task<IEnumerable<Recipe>> IRepository<Recipe, int>.Get()
        {
            IEnumerable<Recipe> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<Recipe> IRepository<Recipe, int>.Get(int id)
        {
            Recipe Recipe;
            try
            {
                Recipe = await _dbSet.FindAsync(id);
            }
            catch
            {
                Recipe = null;
            }
            return Recipe;
        }

        async Task<IEnumerable<Recipe>> IRepository<Recipe, int>.Get(Func<Recipe, bool> predicate)
        {
            IEnumerable<Recipe> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<Recipe>);
            return cities;
        }

        IQueryable<Recipe> IRepository<Recipe, int>.Query()
        {
            return _dbSet;
        }

        async Task<Recipe> IRepository<Recipe, int>.Update(Recipe entity)
        {
            Recipe resRecipe;
            try
            {
                resRecipe = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resRecipe = null;
            }
            return resRecipe;
        }
    }
}
