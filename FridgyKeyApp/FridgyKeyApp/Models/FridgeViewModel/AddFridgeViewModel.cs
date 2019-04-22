using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models
{
    public class AddFridgeViewModel
    {
        public int Id { get; set; }
        public string PasswordHash { get; set; }
    }
}
