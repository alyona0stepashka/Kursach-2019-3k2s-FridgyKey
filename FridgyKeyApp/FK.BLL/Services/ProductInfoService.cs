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
                return db.ProductInfos.Find(m => m.ProductId == product_id).FirstOrDefault(); 
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

        public IEnumerable<ProductInfo> GetAllAccess(string user_id)
        {
            try
            {
                var list = new List<ProductInfo>();
                var list_pr = db.Products.Find(m => m.UserId == user_id || m.UserId == ProductService.admin_id).ToList();//.Find();
                foreach (var prod in list_pr)
                {
                    list.Add(GetProductInfoByProductId(prod.Id));
                }
                return list;
            }
            catch (Exception e)
            {
                return null;
            }
        }
    }
}
