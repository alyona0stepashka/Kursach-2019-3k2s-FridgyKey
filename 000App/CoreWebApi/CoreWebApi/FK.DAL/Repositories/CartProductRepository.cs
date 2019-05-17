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
    public class CartProductRepository : IRepository<CartProduct, int>
    {
        private readonly AppDbContext _context;
        private readonly DbSet<CartProduct> _dbSet;

        public CartProductRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<CartProduct>();
            _context.CartProducts.Load();
        }

        async Task<CartProduct> IRepository<CartProduct, int>.Add(CartProduct entity)
        {
            CartProduct resCartProduct;
            try
            {
                resCartProduct = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resCartProduct = null;
            }
            return resCartProduct;
        }

        async Task<CartProduct> IRepository<CartProduct, int>.Delete(CartProduct entity)
        {
            CartProduct resCartProduct;
            try
            {
                resCartProduct = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resCartProduct = null;
            }
            return resCartProduct;
        }

        async Task<IEnumerable<CartProduct>> IRepository<CartProduct, int>.Get()
        {
            IEnumerable<CartProduct> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<CartProduct> IRepository<CartProduct, int>.Get(int id)
        {
            CartProduct CartProduct;
            try
            {
                CartProduct = await _dbSet.FindAsync(id);
            }
            catch
            {
                CartProduct = null;
            }
            return CartProduct;
        }

        async Task<IEnumerable<CartProduct>> IRepository<CartProduct, int>.Get(Func<CartProduct, bool> predicate)
        {
            IEnumerable<CartProduct> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<CartProduct>);
            return cities;
        }

        IQueryable<CartProduct> IRepository<CartProduct, int>.Query()
        {
            return _dbSet;
        }

        async Task<CartProduct> IRepository<CartProduct, int>.Update(CartProduct entity)
        {
            CartProduct resCartProduct;
            try
            {
                resCartProduct = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resCartProduct = null;
            }
            return resCartProduct;
        }
    }
}
