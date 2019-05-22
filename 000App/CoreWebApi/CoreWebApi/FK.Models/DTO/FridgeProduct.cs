
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace FK.Models
{ 
    public partial class FridgeProductView
    {  
        public int Id { get; set; }
         
        public int FridgeId { get; set; }
         
        public int ProductId { get; set; }
         
        public string UserId { get; set; }
         
        public double Amount { get; set; }
         
        public string EI { get; set; }
         
        public string Description { get; set; }

        public decimal? Price { get; set; }

        public DateTime? DateBuy { get; set; }

        public DateTime? DateValid { get; set; }

        public FridgeView Fridge { get; set; }

        public ProductView Product { get; set; }

        public ApplicationUserView User { get; set; }
    }
}
