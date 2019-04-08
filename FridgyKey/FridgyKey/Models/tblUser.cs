using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKey.Models
{
    [Table("tblUser")]
    public partial class tblUser
    {
        public int Id { get; set; }
        [Required]
        [StringLength(300)]
        public string Username { get; set; }
        [Required]
        [StringLength(300)]
        public string Password { get; set; } 
        public int Role { get; set; }
        public virtual ICollection<tblUser> Users { get; set; }
        public tblUser()
        {
            Users = new HashSet<tblUser>();
        }
    }
}