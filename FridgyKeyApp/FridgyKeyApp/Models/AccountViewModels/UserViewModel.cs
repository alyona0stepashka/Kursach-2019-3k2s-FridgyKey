using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models 
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; } 

        public UserViewModel(ApplicationUser user)
        {
            Id = user.Id;
            Username = user.UserName;
            Email = user.Email;
        }
    }
}
