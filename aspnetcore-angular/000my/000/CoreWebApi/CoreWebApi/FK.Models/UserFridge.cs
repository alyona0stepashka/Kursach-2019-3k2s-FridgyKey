
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{
    [Table("UserFridge")]
    public partial class UserFridge
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int FridgeId { get; set; }

        [StringLength(450)]
        public virtual string UserId { get; set; }

        public virtual Fridge Fridge { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
