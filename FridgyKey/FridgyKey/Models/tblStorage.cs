using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKey.Models
{
    [Table("tblStorage")]
    public partial class tblStorage
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int FrostId { get; set; }
        public virtual ICollection<tblStorage> Storages { get; set; }
        public tblStorage()
        {
            Storages = new HashSet<tblStorage>();
        }
    }
}