using FK.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.DAL.Data
{
    public static class RoleInitializer
    {
        //public static void Initialize(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        //{
        //    string adminEmail = "admin@mail.com";
        //    string password = "_Aa123456";
        //    if (await roleManager.FindByNameAsync("admin") == null)
        //    {
        //        await roleManager.CreateAsync(new IdentityRole("admin"));
        //    }
        //    if (await roleManager.FindByNameAsync("user") == null)
        //    {
        //        await roleManager.CreateAsync(new IdentityRole("user"));
        //    }
        //    if (await userManager.FindByNameAsync(adminEmail) == null)
        //    {
        //        ApplicationUser admin = new ApplicationUser { Email = adminEmail, UserName = adminEmail };
        //        IdentityResult result = await userManager.CreateAsync(admin, password);
        //        if (result.Succeeded)
        //        {
        //            await userManager.AddToRoleAsync(admin, "admin");
        //        }
        //    }
        //}
    }
}