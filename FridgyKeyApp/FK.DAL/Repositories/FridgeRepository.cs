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
    public class FridgeRepository : IRepository<Fridge, int>
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<Fridge> _dbSet;

        public FridgeRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<Fridge>();
            _context.Fridges.Load();
        }

        async Task<Fridge> IRepository<Fridge, int>.Add(Fridge entity)
        {
            Fridge resFridge;
            try
            {
                resFridge = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resFridge = null;
            }
            return resFridge;
        }

        async Task<Fridge> IRepository<Fridge, int>.Delete(Fridge entity)
        {
            Fridge resFridge;
            try
            {
                resFridge = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resFridge = null;
            }
            return resFridge;
        }

        async Task<IEnumerable<Fridge>> IRepository<Fridge, int>.Get()
        {
            IEnumerable<Fridge> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<Fridge> IRepository<Fridge, int>.Get(int id)
        {
            Fridge Fridge;
            try
            {
                Fridge = await _dbSet.FindAsync(id);
            }
            catch
            {
                Fridge = null;
            }
            return Fridge;
        }

        async Task<IEnumerable<Fridge>> IRepository<Fridge, int>.Get(Func<Fridge, bool> predicate)
        {
            IEnumerable<Fridge> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<Fridge>);
            return cities;
        }

        IQueryable<Fridge> IRepository<Fridge, int>.Query()
        {
            return _dbSet;
        }

        async Task<Fridge> IRepository<Fridge, int>.Update(Fridge entity)
        {
            Fridge resFridge;
            try
            {
                resFridge = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resFridge = null;
            }
            return resFridge;
        }
    }
}
