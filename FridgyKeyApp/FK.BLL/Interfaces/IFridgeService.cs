using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IFridgeService
    {
        void Create(Fridge fridge);  //создать холодильник
        void Update(Fridge fridge);  //изменить холодильник
        void Delete(Fridge fridge);  //удалить холодильник
        IEnumerable<Fridge> GetAll();  //получить все холодильники
        IEnumerable<Fridge> GetAllByUserId(string user_id);  //получить все холодильники этого юзера
        int GetCountOwner(int fridge_id);
        Fridge GetFridge(int fridge_id);  //получить холодильник по его id
        void Dispose();

    }
}
