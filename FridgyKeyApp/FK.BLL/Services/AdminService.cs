using FK.BLL.Interfaces;
using FK.DAL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Services
{
    public class AdminService : IAdminService
    {
        private IUnitOfWork Database { get; set; }
        public UserManager<ApplicationUser> UserManager { get; }
        public RoleManager<IdentityRole> RoleManager { get; }

        public AdminService(IUnitOfWork uow,
            UserManager<ApplicationUser> _userManager,
            RoleManager<IdentityRole> _roleManager)
        {
            Database = uow;
            UserManager = _userManager;
            RoleManager = _roleManager;
        }

        public IEnumerable<ApplicationUser> GetAllApplicationUsers()
        {
            return UserManager.Users.ToList();
        }

        public List<IdentityRole> GetAllRoles()
        {
            return RoleManager.Roles.ToList();
        }

        public async Task<ApplicationUser> FindApplicationUserById(string id)
        {
            return await UserManager.FindByIdAsync(id);
        }

        public async Task<IList<string>> GetApplicationUserRole(ApplicationUser user)
        {
            return await UserManager.GetRolesAsync(user);
        }

        public async Task<IdentityResult> AddRoleApplicationUser(ApplicationUser user, IEnumerable<string> addedRoles)
        {
            return await UserManager.AddToRolesAsync(user, addedRoles);
        }

        public async Task<IdentityResult> RemoveFromRoles(ApplicationUser user, IEnumerable<string> removedRoles)
        {
            return await UserManager.RemoveFromRolesAsync(user, removedRoles);
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
