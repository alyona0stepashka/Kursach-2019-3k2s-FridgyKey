
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{ 
    public partial class ProductInfoView
    {  
        public int Id { get; set; }
         
        public float Fat { get; set; }
         
        public float Carb { get; set; }
         
        public float Protein { get; set; }
         
        public float Kkal { get; set; }
         
        public int ProductId { get; set; } 

        public ProductView Product { get; set; }
    }
}
