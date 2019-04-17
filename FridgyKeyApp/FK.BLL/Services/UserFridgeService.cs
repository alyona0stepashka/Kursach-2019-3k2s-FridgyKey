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
    public class UserFridgeService : IUserFridgeService
    {
        IUnitOfWork db { get; set; }

        public UserFridgeService(IUnitOfWork uow)
        {
            db = uow;
        }
        public void Create(UserFridge userFridge)
        {
            try
            {
                db.UserFridges.Create(userFridge);
                db.Save();
            }
            catch(Exception e)
            {

            }
        }

        public void Delete(UserFridge userFridge)
        {
            try
            {
                db.UserFridges.Delete(userFridge.Id);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public IEnumerable<UserFridge> GetAliveFridges()
        {
            try
            {
                List<UserFridge> list_alive_fridges = new List<UserFridge>();
                var all_fridges = db.UserFridges.GetAll().ToList();
                foreach (var fridge in all_fridges)
                {
                    if (!list_alive_fridges.Contains(fridge))
                    {
                        list_alive_fridges.Add(fridge);
                    }
                }
                return list_alive_fridges;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<UserFridge> GetAll()
        {
            try
            {
                return db.UserFridges.GetAll().ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<ApplicationUser> GetAllUsersByFridgeId(int fridge_id)
        {
            try
            {
                List<ApplicationUser> list_user = new List<ApplicationUser>();
                var fridges = db.UserFridges.Find(m=>m.FridgeId==fridge_id).ToList();
                foreach (var fridge in fridges)
                {
                    list_user.Add(fridge.User);
                }
                return list_user;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<UserFridge> GetDeadFridges()
        {
            try
            {
                List<UserFridge> list_dead_fridges = new List<UserFridge>();
                var list_all_fridges = db.UserFridges.GetAll().ToList();
                var list_alive_fridges = GetAliveFridges().ToList();
                foreach(var fridge in list_all_fridges)
                {
                    if (list_alive_fridges.Contains(fridge))
                    {
                        list_dead_fridges.Add(fridge);
                    }
                }
                return list_dead_fridges;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public UserFridge GetUserFridge(int usfridge_id)
        {
            try
            {
                return db.UserFridges.Get(usfridge_id);
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public UserFridge GetUserFridgeByFridgeIdUserId(int fridge_id, string user_id)
        {
            try
            {
                var userFridge = db.UserFridges.Find(m => m.FridgeId == fridge_id && m.User.Id == user_id).ToList();
                if (userFridge.Count()!=1)
                {
                    throw new Exception("Невалидные параметры");
                }
                return userFridge[0];
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

        public IEnumerable<Fridge> GetFridgeByUserId(string user_id)
        {
            try
            {
                var userFridge = db.UserFridges.Find(m => m.User.Id == user_id).ToList();
                if (userFridge.Count() != 1)
                {
                    throw new Exception("Невалидные параметры");
                }
                var fridge = db.Fridges.Find(m => m.Id == userFridge[0].FridgeId).ToList();
                return fridge;
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public void Update(UserFridge userFridge)
        {
            try
            {
                db.UserFridges.Update(userFridge);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }
    }
}
