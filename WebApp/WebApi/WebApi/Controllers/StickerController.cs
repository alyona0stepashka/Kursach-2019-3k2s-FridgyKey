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
    [Route("api/sticker")]
    public class StickerController : Controller
    {
        private readonly IFridgeService fridgeService;
        private readonly IFridgeProductService fridgeProductService;
        private readonly IUserFridgeService userFridgeService;
        private readonly IUserService userService;
        private readonly IProductService productService;
        private readonly IProductInfoService productInfoService;
        private readonly IStickerService stickerService;

        private UserManager<ApplicationUser> _userManager;

        public StickerController(
            UserManager<ApplicationUser> userManager,
            IUserFridgeService serv,
            IUserService serv2,
            IFridgeService serv3,
            IFridgeProductService serv4,
            IProductService serv5,
            IProductInfoService serv6,
            IStickerService serv7
            )
        {
            _userManager = userManager;
            userService = serv2;
            fridgeService = serv3;
            userFridgeService = serv;
            productService = serv5;
            productInfoService = serv6;
            fridgeProductService = serv4;
            stickerService = serv7;
        }

        [Route("api/sticker/admingetall")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var list = new List<SendStickerViewModel>();
            var stickers = await stickerService.Get(); 
            foreach (var sticker in stickers)
            {
                list.Add(new SendStickerViewModel(sticker)); 
            }
            return Ok(list);
        }

        // GET api/values
        [Route("api/sticker")]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            if (ModelState.IsValid)
            {
                var list = new List<SendStickerViewModel>();
                var user_id = _userManager.GetUserId(User);
                var stickers = await stickerService.Get(m => m.UserId == user_id);
                foreach (var sticker in stickers)
                {
                    list.Add(new SendStickerViewModel(sticker));
                }
                return Ok(list);
            }
            return BadRequest(ModelState);
        }

        // GET api/values/5
        [Route("api/sticker")]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)  //fridge_id
        {
            if (ModelState.IsValid)
            {
                var model = new List<SendStickerViewModel>();
                var stickers = (await stickerService.Get(m => m.FridgeId == id)).ToList(); 
                foreach (var sticker in stickers)
                {
                    model.Add(new SendStickerViewModel(sticker));
                }
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        // POST api/values
        [Route("api/sticker")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] SendStickerViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user_id = _userManager.GetUserId(User);
                var sticker = new Sticker
                { 
                    FridgeId = model.FridgeId,
                    DateAdd = model.DateSend,
                    Text = model.Text,
                    UserId = user_id
                };
                await stickerService.Add(sticker);
                return Ok(sticker); 
            }
            return BadRequest(ModelState);

        } 

        // DELETE api/values/5
        [Route("api/sticker")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)  //sticker_id
        {
            if (ModelState.IsValid)
            {
                var sticker = await stickerService.Get(id);
                if (sticker != null)
                {
                    await stickerService.Delete(sticker);
                    return Ok(sticker);
                }
                return NotFound();
            }
            return BadRequest(ModelState);
        }
    }

}
