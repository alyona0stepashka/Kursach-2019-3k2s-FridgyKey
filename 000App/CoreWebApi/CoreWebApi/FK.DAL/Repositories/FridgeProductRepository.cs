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
    public class FridgeProductRepository : IRepository<FridgeProduct, int>
    {
        private readonly AppDbContext _context;
        private readonly DbSet<FridgeProduct> _dbSet;

        public FridgeProductRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<FridgeProduct>();
            _context.FridgeProducts.Load();
        }

        async Task<FridgeProduct> IRepository<FridgeProduct, int>.Add(FridgeProduct entity)
        {
            FridgeProduct resFridgeProduct;
            try
            {
                resFridgeProduct = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resFridgeProduct = null;
            }
            return resFridgeProduct;
        }

        async Task<FridgeProduct> IRepository<FridgeProduct, int>.Delete(FridgeProduct entity)
        {
            FridgeProduct resFridgeProduct;
            try
            {
                resFridgeProduct = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resFridgeProduct = null;
            }
            return resFridgeProduct;
        }

        async Task<IEnumerable<FridgeProduct>> IRepository<FridgeProduct, int>.Get()
        {
            IEnumerable<FridgeProduct> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<FridgeProduct> IRepository<FridgeProduct, int>.Get(int id)
        {
            FridgeProduct FridgeProduct;
            try
            {
                FridgeProduct = await _dbSet.FindAsync(id);
            }
            catch
            {
                FridgeProduct = null;
            }
            return FridgeProduct;
        }

        async Task<IEnumerable<FridgeProduct>> IRepository<FridgeProduct, int>.Get(Func<FridgeProduct, bool> predicate)
        {
            IEnumerable<FridgeProduct> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<FridgeProduct>);
            return cities;
        }

        IQueryable<FridgeProduct> IRepository<FridgeProduct, int>.Query()
        {
            return _dbSet;
        }

        async Task<FridgeProduct> IRepository<FridgeProduct, int>.Update(FridgeProduct entity)
        {
            FridgeProduct resFridgeProduct;
            try
            {
                resFridgeProduct = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resFridgeProduct = null;
            }
            return resFridgeProduct;
        }
    }
}
