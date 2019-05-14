using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Models
{
    public class CurrentUser
    {
        public string Id { get; set; }
        public string Role { get; set; }
        public bool IsAuntificated { get; set; } 
        public string Email { get; set; }
        public string FullName { get; set; } 
        public string Password { get; set; } 
        public CurrentUser()
        {
            Role = string.Empty;
            IsAuntificated = false; 
            Email = string.Empty;
            FullName = string.Empty; 
            Password = string.Empty;
        }
        public CurrentUser(ApplicationUser user)
        {
            Role = string.Empty;
            IsAuntificated = false;
            Email = user.Email;
            FullName = user.FullName;
            Password = user.PasswordHash;
        }

    }
}
