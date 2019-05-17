
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{
    [Table("Product")]
    public partial class Product
    { 
        public Product()
        {
            FridgeProducts = new HashSet<FridgeProduct>();
        }
         
        [Key]
        public int Id { get; set; } 

        [StringLength(450)]
        public virtual string UserId { get; set; }

        [Required]
        [StringLength(450)]
        public string Name { get; set; }
         
        [StringLength(450)]
        public string Description { get; set; }


        [Required]
        [StringLength(255)]
        public string ImgURL { get; set; }


        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; } 

        public virtual ProductInfo ProdInfo { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
