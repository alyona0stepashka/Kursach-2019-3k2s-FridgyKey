
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{ 
    public partial class ProductView
    {   
        public int Id { get; set; } 
         
        public string UserId { get; set; }
         
        public string Name { get; set; }
          
        public string Description { get; set; }
         
        public string ImgURL { get; set; } 

        public ICollection<FridgeProductView> FridgeProducts { get; set; } 

        public ProductInfoView ProdInfo { get; set; }

        public ApplicationUserView User { get; set; }
    }
}
