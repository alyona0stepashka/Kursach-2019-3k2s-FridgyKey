using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using FridgyKey.Models;
using FridgyKey.Interface;
using FridgyKey.ViewModels;

namespace FridgyKey.Repositories
{
    public class UserRepository:IUserRepository
    {

        private readonly SqlConnection _connection;
        public UserRepository(SqlConnection connection)
        {
            _connection = connection;
        }

        public async Task CreateUser(ViewModelUserAdd User)
        {
            SqlCommand command = new SqlCommand("sp_CreateUser", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            command.Parameters.AddWithValue("@username", User.Username);
            command.Parameters.AddWithValue("@password", User.Password); 
            await command.ExecuteNonQueryAsync();
        }

        public async Task DeleteUser(int id)
        {
            SqlCommand command = new SqlCommand("sp_DeleteUser", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            command.Parameters.AddWithValue("@id", id);
            await command.ExecuteNonQueryAsync();
        }

        public async Task<List<tblUser>> GetUsers()
        {
            List<tblUser> userList = new List<tblUser>();
            SqlCommand command = new SqlCommand("sp_GetUsers", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            ;
            using (SqlDataReader reader = await command.ExecuteReaderAsync())
            {
                while (reader.Read())
                {
                    tblUser us = new tblUser
                    {
                        Id = (int)reader["Id"],
                        Username = reader["Username"].ToString(),
                        Role = (int)reader["Role"]
                    };
                    userList.Add(us); 
                };
            } 
            return userList;
        }

        public async Task UpdateUser(tblUser User)
        {
            SqlCommand command = new SqlCommand("sp_UpdateUser", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            command.Parameters.AddWithValue("@id", User.Id);
            command.Parameters.AddWithValue("@username", User.Username); 
            await command.ExecuteNonQueryAsync();

        }

        public async Task<tblUser> FindUser(ViewModelUserLogin User)
        {
            tblUser us = new tblUser();
            SqlCommand command = new SqlCommand("sp_FindUser", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            using (SqlDataReader reader = await command.ExecuteReaderAsync())
            {
                while (reader.Read())
                {
                    tblUser user = new tblUser
                    {
                        Id = (int)reader["Id"],
                        Username = reader["Username"].ToString(),
                        Role = (int)reader["Role"]
                    };
                    us.Id = user.Id;
                    us.Username = user.Username;
                    us.Role = user.Role;
                };
            }
            return us;
        }
    }
}