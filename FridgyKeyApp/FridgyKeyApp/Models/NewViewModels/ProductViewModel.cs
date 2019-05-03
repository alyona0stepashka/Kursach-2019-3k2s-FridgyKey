using System.ComponentModel.DataAnnotations;

namespace FridgeKeyApp.Models.New
{
    public class ProductViewModel
    {
        [Required]
        [Display(Name = "Name")]
        public string Name { get; set; }

        [Required]
        [Display(Name = "Price")]
        public int Price { get; set; }

        [Required]
        [Display(Name = "Description")]
        public string Description { get; set; }
    }
}
