using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    { 
        public ApplicationUser()
        { 
            Stickers = new HashSet<Sticker>();
            FridgeProducts = new HashSet<FridgeProduct>();
            Products = new HashSet<Product>();
            UserFridges = new HashSet<UserFridge>();
            Recipes = new HashSet<Recipe>();
        }

        public virtual ICollection<Sticker> Stickers { get; set; }
         

        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }
         
        public virtual ICollection<Product> Products { get; set; } 

        public virtual ICollection<UserFridge> UserFridges { get; set; }

        public virtual ICollection<Recipe> Recipes { get; set; }
    }
}
