using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Models
{
    public class CartProductModel
    {
        public int Id { get; set; }
        public string ImgURL { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Amount { get; set; } 
        public string EI { get; set; }   
        public CartProductModel()
        {
            Id = 0;
            ImgURL = string.Empty;
            Name = string.Empty;
            Description = string.Empty;
            Amount = 0; 
            EI = string.Empty;
        }
        public CartProductModel(CartProduct prod)
        {
            Id = prod.Id;
            ImgURL = prod.Product.ImgURL;
            Name = prod.Product.Name;
            Description = prod.Description;
            Amount = prod.Amount; 
            EI = prod.EI;
        }

    }
}
