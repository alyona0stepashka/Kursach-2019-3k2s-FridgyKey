using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection; 
using FridgyKeyApp.Models; 
using FK.DAL;
using FK.Models;
using FK.BLL.Interfaces;
using FK.BLL.Services;
using FK.DAL.Interfaces;
using FK.DAL.Repositories;
using Microsoft.AspNetCore.Http; 
using Microsoft.AspNetCore.Mvc; 
using Microsoft.Extensions.Logging;

namespace FridgyKeyApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddIdentity<ApplicationUser, IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();

            services.AddAuthentication(options =>
            {
                options.DefaultSignOutScheme = IdentityConstants.ApplicationScheme;
            })
                .AddFacebook("Facebook", options =>
                {
                    options.AppSecret = "bb60ddb9db71cca56972fa6f6b3d8fb5";
                    options.AppId = "241399096724373";
                })
                .AddGoogle("Google", options =>
                {
                    options.CallbackPath = new PathString("/signin-google");
                    options.ClientId = "26078174044-hq1mt6i3bncktc2159phj4cjutlgb7h7.apps.googleusercontent.com";
                    options.ClientSecret = "h8-MWu3BtWbbljQ4PiCz83T5";
                });

            // Add application services.
            services.AddTransient<IUnitOfWork, EFUnitOfWork>();
            services.AddTransient<IAdminService, AdminService>();
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<ISessionHelper, SessionHelper>();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<IFridgeService, FridgeService>();
            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<IProductInfoService, ProductInfoService>();
            services.AddTransient<IStickerService, StickerService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserFridgeService, UserFridgeService>();
            services.AddTransient<IFridgeProductService, FridgeProductService>();

            //services.AddAuthentication().AddGoogle(googleOptions => { ... });

            services.AddSession();
            services.Configure<CookiePolicyOptions>(options =>
            {
                //options.CheckConsentNeeded = context => true;
                options.MinimumSameSitePolicy = SameSiteMode.None;
            });

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }


            //app.UseHttpsRedirection();
            app.UseSession();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseCookiePolicy(); 

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
