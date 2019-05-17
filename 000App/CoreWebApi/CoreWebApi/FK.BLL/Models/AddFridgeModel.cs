
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using FK.Models;
using Microsoft.AspNetCore.Identity;

namespace FK.BLL.Models
{ 
    public partial class AddFridgeModel
    {    
        public string PasswordHash { get; set; } 
        public string Name { get; set; }  

        public AddFridgeModel()
        { 
            PasswordHash = "";
            Name = ""; 
        }
    }
}
