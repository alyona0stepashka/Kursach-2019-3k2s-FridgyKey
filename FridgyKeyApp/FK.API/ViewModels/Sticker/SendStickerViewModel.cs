using FK.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FK.API.ViewModels
{
    public class SendStickerViewModel  //отправить стикер
    {
        public int Id { get; set; }
        public DateTime DateSend { get; set; }
        public string Text { get; set; }
        public string Username { get; set; }
        public int FridgeId { get; set; }
        public string UserId { get; set; }
        public SendStickerViewModel(Sticker st)
        {
            Id = st.Id;
            DateSend = st.DateAdd;
            Text = st.Text;
            UserId = (string)st.UserId;
            Username = st.User.UserName;
            FridgeId = st.FridgeId;
        }
    }
}
