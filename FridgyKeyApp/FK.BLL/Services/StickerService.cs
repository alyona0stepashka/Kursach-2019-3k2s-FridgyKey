using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.DAL.Interfaces;
using FK.DAL.Repositories;
using FK.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Services
{
    public class StickerService : IStickerService
    {
        IUnitOfWork db { get; set; }

        public StickerService(IUnitOfWork uow)
        {
            db = uow;
        }

        async Task<Sticker> IService<Sticker, int>.Add(Sticker entity)
        {
            var Sticker = await db.Stickers.Add(entity);
            return Sticker;
        }

        async Task<Sticker> IService<Sticker, int>.Delete(Sticker entity)
        {
            var Sticker = await db.Stickers.Delete(entity);
            return Sticker;
        }

        async Task<IEnumerable<Sticker>> IService<Sticker, int>.Get()
        {
            var Stickers = await db.Stickers.Get();
            return Stickers;
        }

        async Task<IEnumerable<Sticker>> IService<Sticker, int>.Get(Func<Sticker, bool> predicate)
        {
            var Stickers = await db.Stickers.Get(predicate);
            return Stickers;
        }

        async Task<Sticker> IService<Sticker, int>.Get(int id)
        {
            var Sticker = await db.Stickers.Get(id);
            return Sticker;
        }

        async Task<Sticker> IService<Sticker, int>.Update(Sticker entity)
        {
            var Sticker = await db.Stickers.Update(entity);
            return Sticker;
        }
    }
}
