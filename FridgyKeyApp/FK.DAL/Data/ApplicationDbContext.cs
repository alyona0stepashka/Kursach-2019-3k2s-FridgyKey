using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using FK.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;  

namespace FK.DAL
{
    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
                : base(options)
        {
            //Database.EnsureCreated();
        }

        public DbSet<Sticker> Stickers { get; set; }
        public DbSet<Fridge> Fridges { get; set; }
        public DbSet<FridgeProduct> FridgeProducts { get; set; }
        public DbSet<Product> Products { get; set; } 
        public DbSet<ProductInfo> ProductInfos { get; set; } 
        public DbSet<UserFridge> UserFridges { get; set; }

        //public DbSet<Recipe> Recipes { get; set; }
        //public DbSet<RecipeIngredient> RecipeIngredients { get; set; }
        //public DbSet<Ingredient> Ingredients { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder
                .UseLazyLoadingProxies();
        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    //string adminRoleName = "admin";
        //    //string userRoleName = "user";

        //    //string adminEmail = "admin@mail.ru";
        //    //string adminPassword = "Parol_01";

        //    //// добавляем роли
        //    //IdentityRole adminRole = new IdentityRole { Name = adminRoleName };
        //    //IdentityRole userRole = new IdentityRole { Name = userRoleName };
        //    //ApplicationUser adminUser = new ApplicationUser { Email = adminEmail, PasswordHash=adminPassword };  //???

        //    //modelBuilder.Entity<IdentityRole>().HasData(new IdentityRole[] { adminRole, userRole });
        //    //modelBuilder.Entity<ApplicationUser>().HasData(new ApplicationUser[] { adminUser });


        //    base.OnModelCreating(modelBuilder);

        //    modelBuilder.Entity<FridgeProduct>()
        //        .HasOne<ApplicationUser>(y => y.User)
        //        .WithMany(o => o.FridgeProducts);
             

        //    modelBuilder.Entity<UserFridge>()
        //        .HasOne<ApplicationUser>(m => m.User)
        //        .WithMany(m => m.UserFridges);

        //    modelBuilder.Entity<UserFridge>()
        //        .HasOne<Fridge>(m => m.Fridge)
        //        .WithMany(m => m.UserFridges);

        //    modelBuilder.Entity<Sticker>()
        //        .HasOne<ApplicationUser>(m => m.User)
        //        .WithMany(m => m.Stickers);

        //    modelBuilder.Entity<Sticker>()
        //        .HasOne<Fridge>(m => m.Fridge)
        //        .WithMany(m => m.Stickers);

        //    modelBuilder.Entity<ProductInfo>()
        //        .HasOne<Product>(m => m.Product)
        //        .WithOne(m => m.ProdInfo);

        //    modelBuilder.Entity<RecipeIngredient>()
        //        .HasOne<Ingredient>(m => m.Ingredient)
        //        .WithMany(m => m.RecipeIngredients);

        //    modelBuilder.Entity<RecipeIngredient>()
        //        .HasOne<Recipe>(m => m.Recipe)
        //        .WithMany(m => m.RecipeIngredients);

        //    modelBuilder.Entity<Recipe>()
        //        .HasOne<ApplicationUser>(m => m.User)
        //        .WithMany(m => m.Recipes);

        //    modelBuilder.Entity<Ingredient>()
        //        .HasOne<Product>(m => m.Product)
        //        .WithMany(m => m.Ingredients);

        //}
     
    }
}
