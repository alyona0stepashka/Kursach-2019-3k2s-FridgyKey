using System;
using System.ComponentModel.DataAnnotations;

namespace FridgeKeyApp.Models.New
{
    public class OrderViewModel
    {
        [Required]
        [Display(Name = "Purchase date")]
        [DataType(DataType.Date)]
        public DateTime PurchaseDate { get; set; }

        [Required]
        [Display(Name = "Amount")]
        public int Amount { get; set; }
    }
}
