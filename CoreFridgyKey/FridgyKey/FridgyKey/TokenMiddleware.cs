using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FridgyKey
{
    public class TokenMiddleware
    {
        RequestDelegate _next;
        public TokenMiddleware(RequestDelegate next)
        {
            _next = next;
        }
        public async Task InvokeAsync(HttpContext context)
        {
            var token = context.Request.Query["token"];
            if (token != "1234567890")
            {
                context.Response.StatusCode = 403;
                await context.Response.WriteAsync("Incorrect token");
            }
            else
            {
                await _next(context);
            }
        }
    }
}
