using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models
{
    public class FridgeProductViewModel
    {
        public List<Sticker> stickers { get; set; }
        public List<FridgeProduct> products { get; set; }
        public Fridge fridge { get; set; }
        public FridgeProductViewModel(List<FridgeProduct> products1, Fridge fridge1, List<Sticker> sticker1)
        {
            products = products1;
            fridge = fridge1;
            stickers = sticker1;
        }
    }
}
