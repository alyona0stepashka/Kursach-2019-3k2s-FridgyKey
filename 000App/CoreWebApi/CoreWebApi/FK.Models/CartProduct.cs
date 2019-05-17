
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{
    [Table("CartProduct")]
    public partial class CartProduct
    { 
        [Key]
        public int Id { get; set; }

        [Required]
        public int FridgeId { get; set; }

        [Required]
        public int ProductId { get; set; }

        [StringLength(450)] 
        public virtual string UserId { get; set; }

        [Required]
        public double Amount { get; set; }

        [Required]
        [StringLength(50)]
        public string EI { get; set; }

        [StringLength(255)]
        public string Description { get; set; } 

        public virtual Fridge Fridge { get; set; }

        public virtual Product Product { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
