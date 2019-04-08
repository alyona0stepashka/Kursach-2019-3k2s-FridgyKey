using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace FridgyKey
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
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();

            //app.Run(Handle);

            app.UseMiddleware<TokenMiddleware>();

            app.Run(async (context) =>
            {
                context.Response.ContentType = "text/html;charset=utf-8";
                
                await context.Response.WriteAsync($"<h3>Hello</h3>");
            });
        }
        //private async Task Handle(HttpContext context)
        //{
        //    context.Response.ContentType = "text/html;charset=utf-8";

        //    await context.Response.WriteAsync($"<h3>Hello</h3>");
        //}
    }
}
