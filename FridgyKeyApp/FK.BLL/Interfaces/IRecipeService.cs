using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IRecipeService : IService<Recipe, int>
    {
        //void Create(Recipe Recipe);
        //void Update(Recipe Recipe);
        //void Delete(Recipe Recipe);
        //IEnumerable<Recipe> GetAll();  //суммарный каталог продуктов (пользовательские всех юзеров + общие)
        //IEnumerable<Recipe> GetAllGeneral();  //каталог продуктов (общие)
        //IEnumerable<Recipe> GetAllAccess(string user_id);  //каталог продуктов (доступные пользователю)
        //IEnumerable<Recipe> GetAllByUserId(string user_id);  //каталог продуктов (пользовательские этого юзера) ???если два чела на одном холодосе, и первый добавил в холодос продукт, которого нету в каталоге у второго, то что же будет отображаться у второго??? или нужно синхронизировать этот продукт автоматом для второго чела при добавлении продукта в холодос первым
        //Recipe GetRecipe(int Recipe_id);
        //Recipe GetRecipeByUserIdRecipeName(string user_id, string name);
        //void Dispose();
    }
}
