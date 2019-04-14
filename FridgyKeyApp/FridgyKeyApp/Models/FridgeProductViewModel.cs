using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models
{
    public class FridgeProductViewModel
    {
        public List<FridgeProduct> products { get; set; }
        public Fridge fridge { get; set; }
        public FridgeProductViewModel(List<FridgeProduct> products1, Fridge fridge1)
        {
            products = products1;
            fridge = fridge1;
        }
    }
}
