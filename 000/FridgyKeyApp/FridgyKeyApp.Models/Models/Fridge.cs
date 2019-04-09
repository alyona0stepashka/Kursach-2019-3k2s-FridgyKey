
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKeyApp.DAL
{
    [Table("Fridge")]
    public partial class Fridge
    { 
        public Fridge()
        {
            FridgeProducts = new HashSet<FridgeProduct>();
            UserFridges = new HashSet<UserFridge>();
        }

        public int Id { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Description { get; set; }

        public DateTime? DateCreate { get; set; } 
        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }
         
        public virtual ICollection<UserFridge> UserFridges { get; set; }
    }
}
