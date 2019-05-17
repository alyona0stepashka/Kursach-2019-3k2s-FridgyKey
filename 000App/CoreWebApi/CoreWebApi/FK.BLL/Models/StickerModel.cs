using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Models
{
    public class StickerModel
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public DateTime DateAdd { get; set; }  
        public string FullName { get; set; } 
        public StickerModel()
        {
            Text = string.Empty;
            Id=0;
            DateAdd = new DateTime();
            FullName = string.Empty;  
        }
        public StickerModel(Sticker sticker)
        {
            Text = sticker.Text;
            Id = sticker.Id;
            DateAdd = sticker.DateAdd;
            FullName = sticker.User.FullName;
        }

    }
}
