using System;
using System.Linq;
using System.Threading.Tasks;
using System.Collections.Generic; 
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations.Schema;

namespace FK.Models
{ 
    public class ApplicationUser : IdentityUser
    { 
        public ApplicationUser()
        { 
            Stickers = new HashSet<Sticker>();
            FridgeProducts = new HashSet<FridgeProduct>();
            Products = new HashSet<Product>();
            UserFridges = new HashSet<UserFridge>(); 
        }

        [StringLength(450)] 
        public string FullName { get; set; }

        public virtual ICollection<Sticker> Stickers { get; set; }         

        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }
         
        public virtual ICollection<Product> Products { get; set; } 

        public virtual ICollection<UserFridge> UserFridges { get; set; } 
    }
}
