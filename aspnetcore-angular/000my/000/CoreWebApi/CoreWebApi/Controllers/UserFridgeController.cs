using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.DAL;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/userfridge")]
    public class UserFridgeController : Controller
    {
        private readonly IUserService _userService;
        private readonly IFridgeService _fridgeService;
        private readonly IUserFridgeService _userfridgeService;
        private readonly AppDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public UserFridgeController(IUserService userService, IFridgeService fridgeService, IUserFridgeService userfridgeService, AppDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
            _fridgeService = fridgeService;
            _userfridgeService = userfridgeService;
            _userService = userService;
        } 

        [HttpPost]
        public async Task<ActionResult> PostUserFridgeDetail([FromBody]AddFridgeModel fridge)
        {
            var result = await _userfridgeService.IsAccess(fridge.Name,fridge.PasswordHash);
            if (result)
            {
                var db_fridge = (await _fridgeService.Get(m => m.Name == fridge.Name)).SingleOrDefault();
                var userId = User.Claims.First(c => c.Type == "UserID").Value;
                var retval = new UserFridge { UserId = userId, FridgeId = db_fridge.Id };
                await _userfridgeService.Add(retval);
                return Ok(retval);
            }
            return NotFound();
            
        }

        // DELETE: api/PaymentDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUserFridgeDetail(int id) //fridge_id
        {
            var fridge = (await _userfridgeService.Get(m=>m.FridgeId==id)).SingleOrDefault();
            if (fridge == null)
            {
                return NotFound();
            }
            await _userfridgeService.Delete(fridge);

            return Ok(fridge);
        }
    }
}