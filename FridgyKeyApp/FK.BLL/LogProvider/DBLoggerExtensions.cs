using System;
using Microsoft.Extensions.Logging;

namespace ProductApp.BLL.LogProvider
{
    public static class DbLoggerExtensions
    {
        public static ILoggerFactory AddContext(this ILoggerFactory factory,
            Func<string, LogLevel, bool> filter = null, string connectionStr = null)
        {
            factory.AddProvider(new DbLoggerProvider(filter, connectionStr));
            return factory;
        }

        public static ILoggerFactory AddContext(this ILoggerFactory factory, LogLevel minLevel, string connectionStr)
        {
            return AddContext(
                factory,
                (_, logLevel) => logLevel >= minLevel, connectionStr);
        }
    }
}