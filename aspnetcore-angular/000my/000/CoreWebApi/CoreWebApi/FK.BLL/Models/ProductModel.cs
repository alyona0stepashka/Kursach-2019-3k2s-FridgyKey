using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Models
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string ImgURL { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double Protein { get; set; } 
        public double Fat { get; set; } 
        public double Carb { get; set; } 
        public double Kkal { get; set; } 
        public string UserId { get; set; }   
        public ProductModel()
        {
            Id = 0;
            ImgURL = string.Empty;
            Name = string.Empty;
            Description = string.Empty;
            Protein = 0;
            Carb = 0;
            Fat = 0;
            Kkal = 0;
            UserId = string.Empty; 
        }
        public ProductModel(Product prod)
        {
            Id = prod.Id;
            ImgURL = prod.ImgURL;
            Name = prod.Name;
            Description = prod.Description;
            Protein = prod.ProdInfo.Protein;
            Carb = prod.ProdInfo.Carb;
            Fat = prod.ProdInfo.Fat;
            Kkal = prod.ProdInfo.Kkal;
            UserId = prod.UserId;
        }

    }
}
