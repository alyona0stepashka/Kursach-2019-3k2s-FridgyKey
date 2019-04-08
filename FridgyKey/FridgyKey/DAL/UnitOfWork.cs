//using FridgyKey.Interfaces;
//using FridgyKey.Services;
using System;
using System.Data.SqlClient;
using System.Web.Configuration;

namespace FridgyKey.DAL
{
    public class UnitOfWork
    {
        public UnitOfWork()
        {
            string connectionString = WebConfigurationManager.ConnectionStrings["FKContext"].ConnectionString;
            SqlConnection connection = new SqlConnection(connectionString);
            connection.Open();
            CarRepository = new UserRepository(connection);
            EmloyeeRepository = new FrostRepository(connection);

        }

        public UserRepository UserRepository { get; set; }
        public FrostRepository FrostRepository { get; set; }

        private static UnitOfWork db;

        public static UnitOfWork DB
        {
            get => db ?? (db = new UnitOfWork());
        }
    }
}