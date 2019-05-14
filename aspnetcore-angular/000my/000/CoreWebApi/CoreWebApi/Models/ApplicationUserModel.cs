using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.BLL.Models
{
    public class ApplicationUserModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string FullName { get; set; }

        public string Role { get; set; }
    }
}
