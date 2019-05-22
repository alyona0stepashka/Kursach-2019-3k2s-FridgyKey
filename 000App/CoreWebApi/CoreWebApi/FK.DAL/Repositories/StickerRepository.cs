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
    public class StickerRepository : IRepository<Sticker, int>
    {
        private readonly AppDbContext _context;
        private readonly DbSet<Sticker> _dbSet;

        public StickerRepository(AppDbContext context)
        {
            _context = context;
            _dbSet = _context.Set<Sticker>();
            _context.Stickers.Load();
        }

        async Task<Sticker> IRepository<Sticker, int>.Add(Sticker entity)
        {
            Sticker resSticker;
            try
            {
                resSticker = (await _dbSet.AddAsync(entity)).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resSticker = null;
            }
            return resSticker;
        }

        async Task<Sticker> IRepository<Sticker, int>.Delete(Sticker entity)
        {
            Sticker resSticker;
            try
            {
                resSticker = _dbSet.Remove(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resSticker = null;
            }
            return resSticker;
        }

        async Task<IEnumerable<Sticker>> IRepository<Sticker, int>.Get()
        {
            IEnumerable<Sticker> cities = await _dbSet.ToListAsync();
            return cities;
        }

        async Task<Sticker> IRepository<Sticker, int>.Get(int id)
        {
            Sticker Sticker;
            try
            {
                Sticker = await _dbSet.FindAsync(id);
            }
            catch
            {
                Sticker = null;
            }
            return Sticker;
        }

        async Task<IEnumerable<Sticker>> IRepository<Sticker, int>.Get(Func<Sticker, bool> predicate)
        {
            IEnumerable<Sticker> cities = await Task.Factory.StartNew(() => _dbSet.Where(predicate).ToList() as IEnumerable<Sticker>);
            return cities;
        }

        IQueryable<Sticker> IRepository<Sticker, int>.Query()
        {
            return _dbSet;
        }

        async Task<Sticker> IRepository<Sticker, int>.Update(Sticker entity)
        {
            Sticker resSticker;
            try
            {
                resSticker = _dbSet.Update(entity).Entity;
                await _context.SaveChangesAsync();
            }
            catch
            {
                resSticker = null;
            }
            return resSticker;
        }
    }
}
