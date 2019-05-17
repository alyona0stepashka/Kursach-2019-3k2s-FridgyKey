using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IProductService:IService<Product,int>
    {
        //void Create(Product product);
        //void Update(Product product);
        //void Delete(Product product);
        //IEnumerable<Product> GetAll();  //суммарный каталог продуктов (пользовательские всех юзеров + общие)
        //IEnumerable<Product> GetAllGeneral();  //каталог продуктов (общие)
        //IEnumerable<Product> GetAllAccess(string user_id);  //каталог продуктов (доступные пользователю)
        //IEnumerable<Product> GetAllByUserId(string user_id);  //каталог продуктов (пользовательские этого юзера) ???если два чела на одном холодосе, и первый добавил в холодос продукт, которого нету в каталоге у второго, то что же будет отображаться у второго??? или нужно синхронизировать этот продукт автоматом для второго чела при добавлении продукта в холодос первым
        //Product GetProduct(int product_id);
        //Product GetProductByUserIdProductName(string user_id, string name);
        //void Dispose();
    }
}
