using System;
using System.Collections.Generic;
using System.Linq;
using System.Web; 
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKey.Models
{
    [Table("tblFrostProduct")]
    public partial class tblFrostProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int FrostId { get; set; }
        public int UserId { get; set; }
        public int Amount { get; set; }
        public DateTime ValidDate { get; set; }
        public float PriceAmount { get; set; } 
        public virtual ICollection<tblFrostProduct> FrostProducts { get; set; }
        public tblFrostProduct()
        {
            FrostProducts = new HashSet<tblFrostProduct>();
        }
    }
}