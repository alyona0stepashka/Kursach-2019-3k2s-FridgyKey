using FK.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Interfaces
{
    public interface IRecipeIngredientService : IService<RecipeIngredient, int>
    {
        //void Create(RecipeIngredient RecipeIngredient);
        //void Update(RecipeIngredient RecipeIngredient);
        //void Delete(RecipeIngredient RecipeIngredient);
        //IEnumerable<RecipeIngredient> GetAll();  //суммарный каталог продуктов (пользовательские всех юзеров + общие)
        //IEnumerable<RecipeIngredient> GetAllGeneral();  //каталог продуктов (общие)
        //IEnumerable<RecipeIngredient> GetAllAccess(string user_id);  //каталог продуктов (доступные пользователю)
        //IEnumerable<RecipeIngredient> GetAllByUserId(string user_id);  //каталог продуктов (пользовательские этого юзера) ???если два чела на одном холодосе, и первый добавил в холодос продукт, которого нету в каталоге у второго, то что же будет отображаться у второго??? или нужно синхронизировать этот продукт автоматом для второго чела при добавлении продукта в холодос первым
        //RecipeIngredient GetRecipeIngredient(int RecipeIngredient_id);
        //RecipeIngredient GetRecipeIngredientByUserIdRecipeIngredientName(string user_id, string name);
        //void Dispose();
    }
}
