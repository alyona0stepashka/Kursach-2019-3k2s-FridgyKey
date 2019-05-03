using FK.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace FK.BLL.Interfaces
{
    public interface IAdminService
    {
        IEnumerable<ApplicationUser> GetAllApplicationUsers();
        List<IdentityRole> GetAllRoles();
        Task<ApplicationUser> FindApplicationUserById(string id);
        Task<IList<string>> GetApplicationUserRole(ApplicationUser user);
        Task<IdentityResult> AddRoleApplicationUser(ApplicationUser user, IEnumerable<string> addedRoles);
        Task<IdentityResult> RemoveFromRoles(ApplicationUser user, IEnumerable<string> removedRoles);
        void Dispose();
    }
}
