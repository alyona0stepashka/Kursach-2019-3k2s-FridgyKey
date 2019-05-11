using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.API.ViewModels;
using FK.BLL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FK.API.Controllers
{
    [Produces("application/json")]
    [Route("api/userfridge")]
    public class UserFridgeController : Controller
    {
        private readonly IFridgeService fridgeService;
        private readonly IFridgeProductService fridgeProductService;
        private readonly IUserFridgeService userFridgeService;
        private readonly IUserService userService;
        private readonly IProductService productService;
        private readonly IProductInfoService productInfoService;

        private UserManager<ApplicationUser> _userManager;

        public UserFridgeController(
            UserManager<ApplicationUser> userManager,
            IUserFridgeService serv,
            IUserService serv2,
            IFridgeService serv3,
            IFridgeProductService serv4,
            IProductService serv5,
            IProductInfoService serv6
            )
        {
            _userManager = userManager;
            userService = serv2;
            fridgeService = serv3;
            userFridgeService = serv;
            productService = serv5;
            productInfoService = serv6;
            fridgeProductService = serv4;
        }

        // POST api/values
        [Route("api/userfridge")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] AddUserFridgeViewModel model)
        {
            if (ModelState.IsValid)
            {
                if ( await userFridgeService.IsAccess(model.Id, model.PasswordHash))
                {
                    var fridge = new UserFridge
                    {
                        UserId = _userManager.GetUserId(User),
                        FridgeId = model.Id
                    };
                    await userFridgeService.Add(fridge);
                    return Ok(fridge);
                    //return Redirect("/Product/Index");
                }
                return NotFound();
            }
            return BadRequest(ModelState);
        } 

        // DELETE api/values/5
        [Route("api/Userfridge")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)  //fridge_id
        {
            if (ModelState.IsValid)
            {
            var user_id = _userManager.GetUserId(User);
                var fr = (await userFridgeService.Get(m=>m.FridgeId==id && m.UserId==user_id)).ToList();
                if (fr != null)
                {
                    await userFridgeService.Delete(fr[0]);
                    return Ok(fr);
                }
                return NotFound();
            }
            return BadRequest(ModelState); 
        }

    }
}