
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKeyApp.DAL
{
    [Table("Product")]
    public partial class Product
    { 
        public Product()
        {
            FridgeProducts = new HashSet<FridgeProduct>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }
         

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
