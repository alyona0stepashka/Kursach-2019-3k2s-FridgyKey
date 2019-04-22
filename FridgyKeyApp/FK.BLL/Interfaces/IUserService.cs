using FK.BLL.Infrastructure;
using FK.BLL.Models;
using FK.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Interfaces
{
    public interface IUserService
    {

        Task<SignInResult> SignIn(ApplicationUser ApplicationUser);
        Task<OperationResult> SignUp(ApplicationUser ApplicationUser);
        Task Logout();
        Task<CurrentUser> GetUser(string ApplicationUserName);
        Task<ApplicationUser> GetUserById(string id);
        Task<IEnumerable<string>> GetUserRoles(string ApplicationUserName);
        Task<IEnumerable<ApplicationUser>> GetUsers();
        Task<OperationResult> DeleteUser(ApplicationUser ApplicationUser);
        Task<OperationResult> UpdateUser(CurrentUser ApplicationUser);

        Task<OperationResult> AddToRole(ApplicationUser ApplicationUser, string role);
        Task SeedDatabase();











        //void Create(ApplicationApplicationUser ApplicationApplicationUser);
        //void Update(ApplicationApplicationUser ApplicationApplicationUser);
        //void Delete(string ApplicationUser_id);
        //IEnumerable<ApplicationApplicationUser> GetAll();  //все юзеры
        //IEnumerable<ApplicationApplicationUser> GetAllApplicationUser();  //все юзеры (роль=юзер) 
        //ApplicationApplicationUser GetApplicationUser(string ApplicationUser_id);
        //string Hash(string input);
        //void Dispose();
    }
}
