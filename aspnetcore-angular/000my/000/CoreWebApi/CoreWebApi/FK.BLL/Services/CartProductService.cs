using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.DAL.Interfaces;
using FK.DAL.Repositories;
using FK.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Services
{
    public class CartProductService : ICartProductService
    {
        IUnitOfWork db { get; set; }

        public CartProductService(IUnitOfWork uow)
        {
            db = uow;
        } 

        async Task<CartProduct> IService<CartProduct, int>.Add(CartProduct entity)
        {
            var CartProduct = await db.CartProducts.Add(entity);
            return CartProduct;
        }

        async Task<CartProduct> IService<CartProduct, int>.Delete(CartProduct entity)
        {
            var CartProduct = await db.CartProducts.Delete(entity);
            return CartProduct; 
        }

        async Task<IEnumerable<CartProduct>> IService<CartProduct, int>.Get()
        {
            var CartProducts = await db.CartProducts.Get();
            return CartProducts;
        }

        async Task<IEnumerable<CartProduct>> IService<CartProduct, int>.Get(Func<CartProduct, bool> predicate)
        {
            var CartProducts = await db.CartProducts.Get(predicate);
            return CartProducts;
        }

        async Task<CartProduct> IService<CartProduct, int>.Get(int id)
        {
            var CartProduct = await db.CartProducts.Get(id);
            return CartProduct;
        }

        async Task<CartProduct> IService<CartProduct, int>.Update(CartProduct entity)
        {
            var CartProduct = await db.CartProducts.Update(entity);
            return CartProduct;
        }
    }
}
