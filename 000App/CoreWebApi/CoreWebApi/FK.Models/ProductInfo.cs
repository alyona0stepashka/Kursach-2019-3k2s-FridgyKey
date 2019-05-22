
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
        [Key]
        public int Id { get; set; }

        [Required]
        public float Fat { get; set; }

        [Required]
        public float Carb { get; set; }

        [Required]
        public float Protein { get; set; }

        [Required]
        public float Kkal { get; set; }

        [Required]
        public int ProductId { get; set; } 

        public virtual Product Product { get; set; }
    }
}
