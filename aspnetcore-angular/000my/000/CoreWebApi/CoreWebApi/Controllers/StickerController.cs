using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/sticker")]
    public class StickerController : Controller
    {
        private readonly IUserService _userService;
        private readonly IStickerService _stickerService;
        private readonly IFridgeService _fridgeService;
        private readonly IUserFridgeService _userfridgeService;

        public StickerController(IUserService userService, IFridgeService fridgeService, IUserFridgeService userfridgeService, IStickerService stickerService)
        {
            _fridgeService = fridgeService;
            _userfridgeService = userfridgeService;
            _userService = userService;
            _stickerService = stickerService;
        }   

        // GET: api/PaymentDetail/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetStickerDetail(int id)  //fridge_id
        {
            var sticker = await _stickerService.Get(m=>m.FridgeId==id);

            if (sticker == null)
            {
                return NotFound();
            }

            return Ok(sticker);
        }

        // POST: api/PaymentDetail
        [HttpPost]
        public async Task<ActionResult> PostStickerDetail([FromBody]Sticker sticker)
        {
            await _stickerService.Add(sticker);
            return CreatedAtAction("GetStickerDetail", new { id = sticker.Id }, sticker);
        }

        // DELETE: api/PaymentDetail/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteStickerDetail(int id)
        {
            var sticker = await _stickerService.Get(id);
            if (sticker == null)
            {
                return NotFound();
            }
            await _stickerService.Delete(sticker);

            return Ok(sticker);
        }
    }
}