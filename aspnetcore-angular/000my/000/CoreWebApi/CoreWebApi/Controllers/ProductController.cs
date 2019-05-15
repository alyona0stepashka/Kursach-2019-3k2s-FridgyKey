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
    [Route("api/product")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        private readonly IUserService _userService;
        public ProductController(IProductService prodService, IUserService userService)
        {
            _productService = prodService;
            _userService = userService;
        }


        [HttpGet]
        [Route("general")]
        public async Task<ActionResult> GetProductList()
        {
            var products = (await _productService.Get()).ToList();

            return Ok(products);
            //return Ok(await _productService.Get());
        }

        [HttpGet]
        [Route("user")]
        public async Task<ActionResult> GetProductListByUser()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var products = (await _productService.Get()).ToList().Where(m => m.UserId == userId || m.User.Email == "admin@mail.ru");
            return Ok(products);
        }
  
        [HttpPut("{id}")]
        public async Task<ActionResult> PutProductDetail(int id, [FromBody]Product product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            var db_prod = await _productService.Get(id);
            if (db_prod != null)
            {
                await _productService.Update(product);
                return Ok(product);
            }
            return NotFound();
        }

     
        [HttpGet("{id}")]
        public async Task<ActionResult> GetProductDetail(int id)
        {
            var product = await _productService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

       
        [HttpPost]
        public async Task<ActionResult> PostProductDetail([FromBody]Product product)
        {
            product.UserId = User.Claims.First(c => c.Type == "UserID").Value; 
            await _productService.Add(product);
            return CreatedAtAction("GetProductDetail", new { id = product.Id }, product);
        }

       
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteProductDetail(int id)
        {
            var product = await _productService.Get(id);
            if (product == null)
            {
                return NotFound();
            }
            await _productService.Delete(product);

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