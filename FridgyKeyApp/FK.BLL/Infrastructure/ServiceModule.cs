using FK.DAL.Interfaces;
using FK.DAL.Repositories;
using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Text;

namespace FK.BLL.Infrastructure
{
    public class ServiceModule : NinjectModule
    {
        private string connectionString;
        public ServiceModule(string connection)
        {
            connectionString = connection;
        }
        public override void Load()
        {
            Bind<IUnitOfWork>().To<EFUnitOfWork>().WithConstructorArgument(connectionString);
        }
    }
}
