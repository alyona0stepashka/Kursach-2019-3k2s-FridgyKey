using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels
{
    public class UsersFridgeViewModel  //инфо о холодильнике для админа
    {
        public int FridgeId { get; set; }

        public string Name { get; set; }

        public DateTime DateCreate { get; set; }

        public List<string> Username { get; set; }

        public List<string> UserId { get; set; } 

        public UsersFridgeViewModel()
        { 

        }
    }
}
