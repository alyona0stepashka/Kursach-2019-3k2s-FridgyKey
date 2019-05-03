using FK.Models;
using Microsoft.AspNetCore.Identity; 
using System.Threading.Tasks;

namespace FK.DAL.Data
{
    public static class RoleInitializer
    {
        public static async Task InitializeAsync(UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager)
        {
            const string adminEmail = "admin@mail.com";
            const string password = "Parol_01!";
            if (await roleManager.FindByNameAsync("admin") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("admin"));
            }

            if (await roleManager.FindByNameAsync("user") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("user"));
            }

            if (await userManager.FindByNameAsync(adminEmail) == null)
            {
                var admin = new ApplicationUser { Email = adminEmail, UserName = adminEmail, EmailConfirmed = true };
                var result = await userManager.CreateAsync(admin, password);
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(admin, "admin");
                }
            }
        }
    }
}