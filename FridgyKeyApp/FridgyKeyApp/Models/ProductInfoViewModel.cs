using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models
{
    public class ProductInfoViewModel
    {
        public Product Product { get; set; }
        public ProductInfo ProductInfo { get; set; }

        public ProductInfoViewModel(Product product, ProductInfo productInfo)
        {
            Product = product;
            ProductInfo = productInfo;
        }
    }
}
