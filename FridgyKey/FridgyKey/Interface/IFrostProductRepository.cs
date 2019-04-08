using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FridgyKey.Models;
using FridgyKey.ViewModels;

namespace FridgyKey.Interface
{
    interface IFrostProductRepository
    {
        Task<List<tblFrostProduct>> GetAllUsersProduct(int id_user);
        Task CreateFrostProduct(ViewModelFrostProductAdd Product);
        Task UpdateFrostProduct(ViewModelFrostProductAdd Product);
        Task DeleteFrostProduct(ViewModelFrostProductAdd Product);
    }
}
