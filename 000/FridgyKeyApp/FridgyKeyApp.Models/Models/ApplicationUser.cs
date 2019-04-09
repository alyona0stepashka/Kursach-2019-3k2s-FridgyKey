using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace FridgyKeyApp.DAL
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    { 
        public ApplicationUser()
        {
            FridgeProducts = new HashSet<FridgeProduct>();
            Products = new HashSet<Product>();
            UserFridges = new HashSet<UserFridge>();
        }         
         
        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }
         
        public virtual ICollection<Product> Products { get; set; } 
        public virtual ICollection<UserFridge> UserFridges { get; set; }
    }
}
