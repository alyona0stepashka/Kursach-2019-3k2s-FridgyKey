using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FK.DAL;
using FK.DAL.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace FridgyKeyApp
{
    public class Program
    {
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();



            //var host = CreateWebHostBuilder(args).Build();

            //using (var scope = host.Services.CreateScope())
            //{
            //    var services = scope.ServiceProvider;
            //    try
            //    {
            //        var context = services.GetRequiredService<ApplicationDbContext>();
            //        RoleInitializer.Initialize(context);
            //    }
            //    catch (Exception ex)
            //    {
            //        var logger = services.GetRequiredService<ILogger<Program>>();
            //        logger.LogError(ex, "An error occurred while seeding the database.");
            //    }
            //}

            //host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
