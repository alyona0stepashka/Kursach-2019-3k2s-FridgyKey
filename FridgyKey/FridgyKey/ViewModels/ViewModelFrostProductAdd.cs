using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FridgyKey.ViewModels
{
    public class ViewModelFrostProductAdd
    {
        public string Name { get; set; }
        public float Amount { get; set; }
        public DateTime ValidDate { get; set; }
        public float PriceAmount { get; set; }
        public int FrostId { get; set; }
        public int UserId { get; set; }

    }
}