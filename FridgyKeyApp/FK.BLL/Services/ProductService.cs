﻿using FK.BLL.Interfaces;
using FK.DAL.Interfaces;
using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using System.Text;

namespace FK.BLL.Services
{
    class ProductService : IProductService
    {
        IUnitOfWork db { get; set; }

        public ProductService(IUnitOfWork uow)
        {
            db = uow;
        }

        public void Create(Product product)
        {
            try
            {
                db.Products.Create(product);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Update(Product product)
        {
            try
            {
                db.Products.Update(product);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Delete(Product product)
        {
            try
            {
                db.UserFridges.Delete(product.Id);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public IEnumerable<Product> GetAll()
        {
            try
            {
                return db.Products.GetAll().ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Product> GetAllGeneral() //???
        {
            try
            {
                return db.Products.Find()
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Product> GetAllCustom()  //???
        {
            try
            {
                return db.Products.Find()
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public IEnumerable<Product> GetAllByUserId(string user_id)
        {
            try
            {
                return db.Products.Find(m => m.User.Id==user_id).ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public Product GetProduct(int product_id)
        {
            try
            {
                return db.Products.Get(product_id);
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
