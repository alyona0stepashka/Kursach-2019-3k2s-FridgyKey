using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<ApplicationUser> Users { get; }
        IRepository<UserFridge> UserFridges { get; }
        IRepository<Fridge> Fridges { get; }
        IRepository<FridgeProduct> FridgeProducts { get; }
        IRepository<Product> Products { get; }
        IRepository<Sticker> Stickers { get; }
        void Save();
    }
}
