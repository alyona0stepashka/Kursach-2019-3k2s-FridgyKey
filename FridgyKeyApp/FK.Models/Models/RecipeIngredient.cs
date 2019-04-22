using System;
using System.Collections.Generic;
using System.Text;

namespace FK.Models
{
    public class RecipeIngredient
    {
        public int Id { get; set; }

        public int RecipeId { get; set; }

        public int IngredientId { get; set; }

        public virtual Recipe Recipe {get;set;}

        public virtual Ingredient Ingredient { get; set; }
    }
}
