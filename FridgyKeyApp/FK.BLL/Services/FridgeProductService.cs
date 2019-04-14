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
    class FridgeProductService : IFridgeProductService
    {
        IUnitOfWork db { get; set; }

        public FridgeProductService(IUnitOfWork uow)
        {
            db = uow;
        }

        public void Create(FridgeProduct fridgeProduct)
        {
            try
            {
                db.FridgeProducts.Create(fridgeProduct);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Update(FridgeProduct fridgeProduct)
        {
            try
            {
                db.FridgeProducts.Update(fridgeProduct);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Delete(FridgeProduct fridgeProduct)
        {
            try
            {
                db.FridgeProducts.Delete(fridgeProduct.Id);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public IEnumerable<FridgeProduct> GetAll()
        {
            try
            {
                return db.FridgeProducts.GetAll();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<FridgeProduct> GetBad(int fridge_id)
        {
            try
            {
                return db.FridgeProducts.Find(m=>m.DateValid<=DateTime.Now);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<FridgeProduct> GetAll(int fridge_id, string user_id)
        {
            try
            {
                return db.FridgeProducts.GetAll();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<FridgeProduct> SearchByDateValid(DateTime date)
        {
            try
            {
                return db.FridgeProducts.Find(m=>m.DateValid==date.Date); //???? date need day or date
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public IEnumerable<FridgeProduct> SearchByDateValid(DateTime date, int fridge_id)
        {
            try
            {
                return db.FridgeProducts.Find(m => m.DateValid == date.Date && m.FridgeId==fridge_id); //???? date need day or date
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<FridgeProduct> SearchByDateValid(DateTime date, int fridge_id, string user_id)
        {
            try
            {
                return db.FridgeProducts.Find(m => m.DateValid == date.Date && m.FridgeId == fridge_id && m.User.Id==user_id); //???? date need day or date
            }
            catch (Exception e)
            {
                return null;
            }
        }
        
        public FridgeProduct GetFridgeProduct(int frproduct_id)
        {
            try
            {
                return db.FridgeProducts.Get(frproduct_id); //???? date need day or date
            }
            catch (Exception e)
            {
                return null;
            }
        }
        public IEnumerable<FridgeProduct> SearchByDateBuy(DateTime date)
        {
            try
            {
                return db.FridgeProducts.Find(m => m.DateBuy == date.Date); //???? date need day or date
            }
            catch (Exception e)
            {
                return null;
            }
        } 

        public IEnumerable<FridgeProduct> SearchByDateBuy(DateTime date, int fridge_id)
        {
            try
            {
                return db.FridgeProducts.Find(m => m.DateBuy == date.Date && m.FridgeId==fridge_id); //???? date need day or date
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<FridgeProduct> SearchByDateBuy(DateTime date, int fridge_id, string user_id)
        {
            try
            {
                return db.FridgeProducts.Find(m => m.DateBuy == date.Date && m.FridgeId==fridge_id && m.User.Id==user_id); //???? date need day or date
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
