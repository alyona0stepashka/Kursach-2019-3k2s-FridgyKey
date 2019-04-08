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
    public class FrostProductRepository:IFrostProductRepository
    {
        private readonly SqlConnection _connection;
        public FrostProductRepository(SqlConnection connection)
        {
            _connection = connection;
        }
        public async Task DeleteFrostProduct(ViewModelFrostProductAdd Product)
        {
            //find kkal_id by Kkal_name
            int kkal_id = 1; //create func
            //


            SqlCommand command = new SqlCommand("sp_DeleteFrostProduct", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            command.Parameters.AddWithValue("@kkal_id", kkal_id);
            command.Parameters.AddWithValue("@frost_id", Product.FrostId);
            command.Parameters.AddWithValue("@user_id", Product.UserId);
            await command.ExecuteNonQueryAsync();

        }

        public async Task UpdateFrostProduct(ViewModelFrostProductAdd Product)
        {

            //find kkal_id by Kkal_name
            int kkal_id = 1; 

            string sqlstr = "select [dbo].[FindKkalId]('"+Product.Name+"');";   ///!!!

            using (_connection)
            {
                SqlCommand command = new SqlCommand(sqlstr, _connection);
                kkal_id = Convert.ToInt32(command.ExecuteScalar());  
            }





            int is_empty;
            //

            string sqlstr2 = "select [dbo].[AlreadyExistFrostProduct]("+ kkal_id + "," + Product.FrostId + "," + Product.UserId + ");";   ///!!!

            using (_connection)
            { 
                SqlCommand command = new SqlCommand(sqlstr2, _connection);
                is_empty = Convert.ToInt32(command.ExecuteScalar()); // 0 - false, 1 - true 
            }

             
            if (is_empty==0)
            {
                await CreateFrostProduct(Product);
            }
            else
            {

            SqlCommand command = new SqlCommand("sp_UpdateFrostProduct", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
                command.Parameters.AddWithValue("@kkal_id", kkal_id);
                command.Parameters.AddWithValue("@frost_id", Product.FrostId);
                command.Parameters.AddWithValue("@user_id", Product.UserId);
                command.Parameters.AddWithValue("@amount", Product.Amount);
                command.Parameters.AddWithValue("@data", Product.ValidDate);
                command.Parameters.AddWithValue("@price", Product.PriceAmount);
                await command.ExecuteNonQueryAsync();
            }



        }

        public async Task<List<tblFrostProduct>> GetAllUsersProduct(int user_id)
        {
            List<tblFrostProduct> productList = new List<tblFrostProduct>();
            SqlCommand command = new SqlCommand("sp_GetAllUsersProduct", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            ;
            using (SqlDataReader reader = await command.ExecuteReaderAsync())
            {
                while (reader.Read())
                {
                    tblFrostProduct us = new tblFrostProduct
                    {
                        Id = (int)reader["Id"],
                        ProductId = (int)reader["ProductId"],
                        FrostId = (int)reader["FrostId"],
                        UserId = (int)reader["UserId"],
                        Amount = (float)reader["Amount"],
                        EI = reader["EI"].ToString(),
                        ValidDate = (DateTime)reader["ValidData"],
                        PriceAmount = (float)reader["PriceAmount"]
                    };
                    productList.Add(us);
                };
            }
            return productList;

        }
        public async Task CreateFrostProduct(ViewModelFrostProductAdd Product)
        {
            SqlCommand command = new SqlCommand("sp_CreateUser", _connection)
            {
                CommandType = CommandType.StoredProcedure
            };
            command.Parameters.AddWithValue("@username", User.Username);
            command.Parameters.AddWithValue("@password", User.Password);
            await command.ExecuteNonQueryAsync();
        }
    }
}