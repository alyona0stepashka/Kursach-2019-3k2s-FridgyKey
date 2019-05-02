using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.Models;
using FK.API.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace FK.API.Controllers
{
    [Produces("application/json")] 
    public class FridgeController : Controller
    {
        private readonly IFridgeService fridgeService;
        private readonly IFridgeProductService fridgeProductService;
        private readonly IUserFridgeService userFridgeService;
        private readonly IUserService userService;
        private readonly IProductService productService;
        private readonly IProductInfoService productInfoService;

        private UserManager<ApplicationUser> _userManager;

        public FridgeController(
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
            userFridgeService = serv;
            userService = serv2;
            fridgeService = serv3;
            fridgeProductService = serv4;
            productService = serv5;
            productInfoService = serv6;
        }

        // GET api/admin/fridge
        [Route("api/fridge/admingetall")]
        [HttpGet]
        public async Task<IActionResult> GetAllAdmin()
        {
            var list = new List<UsersFridgeViewModel>();
            var fridges = await userFridgeService.Get();
            foreach (var fridge in fridges)
            {
                var list_owner = await userFridgeService.GetListOwner((int)fridge.FridgeId);
                list.Add(new UsersFridgeViewModel { DateCreate = (DateTime)fridge.Fridge.DateCreate, FridgeId = (int)fridge.Fridge.Id, Name = fridge.Fridge.Name, Users=list_owner });
            }
            return Ok(list);
        }

        // GET api//fridge
        [Route("api/fridge")]
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var list = new List<UsersFridgeViewModel>();
            var user_id = _userManager.GetUserId(User);
            var fridges = await userFridgeService.Get(m => m.UserId == user_id); 
            foreach (var fridge in fridges)
            {
                var list_owner = await userFridgeService.GetListOwner(fridge.Id);
                list.Add(new UsersFridgeViewModel { DateCreate = (DateTime)fridge.Fridge.DateCreate, FridgeId = (int)fridge.Fridge.Id, Name = fridge.Fridge.Name, Users=list_owner });
            }
            return Ok(list);
        }

        // GET api/values/5
        [Route("api/fridge")]
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)  //fridge_id
        {
            if (ModelState.IsValid)
            {
                var user_id = _userManager.GetUserId(User);
                var fridge = (await userFridgeService.Get(m => m.FridgeId == id && m.UserId == user_id)).ToList();
                if (fridge != null)
                {
                    var model = new NewFridgeViewModel(fridge[0]); 
                    return Ok(model);
                }
                return NotFound();
            }
            return BadRequest(ModelState);

        }

        // GET api/values/5
        [Route("api/fridge/open")]
        [HttpGet("{id}")]
        public async Task<IActionResult> Open(int id)  //fridge_id
        {
            var list = new List<OneFridgeProductViewModel>();
            var products = await fridgeProductService.Get(m => m.FridgeId == id);
            foreach (var product in products)
            {
                list.Add(new OneFridgeProductViewModel(product));
            } 
            return Ok(list);
        }

        // POST api/values
        [Route("api/fridge")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] NewFridgeViewModel model)
        {
            if (ModelState.IsValid)
            {
                var fridge = new UserFridge
                {
                    UserId=_userManager.GetUserId(User),
                    Fridge = new Fridge
                    {
                        DateCreate = DateTime.Now,
                        Description = model.Description,
                        Name = model.Name,
                        PasswordHash = userService.Hash(model.PasswordHash) 
                    }
                };
                await userFridgeService.Add(fridge);
                return Ok(fridge);
                //return Redirect("/Product/Index");
            }
            return BadRequest(ModelState);

        }

        // PUT api/values/5
        [Route("api/fridge")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody]NewFridgeViewModel model)   
        {
            if (ModelState.IsValid)
            {
                var fr = fridgeService.Get(model.Id);
                if (fr != null)
                {
                    var fridge = new UserFridge
                    {
                        UserId = _userManager.GetUserId(User),
                        Fridge = new Fridge
                        {
                            DateCreate = DateTime.Now,
                            Description = model.Description,
                            Name = model.Name,
                            PasswordHash = userService.Hash(model.PasswordHash)
                        }
                    };
                    await userFridgeService.Update(fridge);
                    return Ok(fridge);
                }
                return NotFound(); 
            }
            return BadRequest(ModelState);
        }


        // DELETE api/values/5
        [Route("api/fridge")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)   
        {
            if (ModelState.IsValid)
            {
                var fr = await fridgeService.Get(id);
                if (fr != null)
                {
                    await fridgeService.Delete(fr);
                    return Ok(fr);
                }
                return NotFound();
            }
            return BadRequest(ModelState);


            //return View("Index");

        }






    }
}