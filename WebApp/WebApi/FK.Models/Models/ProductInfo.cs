
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{
    [Table("ProductInfo")]
    public partial class ProductInfo
    { 
        public int Id { get; set; }
        public float Fat { get; set; }
        public float Carb { get; set; }
        public float Protein { get; set; }
        public float Kkal { get; set; }

        public int ProductId { get; set; } 

        public virtual Product Product { get; set; }
    }
}
