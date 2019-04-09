
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKeyApp.DAL
{
    [Table("FridgeProduct")]
    public partial class FridgeProduct
    { 
        public int Id { get; set; }

        public int? FridgeId { get; set; } 

        public int? ProductId { get; set; }

        public double? Amount { get; set; }

        [StringLength(50)]
        public string EI { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        public decimal? Price { get; set; }

        public DateTime? DateValid { get; set; }

        public virtual Fridge Fridge { get; set; }

        public virtual Product Product { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
