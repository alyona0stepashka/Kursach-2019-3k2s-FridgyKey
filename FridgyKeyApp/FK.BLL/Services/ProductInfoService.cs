using FK.BLL.Interfaces;
using FK.DAL.Interfaces;
using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FK.BLL.Services
{
    public class ProductInfoService : IProductInfoService
    {
        IUnitOfWork db { get; set; }

        public ProductInfoService(IUnitOfWork uow)
        {
            db = uow;
        }

        public void Create(ProductInfo product)
        {
            try
            { 
                db.ProductInfos.Create(product);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Update(ProductInfo product)
        {
            try
            {
                db.ProductInfos.Update(product);
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public void Delete(ProductInfo product)
        {
            try
            {
                db.ProductInfos.Delete(product.Id); 
                db.Save();
            }
            catch (Exception e)
            {

            }
        }

        public IEnumerable<ProductInfo> GetAll()
        {
            try
            {
                return db.ProductInfos.GetAll().ToList();
            }
            catch (Exception e)
            {
                return null;
            }
        } 
        public ProductInfo GetProductInfoByProductId(int product_id)
        {
            try
            {
                var products = db.ProductInfos.Find(m => m.ProductId == product_id).ToList();
                return products[0];
            }
            catch (Exception e)
            {
                return null;
            }
        }

        public ProductInfo GetProductInfo(int productinfo_id)
        {
            try
            {
                return db.ProductInfos.Get(productinfo_id);
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
