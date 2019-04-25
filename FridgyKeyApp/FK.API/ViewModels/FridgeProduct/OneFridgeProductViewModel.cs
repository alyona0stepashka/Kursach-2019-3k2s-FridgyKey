using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels
{
    public class OneFridgeProductViewModel  //инфа о продукте в холодосе
    {
        public int Id { get; set; }
        public int FridgeId { get; set; }
        public int ProductId { get; set; }
        public string UserId { get; set; }
        public double Amount { get; set; }
        public string EI { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime DateBuy { get; set; }
        public DateTime DateValid { get; set; }

        public OneFridgeProductViewModel(FridgeProduct prod)
        {
            Id = prod.Id;
            FridgeId = (int)prod.FridgeId;
            ProductId = (int)prod.ProductId;
            UserId = (string)prod.UserId;
            Amount = (double)prod.Amount;
            EI = prod.EI;
            Name = prod.Product.Name;
            Description = prod.Description;
            Price = (decimal)prod.Price;
            DateBuy = (DateTime)prod.DateBuy;
            DateValid = (DateTime)prod.DateValid;
        }

    }
}
