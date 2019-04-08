
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKeyApp.Models
{
    [Table("UserFridge")]
    public partial class UserFridge
    {
        public int Id { get; set; }

        public int? FridgeId { get; set; } 

        public virtual Fridge Fridge { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
