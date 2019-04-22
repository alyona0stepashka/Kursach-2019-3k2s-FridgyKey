using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace FK.Models
{
    public class Recipe
    {
        public int Id { get; set; }

        [StringLength(450)]
        public string Name { get; set; }

        [StringLength(450)]
        public string Description { get; set; }

        [StringLength(450)]
        public virtual string UserId { get; set; }

        [StringLength(255)]
        public string ImgUrl { get; set; }

        public virtual ApplicationUser User { get; set; }

        public virtual ICollection<RecipeIngredient> RecipeIngredients { get; set; }

        public Recipe()
        {
            RecipeIngredients = new HashSet<RecipeIngredient>();
        }
    }
}
