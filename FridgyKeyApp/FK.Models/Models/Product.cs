
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
         
        public int Id { get; set; }
        public float Fat { get; set; }
        public float Carb { get; set; }
        public float Protein { get; set; }
        public float Kkal { get; set; }

        [StringLength(450)]
        public virtual string UserId { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        [StringLength(255)]
        public string ImgURL { get; set; }


        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
