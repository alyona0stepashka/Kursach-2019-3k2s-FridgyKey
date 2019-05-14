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
    public class UserFridgeRepository : IRepository<UserFridge, int>
    {
        private readonly AppDbContext _context;
        private readonly DbSet<UserFridge> _dbSet;

        public UserFridgeRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<UserFridge>();
            _context.UserFridges.Load();
        }

        async Task<UserFridge> IRepository<UserFridge, int>.Add(UserFridge entity)
        {
            UserFridge resUserFridge;
            try
            {
                resUserFridge = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resUserFridge = null;
            }
            return resUserFridge;
        }

        async Task<UserFridge> IRepository<UserFridge, int>.Delete(UserFridge entity)
        {
            UserFridge resUserFridge;
            try
            {
                resUserFridge = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resUserFridge = null;
            }
            return resUserFridge;
        }

        async Task<IEnumerable<UserFridge>> IRepository<UserFridge, int>.Get()
        {
            IEnumerable<UserFridge> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<UserFridge> IRepository<UserFridge, int>.Get(int id)
        {
            UserFridge UserFridge;
            try
            {
                UserFridge = await _dbSet.FindAsync(id);
            }
            catch
            {
                UserFridge = null;
            }
            return UserFridge;
        }

        async Task<IEnumerable<UserFridge>> IRepository<UserFridge, int>.Get(Func<UserFridge, bool> predicate)
        {
            IEnumerable<UserFridge> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<UserFridge>);
            return cities;
        }

        IQueryable<UserFridge> IRepository<UserFridge, int>.Query()
        {
            return _dbSet;
        }

        async Task<UserFridge> IRepository<UserFridge, int>.Update(UserFridge entity)
        {
            UserFridge resUserFridge;
            try
            {
                resUserFridge = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resUserFridge = null;
            }
            return resUserFridge;
        }
    }
}
