using FK.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.DAL.Data
{
    //public class DbInitializer : CreateDatabaseIfNotExists<ApplicationDbContext>
    //{ 

    //    protected override void Seed(ApplicationDbContext context)
    //    {
    //        var userManager = new ApplicationUserManager(new UserStore<ApplicationUser>(context));

    //        var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(context));

    //        // создаем две роли
    //        var role1 = new IdentityRole { Name = "admin" };
    //        var role2 = new IdentityRole { Name = "user" };

    //        // добавляем роли в бд
    //        roleManager.Create(role1);
    //        roleManager.Create(role2);

    //        // создаем пользователей
    //        var admin = new ApplicationUser { Email = "mail@mail.ru", UserName = "mail@mail.ru" };
    //        string password = "ad46D_ewr3";
    //        var result = userManager.Create(admin, password);

    //        // если создание пользователя прошло успешно
    //        if (result.Succeeded)
    //        {
    //            // добавляем для пользователя роль
    //            userManager.AddToRole(admin.Id, role1.Name); 
    //        }

    //        base.Seed(context);
    //    }
    //}
}