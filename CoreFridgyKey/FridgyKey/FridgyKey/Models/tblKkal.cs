using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKey.Models
{
    [Table("tblKkal")]
    public partial class tblKkal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Kkal { get; set; }
        public string Advise { get; set; } 
        public virtual ICollection<tblKkal> Kkals { get; set; }
        public tblKkal()
        {
            Kkals = new HashSet<tblKkal>();
        }
    }
}