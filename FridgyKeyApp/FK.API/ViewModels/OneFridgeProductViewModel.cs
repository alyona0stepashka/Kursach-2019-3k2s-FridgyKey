using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels
{
    public class OneFridgeProductViewModel
    {
        public int Id { get; set; }
        public int FridgeId { get; set; }
        public int ProductId { get; set; }
        public int UserId { get; set; }
        public double Amount { get; set; }
        public string EI { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public DateTime DateBuy { get; set; }
        public DateTime DateValid { get; set; }

        public OneFridgeProductViewModel()
        {

        }

    }
}
