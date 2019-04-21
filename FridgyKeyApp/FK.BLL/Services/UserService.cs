using FK.BLL.Interfaces;
using FK.DAL.Interfaces;
using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;

namespace FK.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork db { get; set; }

        public UserService(IUnitOfWork uow)
        {
            db = uow;
        }

        public void Create(ApplicationUser user)
        {
            try
            {
                db.Users.Create(user);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Update(ApplicationUser user)
        {
            try
            {
                db.Users.Update(user);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Delete(string user_id)
        {
            try
            {
                //db.Users.Delete(user_id);  //???string/int
            }
            catch(Exception e)
            {

            }
        }

        public IEnumerable<ApplicationUser> GetAll()
        {
            try
            {
                return db.Users.GetAll().ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<ApplicationUser> GetAllUser()
        {
            try
            {
               // var users = db.Users.Find(m=>m.)  ???


                return db.Users.GetAll().ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ApplicationUser GetUser(string user_id)
        {
            try
            {
                return db.Users.Find(m => m.Id == user_id).FirstOrDefault(); 
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
        public string Hash(string input) //готово
        {
            byte[] hash = Encoding.ASCII.GetBytes(input);
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] hashenc = md5.ComputeHash(hash);
            string output = "";
            foreach (var b in hashenc)
            {
                output += b.ToString("x2");
            }
            return output;
        }

    }
}
