using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels
{
    public class UsersFridgeViewModel
    {
        public Fridge fridge { get; set; }
        public List<ApplicationUser> Users { get; set; }

        public UsersFridgeViewModel(Fridge fridge1, List<ApplicationUser> Users1)
        {
            fridge = fridge1;
            Users = Users1;
        }
    }
}
