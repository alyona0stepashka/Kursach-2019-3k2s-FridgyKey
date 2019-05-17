
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{ 
    public partial class FridgeView
    {   
        public int Id { get; set; }
         
        public string PasswordHash { get; set; }
         
        public string Name { get; set; }
         
        public string Description { get; set; }

        public DateTime? DateCreate { get; set; } 

        public ICollection<StickerView> Stickers { get; set; }
        public ICollection<FridgeProductView> FridgeProducts { get; set; }
         
        public ICollection<UserFridgeView> UserFridges { get; set; } 
    }
}
