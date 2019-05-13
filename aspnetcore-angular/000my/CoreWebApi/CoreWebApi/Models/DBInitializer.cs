using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWebApi.Models
{
    public class DBInitializer
    {
        public static async Task InitializeAsync(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            const string adminEmail = "admin@mail.com";
            const string password = "Parol_01";
            var roles = roleManager.Roles.ToList();
            if (roles.Count==0)
            { 
                await roleManager.CreateAsync(new IdentityRole("admin")); 
                await roleManager.CreateAsync(new IdentityRole("user")); 

                var admin = new ApplicationUser { Email = adminEmail, UserName = adminEmail, EmailConfirmed = true, FullName="MyOwnName" };
                var result = await userManager.CreateAsync(admin, password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "admin");
                }
            }
        }
    }
}
