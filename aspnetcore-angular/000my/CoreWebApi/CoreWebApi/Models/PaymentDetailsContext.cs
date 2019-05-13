using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks; 

namespace CoreWebApi.Models
{
    public class PaymentDetailsContext:IdentityDbContext<ApplicationUser>
    {
        public PaymentDetailsContext(DbContextOptions<PaymentDetailsContext> options) :base(options)
        {

        }

        public DbSet<PaymentDetail> PaymentDetails { get; set; }
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
    }
}
