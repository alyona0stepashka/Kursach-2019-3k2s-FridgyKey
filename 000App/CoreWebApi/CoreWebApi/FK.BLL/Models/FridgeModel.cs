
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using FK.Models;
using Microsoft.AspNetCore.Identity;

namespace FK.BLL.Models
{ 
    public partial class FridgeModel
    {   
        public int Id { get; set; } 
        public string PasswordHash { get; set; } 
        public string Name { get; set; } 
        public string Description { get; set; } 
        public DateTime? DateCreate { get; set; }  
        //public List<Sticker> Stickers { get; set; }
        //public List<FridgeProduct> FridgeProducts { get; set; }         
        public List<CurrentUser> Users { get; set; }

        public FridgeModel(Fridge fridge, List<CurrentUser> list)
        {
            Id = fridge.Id;
            PasswordHash = fridge.PasswordHash;
            Name = fridge.Name;
            Description = fridge.Description;
            DateCreate = fridge.DateCreate;
           // Stickers = fridge.Stickers.ToList();
            //FridgeProducts = fridge.FridgeProducts.ToList();
            Users = list;
        }
        public FridgeModel(Fridge fridge)
        {
            Id = fridge.Id;
            PasswordHash = fridge.PasswordHash;
            Name = fridge.Name;
            Description = fridge.Description;
            DateCreate = fridge.DateCreate;
            // Stickers = fridge.Stickers.ToList();
            //FridgeProducts = fridge.FridgeProducts.ToList(); 
        }
    }
}
