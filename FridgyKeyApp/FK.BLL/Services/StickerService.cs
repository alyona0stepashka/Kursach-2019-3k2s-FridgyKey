using FK.BLL.Interfaces;
using FK.DAL.Interfaces;
using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Text;


namespace FK.BLL.Services
{
    public class StickerService : IStickerService
    {
        IUnitOfWork db { get; set; }

        public StickerService(IUnitOfWork uow)
        {
            db = uow;
        }
        public void Create(Sticker sticker)
        {
            try
            {
                db.Stickers.Create(sticker);
                db.Save();
            }
            catch (Exception e)
            {
                
            }
        }

        public void Delete(Sticker sticker)
        {
            try
            {
                db.Stickers.Delete(sticker.Id);
                db.Save();
            }
            catch (Exception e)
            {
                 
            }
        }

        public void DeleteByFridgeId(int fridge_id)
        {
            try
            { 
                var all_sticker = db.Stickers.Find(m=>m.Fridge.Id==fridge_id).ToList();
                foreach (var stick in all_sticker)
                {
                    db.Stickers.Delete(stick.Id);
                    db.Save();
                } 
            }
            catch (Exception e)
            {
                
            }
        }

        public IEnumerable<Sticker> GetAll()
        {
            try
            { 
                return db.Stickers.GetAll().ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Sticker> GetAllByFridgeId(int fridge_id)
        {
            try
            { 
                return db.Stickers.Find(m=>m.Fridge.Id==fridge_id).ToList(); 
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Sticker> GetAllByUserId(string user_id)
        {
            try
            {
                return db.Stickers.Find(m => m.User.Id == user_id).ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Sticker GetSticker(int sticker_id)
        {
            try
            {
                return db.Stickers.Get(sticker_id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Sticker> SearchByDate(DateTime date)
        {
            try
            { 
                return db.Stickers.Find(m => m.DateAdd.Date == date.Date).ToList(); 
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Sticker> SearchByWord(string word, string user_id, int fridge_id)
        {
            try
            {
                return db.Stickers.Find(m => m.User.Id == user_id && m.Fridge.Id == fridge_id && m.Text.Contains(word)); 
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public void Dispose()
        {
            db.Dispose();
        }
    }
}
