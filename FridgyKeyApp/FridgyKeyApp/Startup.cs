﻿using System;
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
using FridgyKeyApp.Services;
using FK.DAL;
using FK.Models;
using FK.BLL.Interfaces;
using FK.BLL.Services;
using FK.DAL.Interfaces;
using FK.DAL.Repositories;

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

            // Add application services.
            services.AddTransient<IEmailSender, EmailSender>();
            services.AddTransient<IUnitOfWork, EFUnitOfWork>();
            services.AddTransient<IFridgeService, FridgeService>();
            services.AddTransient<IProductService, ProductService>();
            services.AddTransient<IProductInfoService, ProductInfoService>();
            services.AddTransient<IStickerService, StickerService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserFridgeService, UserFridgeService>();
            services.AddTransient<IFridgeProductService, FridgeProductService>();

            //services.AddAuthentication().AddGoogle(googleOptions => { ... });


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

            app.UseStaticFiles();

            app.UseAuthentication();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
