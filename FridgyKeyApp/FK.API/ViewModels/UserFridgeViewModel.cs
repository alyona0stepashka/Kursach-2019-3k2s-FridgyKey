using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels
{
    public class UserFridgeViewModel
    {
        



        public List<Fridge> fridges { get; set; }
        public ApplicationUser user { get; set; }
        public UserFridgeViewModel(List<Fridge> fridges1, ApplicationUser user1)
        {
            fridges = fridges1;
            user = user1;
        }
    }
}
