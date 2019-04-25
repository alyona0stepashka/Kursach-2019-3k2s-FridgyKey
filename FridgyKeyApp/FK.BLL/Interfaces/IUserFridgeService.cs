using FK.BLL.Models;
using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Interfaces
{
    public interface IUserFridgeService:IService<UserFridge,int>
    {
        Task<FridgeOwners> GetListOwner(int fridge_id);

        Task<bool> IsAccess(int id, string password);
        //    void Create(UserFridge userFridge);  //запись о конретном холодильнике конкретного юзера (добавить холодос юзеру) 
        //    void Delete(UserFridge userFridge);  //удалить холодос от юзера
        //    void Update(UserFridge product); //update
        //    IEnumerable<UserFridge> GetAll();  //вся инфа о связи всех юзеров и их холодильников
        //    IEnumerable<UserFridge> GetDeadFridges();  //холодильники без юзеров ("мертвые")
        //    IEnumerable<UserFridge> GetAliveFridges();  //холодильники с юзерами ("живые")
        //    IEnumerable<ApplicationUser> GetAllUsersByFridgeId(int fridge_id);  //получить всех юзеров этого холодильника  
        //    UserFridge GetUserFridge(int usfridge_id);  //получить связь конкретного юзера с конкретным холодосом
        //    UserFridge GetUserFridgeByFridgeIdUserId(int fridge_id, string user_id);  //получить связь конкретного юзера с конкретным холодосом по параметрам
        //    IEnumerable<Fridge> GetFridgeByUserId(string user_id);  //получить связь конкретного юзера с конкретным холодосом по параметрам
        //    bool IsAccess(int fridge_id, string password_hash);
        //    void Dispose();

    }
}
