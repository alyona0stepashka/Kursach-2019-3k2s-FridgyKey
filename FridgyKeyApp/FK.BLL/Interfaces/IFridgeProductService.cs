using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IFridgeProductService
    {
        void Create(FridgeProduct fridgeProduct);
        void Update(FridgeProduct fridgeProduct);
        void Delete(FridgeProduct fridgeProduct);
        IEnumerable<FridgeProduct> GetAll();  //все продукты всех холодильников всех юзеров
        IEnumerable<FridgeProduct> GetBadByFridgeId(int fridge_id);  //испорченные продукты в этом холодильнике
        IEnumerable<FridgeProduct> GetAllByFridgeId(int fridge_id, string user_id);  //продукты в этом холодильнике, этого юзера (2)
        IEnumerable<FridgeProduct> SearchByDateValid(DateTime date);  //продукты, что испортятся к этой дате
        IEnumerable<FridgeProduct> SearchByDateBuy(DateTime date);  //продукты, что куплены в этот день
        FridgeProduct GetFridgeProduct(int frproduct_id);

    }
}
