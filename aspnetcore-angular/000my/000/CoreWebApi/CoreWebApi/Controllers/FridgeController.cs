using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.DAL;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CoreWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/fridge")]
    public class FridgeController : Controller
    {
        private readonly IUserService _userService;
        private readonly IFridgeService _fridgeService;
        private readonly IUserFridgeService _userfridgeService; 

        public FridgeController(IUserService userService, IFridgeService fridgeService, IUserFridgeService userfridgeService)
        { 
            _fridgeService = fridgeService;
            _userfridgeService = userfridgeService;
            _userService = userService;
        }

        // GET: api/PaymentDetail
        [HttpGet]
        [Route("general")]
        public async Task<ActionResult> GetFridgeList()
        {
            var retval = await _fridgeService.Get();
            //var fridgesV = new List<FridgeM>

            return Ok(retval);
        }
        // GET: api/PaymentDetail
        [HttpGet]
        [Route("user")]
        public async Task<ActionResult> GetFridgeListByUser()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var fridges = (await _fridgeService.GetListForOwner(userId)).ToList();

            return Ok(fridges);
        }
        // PUT: api/PaymentDetail/5
        [HttpPut("{id}")]
        public async Task<ActionResult> PutFridgeDetail(int id, [FromBody]Fridge fridge)
        {
            if (id != fridge.Id)
            {
                return BadRequest();
            }
            var db_fridge = await _fridgeService.Get(id);
            if (db_fridge != null)
            {
                await _fridgeService.Update(fridge);
                return Ok(fridge);
            }
            return NotFound();
        }

        // GET: api/PaymentDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetFridgeDetail(int id)
        {
            var fridge = await _fridgeService.Get(id);

            if (fridge == null)
            {
                return NotFound();
            }

            return Ok(fridge);
        }

        // POST: api/PaymentDetail
        [HttpPost]
        public async Task<ActionResult> PostFridgeDetail([FromBody]Fridge fridge)
        {
            fridge.UserFridges = new List<UserFridge> { new UserFridge { UserId = User.Claims.First(c => c.Type == "UserID").Value } };
            await _fridgeService.Add(fridge);
            return CreatedAtAction("GetFridgeDetail", new { id = fridge.Id }, fridge);
        }

        // DELETE: api/PaymentDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteFridgeDetail(int id)
        {
            var fridge = await _fridgeService.Get(id);
            if (fridge == null)
            {
                return NotFound();
            }
            await _fridgeService.Delete(fridge);

            return Ok(fridge);
        }
    }
}