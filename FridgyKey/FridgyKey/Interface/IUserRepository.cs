using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FridgyKey.Models;
using FridgyKey.ViewModels;

namespace FridgyKey.Interface
{
    interface IUserRepository
    {
        Task<tblUser> FindUser(ViewModelUserLogin User);
        Task<List<tblUser>> GetUsers();
        Task CreateUser(ViewModelUserAdd User);
        Task UpdateUser(tblUser User);
        Task DeleteUser(int id);
    }
}
