using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKey.Models
{
    [Table("tblRecipe")]
    public partial class tblRecipe
    {
        public int Id { get; set; }
        public int FrostId { get; set; }
        public string Name{ get; set; }
        public string Text { get; set; }
        public float Kkal { get; set; }
        public string Notation { get; set; }
        public float Price { get; set; }
        public virtual ICollection<tblRecipe> Recipes { get; set; }
        public tblRecipe()
        {
            Recipes = new HashSet<tblRecipe>();
        }
    }
}