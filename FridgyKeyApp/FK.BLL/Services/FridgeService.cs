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
    public class FridgeService : IFridgeService
    {
        IUnitOfWork db { get; set; }

        public FridgeService(IUnitOfWork uow)
        {
            db = uow;
        }

        public void Create(Fridge fridge)
        {
            try
            {
                db.Fridges.Create(fridge);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Fridge fridge)
        {
            try
            {
                db.Fridges.Update(fridge);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Delete(Fridge fridge)
        {
            try
            {
                db.Fridges.Delete(fridge.Id);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public IEnumerable<Fridge> GetAll()
        {
            try
            {
                return db.Fridges.GetAll();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Fridge> GetAllByUserId(string user_id)
        {
            try
            {
                List<Fridge> list = new List<Fridge>();
                var fridges = db.Fridges.GetAll().ToList();
                foreach (var fridge in fridges)
                {
                    var userFridges = db.UserFridges.Find(m => m.FridgeId == fridge.Id);
                    foreach (var userFridge in userFridges)
                    {
                         
                         if (userFridge.User.Id==user_id)
                        {
                            list.Add(fridge);
                            break;
                        }
                    }
                }


                return list;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Fridge GetFridge(int fridge_id)
        {
            try
            {
                return db.Fridges.Get(fridge_id);
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

        public int GetCountOwner(int fridge_id)
        {
            try
            {
                return 1;
            }
            catch (Exception e)
            {

                return 0;
            }
        }
    }
}
