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
    public class ProductRepository : IRepository<Product, int>
    {
        private readonly ApplicationDbContext _context;
        private readonly DbSet<Product> _dbSet;

        public ProductRepository(ApplicationDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<Product>();
            _context.Products.Load();
        }

        async Task<Product> IRepository<Product, int>.Add(Product entity)
        {
            Product resProduct;
            try
            {
                resProduct = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resProduct = null;
            }
            return resProduct;
        }

        async Task<Product> IRepository<Product, int>.Delete(Product entity)
        {
            Product resProduct;
            try
            {
                resProduct = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resProduct = null;
            }
            return resProduct;
        }

        async Task<IEnumerable<Product>> IRepository<Product, int>.Get()
        {
            IEnumerable<Product> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<Product> IRepository<Product, int>.Get(int id)
        {
            Product Product;
            try
            {
                Product = await _dbSet.FindAsync(id);
            }
            catch
            {
                Product = null;
            }
            return Product;
        }

        async Task<IEnumerable<Product>> IRepository<Product, int>.Get(Func<Product, bool> predicate)
        {
            IEnumerable<Product> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<Product>);
            return cities;
        }

        IQueryable<Product> IRepository<Product, int>.Query()
        {
            return _dbSet;
        }

        async Task<Product> IRepository<Product, int>.Update(Product entity)
        {
            Product resProduct;
            try
            {
                resProduct = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resProduct = null;
            }
            return resProduct;
        }
    }
}
