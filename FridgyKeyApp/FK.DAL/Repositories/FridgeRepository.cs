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
    public class FridgeRepository : IRepository<Fridge>
    {
        private ApplicationDbContext db;

        public FridgeRepository(ApplicationDbContext context)
        {
            this.db = context;
        }

        public IEnumerable<Fridge> GetAll()
        {
            return db.Fridges;
        }

        public Fridge Get(int id)
        {
            return db.Fridges.Find(id);
        }

        public void Create(Fridge fridge)
        {
            db.Fridges.Add(fridge);
        }

        public void Update(Fridge fridge)
        {
            db.Entry(fridge).State = EntityState.Modified;
        }

        public IEnumerable<Fridge> Find(Func<Fridge, Boolean> predicate)
        {
            return db.Fridges.Where(predicate).ToList();
        }

        public void Delete(int id)
        {
            Fridge fridge = db.Fridges.Find(id);
            if (fridge != null)
                db.Fridges.Remove(fridge);
        }
    }
}
