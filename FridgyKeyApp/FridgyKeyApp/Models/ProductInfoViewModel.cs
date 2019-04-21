﻿using FK.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models
{
    public class ProductInfoViewModel
    { 
        public int Id { get; set; }
        public float Fat { get; set; }
        public float Carb { get; set; }
        public float Protein { get; set; }
        public float Kkal { get; set; }
        public int ProductId { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        [StringLength(255)]
        public string ImgURL { get; set; }

        [StringLength(450)]
        public string UserId { get; set; }

        public ProductInfoViewModel(Product product, ProductInfo productInfo)
        {
            if (product.ImgURL == "" || product.ImgURL == null)
            {
                ImgURL = "https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg";
            }
            else
            {
                ImgURL = product.ImgURL;
            }
            Id = productInfo.Id;
            Fat = productInfo.Fat;
            Carb = productInfo.Carb;
            Protein = productInfo.Protein;
            Kkal = productInfo.Kkal;
            ProductId = product.Id;
            Name = product.Name;
            Description = product.Description;
            UserId = product.UserId;            
        }
        public ProductInfoViewModel()
        {

        }
    }
}
