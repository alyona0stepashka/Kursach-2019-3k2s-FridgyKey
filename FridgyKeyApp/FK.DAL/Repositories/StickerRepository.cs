using FK.DAL.Interfaces;
//using FK.Interfaces;
using FK.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FK.DAL.Repositories
{
    public class StickerRepository : IRepository<Sticker>
    {
        private ApplicationDbContext db;

        public StickerRepository(ApplicationDbContext context)
        {
            this.db = context;
        }

        public IEnumerable<Sticker> GetAll()
        {
            return db.Stickers;
        }

        public Sticker Get(int id)
        {
            return db.Stickers.Find(id);
        }

        public void Create(Sticker sticker)
        {
            db.Stickers.Add(sticker);
        }

        public void Update(Sticker sticker)
        {
            db.Entry(sticker).State = EntityState.Modified;
        }

        public IEnumerable<Sticker> Find(Func<Sticker, Boolean> predicate)
        {
            return db.Stickers.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            Sticker sticker = db.Stickers.Find(id);
            if (sticker != null)
                db.Stickers.Remove(sticker);
        }
    }
}
