using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Infrastructure;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FK.API.Controllers
{
    [Produces("application/json")]
    [Authorize]
    public class UserController : Controller
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPut]
        [Route("api/user")]
        public async Task<IActionResult> Update([FromBody]UserViewModel userModel)
        {
            if (ModelState.IsValid)
            {
                CurrentUser user = await _userService.GetUser(User.Identity.Name);

                if (user != null)
                {
                    user.FIO = userModel.FIO;
                    OperationResult result = await _userService.UpdateUser(user);
                    return Ok(result);
                }

                return NotFound();
            }
            return BadRequest(ModelState);
        }
    }
}

