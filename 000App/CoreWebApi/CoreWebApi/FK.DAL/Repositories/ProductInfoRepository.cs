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
    public class ProductInfoRepository : IRepository<ProductInfo, int>
    {
        private readonly AppDbContext _context;
        private readonly DbSet<ProductInfo> _dbSet;

        public ProductInfoRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<ProductInfo>();
            _context.ProductInfos.Load();
        }

        async Task<ProductInfo> IRepository<ProductInfo, int>.Add(ProductInfo entity)
        {
            ProductInfo resProductInfo;
            try
            {
                resProductInfo = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resProductInfo = null;
            }
            return resProductInfo;
        }

        async Task<ProductInfo> IRepository<ProductInfo, int>.Delete(ProductInfo entity)
        {
            ProductInfo resProductInfo;
            try
            {
                resProductInfo = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resProductInfo = null;
            }
            return resProductInfo;
        }

        async Task<IEnumerable<ProductInfo>> IRepository<ProductInfo, int>.Get()
        {
            IEnumerable<ProductInfo> prod_infos = await _dbSet.ToListAsync();
            return prod_infos;
        }

        async Task<ProductInfo> IRepository<ProductInfo, int>.Get(int id)
        {
            ProductInfo ProductInfo;
            try
            {
                ProductInfo = await _dbSet.FindAsync(id);
            }
            catch
            {
                ProductInfo = null;
            }
            return ProductInfo;
        }

        async Task<IEnumerable<ProductInfo>> IRepository<ProductInfo, int>.Get(Func<ProductInfo, bool> predicate)
        {
            IEnumerable<ProductInfo> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<ProductInfo>);
            return cities;
        }

        IQueryable<ProductInfo> IRepository<ProductInfo, int>.Query()
        {
            return _dbSet;
        }

        async Task<ProductInfo> IRepository<ProductInfo, int>.Update(ProductInfo entity)
        {
            ProductInfo resProductInfo;
            try
            {
                resProductInfo = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resProductInfo = null;
            }
            return resProductInfo;
        }
    }
}
