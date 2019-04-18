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
    public class UserFridgeRepository : IRepository<UserFridge>
    {
        private ApplicationDbContext db;

        public UserFridgeRepository(ApplicationDbContext context)
        {
            this.db = context;
        }

        public IEnumerable<UserFridge> GetAll()
        {
            return db.UserFridges.Include(m => m.Fridge).Include(m => m.User);
        }

        public UserFridge Get(int id)
        {
            return db.UserFridges.Find(id);
        }

        public void Create(UserFridge userFridge)
        {
            db.UserFridges.Add(userFridge);
        }

        public void Update(UserFridge userFridge)
        {
            db.Entry(userFridge).State = EntityState.Modified;
        }

        public IEnumerable<UserFridge> Find(Func<UserFridge, Boolean> predicate)
        {
            return db.UserFridges.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            UserFridge UserFridge = db.UserFridges.Find(id);
            if (UserFridge != null)
                db.UserFridges.Remove(UserFridge);
        }
    }
}
