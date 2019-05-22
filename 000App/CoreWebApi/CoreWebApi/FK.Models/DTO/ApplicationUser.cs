using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace FK.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUserView 
    {
        public string Id { get; set; }
        //public string Role { get; set; }
       // public bool IsAuntificated { get; set; }
        public string Email { get; set; }
        public string FullName { get; set; }
        public string Password { get; set; } 

        public ICollection<StickerView> Stickers { get; set; }         

        public ICollection<FridgeProductView> FridgeProducts { get; set; }
         
        public ICollection<ProductView> Products { get; set; } 

        public ICollection<UserFridgeView> UserFridges { get; set; }

       // public virtual ICollection<Recipe> Recipes { get; set; }
    }
}
