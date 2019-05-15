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
    [Route("api/fridgeproduct")]
    public class FridgeProductController : Controller
    {
        private readonly IProductService _productService;
        private readonly IFridgeProductService _fridgeproductService;
        private readonly IUserService _userService;
        public FridgeProductController(IProductService prodService, IUserService userService, IFridgeProductService fridgeproductService)
        {
            _productService = prodService;
            _userService = userService;
            _fridgeproductService = fridgeproductService;
        }


        [HttpGet]
        [Route("general")]
        public async Task<ActionResult> GetFridgeProductList()
        {
            var products = (await _fridgeproductService.Get()).ToList();
            return Ok(products);
            //return Ok(await _productService.Get());
        }

        [HttpGet("{id}")]
        [Route("fridge")]
        public async Task<ActionResult> GetFridgeProductListByFridgeId(int id)  //fridge_id
        { 
            var products = (await _fridgeproductService.Get()).ToList().Where(m => m.FridgeId==id);
            return Ok(products);
        }

        [HttpGet("{id}")]
        [Route("fridgebadlist")]
        public async Task<ActionResult> GetBadFridgeProductListByFridgeId(int id)
        {
            var today = DateTime.Now;
            var products = (await _fridgeproductService.Get()).ToList().Where(m => m.FridgeId == id && m.DateValid<=today);
            return Ok(products);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutFridgeProductDetail(int id, [FromBody]FridgeProduct product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            var db_prod = await _fridgeproductService.Get(id);
            if (db_prod != null)
            {
                await _fridgeproductService.Update(product);
                return Ok(product);
            }
            return NotFound();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult> GetFridgeProductDetail(int id)
        {
            var product = await _fridgeproductService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }


        [HttpPost]
        public async Task<ActionResult> PostFridgeProductDetail([FromBody]FridgeProduct product)
        {
            await _fridgeproductService.Add(product);
            return CreatedAtAction("GetFridgeProductDetail", new { id = product.Id }, product);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteFridgeProductDetail(int id)
        {
            var product = await _fridgeproductService.Get(id);
            if (product == null)
            {
                return NotFound();
            }
            await _fridgeproductService.Delete(product);
            return Ok(product);
        }

        //public List<ProductView> MyMap(List<Product> db_products)
        //{
        //    try
        //    {
        //        var new_products = new List<ProductView>();
        //        foreach(var db_prod in db_products)
        //        {
        //            new_products.Add(new ProductView(db_));
        //        }
        //    }
        //    catch(Exception e)
        //    {
        //        return null;
        //    }
        //}


    }
}