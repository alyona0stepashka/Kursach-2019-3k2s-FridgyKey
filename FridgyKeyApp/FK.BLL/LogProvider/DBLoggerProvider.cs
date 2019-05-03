using System;
using Microsoft.Extensions.Logging;

namespace ProductApp.BLL.LogProvider
{
    public class DbLoggerProvider : ILoggerProvider
    {
        private readonly Func<string, LogLevel, bool> _filter;
        private readonly string _connectionString;

        public DbLoggerProvider(Func<string, LogLevel, bool> filter, string connectionStr)
        {
            _filter = filter;
            _connectionString = connectionStr;
        }

        public ILogger CreateLogger(string categoryName)
        {
            return new DbLogger(categoryName, _filter, _connectionString);
        }

        public void Dispose()
        {

        }
    }
}