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
    public class IngredientRepository : IRepository<Ingredient, int>
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<Ingredient> _dbSet;

        public IngredientRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<Ingredient>();
            _context.Ingredients.Load();
        }

        async Task<Ingredient> IRepository<Ingredient, int>.Add(Ingredient entity)
        {
            Ingredient resIngredient;
            try
            {
                resIngredient = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resIngredient = null;
            }
            return resIngredient;
        }

        async Task<Ingredient> IRepository<Ingredient, int>.Delete(Ingredient entity)
        {
            Ingredient resIngredient;
            try
            {
                resIngredient = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resIngredient = null;
            }
            return resIngredient;
        }

        async Task<IEnumerable<Ingredient>> IRepository<Ingredient, int>.Get()
        {
            IEnumerable<Ingredient> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<Ingredient> IRepository<Ingredient, int>.Get(int id)
        {
            Ingredient Ingredient;
            try
            {
                Ingredient = await _dbSet.FindAsync(id);
            }
            catch
            {
                Ingredient = null;
            }
            return Ingredient;
        }

        async Task<IEnumerable<Ingredient>> IRepository<Ingredient, int>.Get(Func<Ingredient, bool> predicate)
        {
            IEnumerable<Ingredient> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<Ingredient>);
            return cities;
        }

        IQueryable<Ingredient> IRepository<Ingredient, int>.Query()
        {
            return _dbSet;
        }

        async Task<Ingredient> IRepository<Ingredient, int>.Update(Ingredient entity)
        {
            Ingredient resIngredient;
            try
            {
                resIngredient = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resIngredient = null;
            }
            return resIngredient;
        }
    }
}
