using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using FK.API;
using FK.DAL;
using FK.Models;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace CoreWebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = BuildWebHost(args);

            using (var scope = host.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                try
                {
                    var userManager = services.GetRequiredService<UserManager<ApplicationUser>>();
                    var rolesManager = services.GetRequiredService<RoleManager<IdentityRole>>();
                    var context = services.GetRequiredService<AppDbContext>();
                    DBInitializer.InitializeAsync(userManager, rolesManager, context).Wait();

                    //var log4NetConfig = new XmlDocument();
                    //log4NetConfig.Load(File.OpenRead("log4net.config"));
                    //var repo = LogManager.CreateRepository(Assembly.GetEntryAssembly(),
                    //    typeof(log4net.Repository.Hierarchy.Hierarchy));
                    //XmlConfigurator.Configure(repo, log4NetConfig["log4net"]);
                }
                catch (Exception ex)
                {
                    var logger = services.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while seeding the database.");
                }
            }
            host.Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();
    }
}
