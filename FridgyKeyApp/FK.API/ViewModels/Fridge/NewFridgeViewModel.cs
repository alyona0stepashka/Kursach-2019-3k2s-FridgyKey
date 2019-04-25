using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels 
{
    public class NewFridgeViewModel  //создать новый холодос
    {
        public int Id { get; set; }
        public string UserId { get; set; }
        public DateTime DateCreate { get; set; }
        public string Name { get; set; }
        public string PasswordHash { get; set; }
        public string Description { get; set; }

        public NewFridgeViewModel(UserFridge fr)
        {
            Id = fr.Id;
            UserId = fr.UserId;
            DateCreate = (DateTime)fr.Fridge.DateCreate;
            Name = fr.Fridge.Name;
            PasswordHash = fr.Fridge.PasswordHash;
            Description = fr.Fridge.Description;

        }
    }
}
