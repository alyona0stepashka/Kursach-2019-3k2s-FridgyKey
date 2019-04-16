
using FK.DAL.Interfaces;
using FK.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private ApplicationDbContext db;
        private UserRepository userRepository;
        private FridgeRepository fridgeRepository;
        private UserFridgeRepository userFridgeRepository;
        private ProductRepository productRepository;
        private FridgeProductRepository fridgeProductRepository;
        private StickerRepository stickerRepository;
        private ProductInfoRepository productInfoRepository;

        public EFUnitOfWork(DbContextOptions<ApplicationDbContext> ortions)
        {
            db = new ApplicationDbContext(ortions);   
        }
        public IRepository<ApplicationUser> Users
        {
            get
            {
                if (userRepository == null)
                    userRepository = new UserRepository(db);
                return userRepository;
            }
        }
        public IRepository<ProductInfo> ProductInfos
        {
            get
            {
                if (productInfoRepository == null)
                    productInfoRepository = new ProductInfoRepository(db);
                return productInfoRepository;
            }
        }

        public IRepository<Fridge> Fridges
        {
            get
            {
                if (fridgeRepository == null)
                    fridgeRepository = new FridgeRepository(db);
                return fridgeRepository;
            }
        }
        public IRepository<Product> Products
        {
            get
            {
                if (productRepository == null)
                    productRepository = new ProductRepository(db);
                return productRepository;
            }
        }

        public IRepository<UserFridge> UserFridges
        {
            get
            {
                if (userFridgeRepository == null)
                    userFridgeRepository = new UserFridgeRepository(db);
                return userFridgeRepository;
            }
        }
        public IRepository<Sticker> Stickers
        {
            get
            {
                if (stickerRepository == null)
                    stickerRepository = new StickerRepository(db);
                return stickerRepository;
            }
        }

        public IRepository<FridgeProduct> FridgeProducts
        {
            get
            {
                if (fridgeProductRepository == null)
                    fridgeProductRepository = new FridgeProductRepository(db);
                return fridgeProductRepository;
            }
        }

        public void Save()
        {
            db.SaveChanges();
        }

        private bool disposed = false;

        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    db.Dispose();
                }
                this.disposed = true;
            }
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}
