using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IStickerService
    {
        void Create(Sticker sticker); 
        void Delete(Sticker sticker);
        void DeleteByFridgeId(int? fridge_id);  //удалить все записи на этом холодильнике
        IEnumerable<Sticker> GetAll();  //получить все записи всех пользователей на всех холодильниках
        IEnumerable<Sticker> GetAllByUserId(int? user_id);  //получить все записи этого юзера
        IEnumerable<Sticker> GetAllByFridgeId(int? fridge_id);  //получить все записи на этом холодильнике 
        IEnumerable<Sticker> SearchByWord(string word, int? user_id, int? fridge_id);  //найти записи этого юзера на этом холодильнике, в которых есть это слово
        IEnumerable<Sticker> SearchByDate(DateTime date);  //найти все записи с этой датой

        Sticker GetSticker(int? sticker_id);
    }
}
