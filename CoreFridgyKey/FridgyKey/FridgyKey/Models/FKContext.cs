using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace FridgyKey.Models
{
    public class FKContext : DbContext
    {
        public DbSet<tblUser> Users { get; set; }
        public DbSet<tblStorage> Storages { get; set; }
        public DbSet<tblSticker> Stickers { get; set; }
        public DbSet<tblRecipe> Recipes { get; set; }
        public DbSet<tblKkal> Kkals { get; set; }
        public DbSet<tblIngredient> Ingredients { get; set; }
        public DbSet<tblFrostProduct> FrostProducts { get; set; }
    }
    public class FKDBInitializer: DropCreateDatabaseAlways<FKContext>
    {
        protected override void Seed(FKContext db)
        {
            db.Users.Add(new tblUser { Username = "admin", Password = "admin" });
            db.Users.Add(new tblUser { Username = "client", Password = "client" });

            //db.Storages.Add(new tblStorage { })

            db.Kkals.Add(new tblKkal { });



            base.Seed(db);
        }
    }
}