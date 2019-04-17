using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IUserService
    {
        void Create(ApplicationUser ApplicationUser);
        void Update(ApplicationUser ApplicationUser);
        void Delete(string user_id);
        IEnumerable<ApplicationUser> GetAll();  //все юзеры
        IEnumerable<ApplicationUser> GetAllUser();  //все юзеры (роль=юзер) 
        ApplicationUser GetUser(string user_id);
        void Dispose();
    }
}
