using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace FK.Models
{ 
    public partial class StickerView
    { 
        public int Id { get; set; }
         
        public int FridgeId { get; set; }
         
        public string UserId { get; set; }
         
        public string Text { get; set; }
         
        public DateTime DateAdd { get; set; }

        public ApplicationUserView User { get; set; }

        public FridgeView Fridge { get; set; }
    }
}    
