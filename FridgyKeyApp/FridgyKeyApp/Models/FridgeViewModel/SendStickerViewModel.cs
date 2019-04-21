using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKeyApp.Models
{
    public class SendStickerViewModel
    {
        public DateTime DateSend { get; set; }
        public string Text { get; set; }
        public string Username { get; set; }
        public int FridgeId { get; set; }
        public SendStickerViewModel()
        {

        }
    }
}
