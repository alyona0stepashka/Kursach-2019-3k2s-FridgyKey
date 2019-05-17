
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{ 
    public partial class UserFridgeView
    { 
        public int Id { get; set; }
         
        public int FridgeId { get; set; }
         
        public string UserId { get; set; }

        public FridgeView Fridge { get; set; }

        public ApplicationUserView User { get; set; }
    }
}
