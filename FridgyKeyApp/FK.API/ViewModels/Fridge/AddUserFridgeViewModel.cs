using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels
{
    public class AddUserFridgeViewModel  //добавить уже существующий холодос к юзеру
    {
        public int Id { get; set; } 

        public string PasswordHash { get; set; }
    }
}
