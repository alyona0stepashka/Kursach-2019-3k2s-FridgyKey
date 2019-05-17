using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Models
{
    public class FridgeProductModel
    {
        public int Id { get; set; }
        public string ImgURL { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; }
        public decimal Price { get; set; }
        public DateTime DateValid { get; set; } 
        public string FullName { get; set; }  
        public string EI { get; set; }  
        public DateTime DateBuy { get; set; }  
        public FridgeProductModel()
        {
            Id = 0;
            ImgURL = string.Empty;
            Name = string.Empty;
            Description = string.Empty;
            Amount = 0;
            Price = 0;
            DateValid = new DateTime();
            DateBuy = new DateTime();
            FullName = string.Empty;
            EI = string.Empty;
        }
        public FridgeProductModel(FridgeProduct prod)
        {
            Id = prod.Id;
            ImgURL = prod.Product.ImgURL;
            Name = prod.Product.Name;
            Description = prod.Description;
            Amount = prod.Amount;
            Price = (decimal)prod.Price;
            DateValid = (DateTime)prod.DateValid;
            DateBuy = (DateTime)prod.DateBuy;
            FullName = prod.User.FullName;
            EI = prod.EI;
        }

    }
}
