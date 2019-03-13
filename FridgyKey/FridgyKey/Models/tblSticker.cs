using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKey.Models
{
    [Table("tblSticker")]
    public partial class tblSticker
    {
        public int Id { get; set; }
        public int FrostId { get; set; }
        public string UserId { get; set; }
        public string Text { get; set; }
        public DateTime Date { get; set; } 
        public virtual ICollection<tblSticker> Stickers { get; set; }
        public tblSticker()
        {
            Stickers = new HashSet<tblSticker>();
        }
    }
}