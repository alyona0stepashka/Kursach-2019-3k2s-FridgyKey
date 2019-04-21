using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models 
{
    public class FridgeViewModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime DateCreate { get; set; }
        public string Name { get; set; }
        public string PasswordHash { get; set; }
        public string Description { get; set; }

        public FridgeViewModel()
        {

        }
    }
}
