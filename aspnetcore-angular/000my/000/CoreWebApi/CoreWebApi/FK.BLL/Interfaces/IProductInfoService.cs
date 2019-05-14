using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Interfaces
{
    public interface IProductInfoService:IService<ProductInfo,int>
    {
        Task<ProductInfo> GetByProductId(int product_id);

        Task SeedDatabase();

        //void Create(ProductInfo product);
        //void Update(ProductInfo product);
        //void Delete(ProductInfo product);
        //IEnumerable<ProductInfo> GetAll();  //суммарный каталог   
        //IEnumerable<ProductInfo> GetAllAccess(string user_id);  //каталог продуктов (доступные пользователю)
        //ProductInfo GetProductInfo(int productinfo_id);
        //ProductInfo GetProductInfoByProductId(int product_id);
        //void Dispose();
    }
}
