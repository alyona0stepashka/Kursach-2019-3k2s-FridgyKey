using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace FK.Models
{
    [Table("Sticker")]
    public partial class Sticker
    {
        public int Id { get; set; }

        [StringLength(450)]
        public string Text { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime DateAdd { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual Fridge Fridge { get; set; }
    }
}    
