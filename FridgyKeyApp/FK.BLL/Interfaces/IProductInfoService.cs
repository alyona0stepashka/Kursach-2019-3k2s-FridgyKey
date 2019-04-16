using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IProductInfoService
    {
        void Create(ProductInfo product);
        void Update(ProductInfo product);
        void Delete(ProductInfo product);
        IEnumerable<ProductInfo> GetAll();  //суммарный каталог   
        ProductInfo GetProductInfo(int productinfo_id);
        ProductInfo GetProductInfoByProductId(int product_id);
        void Dispose();
    }
}
