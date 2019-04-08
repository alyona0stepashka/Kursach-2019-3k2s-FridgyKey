using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FridgyKey.Models
{
    [Table("tblIngredient")]
    public partial class tblIngredient
    {
        public int Id { get; set; }
        public int RecipeId { get; set; }
        public int ProductId { get; set; }
        public float Amount { get; set; }  
        public virtual ICollection<tblIngredient> Ingredients { get; set; }
        public tblIngredient()
        {
            Ingredients = new HashSet<tblIngredient>();
        }
    }
}