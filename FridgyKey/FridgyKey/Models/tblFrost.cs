using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace FridgyKey.Models
{
    [Table("tblFrost")]
    public partial class tblFrost
    {
        public int Id { get; set; }
        [Required]
        [StringLength(300)]
        public string Description { get; set; } 
        public virtual ICollection<tblFrost> Frosts { get; set; }
        public tblFrost()
        {
            Frosts = new HashSet<tblFrost>();
        }
    }
}