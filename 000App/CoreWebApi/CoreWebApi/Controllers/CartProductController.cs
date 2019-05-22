using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.BLL.Models;
using FK.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWebApi.Controllers
{
    [Produces("application/json")]
    [Route("api/cart")]
    public class CartProductController : Controller
    {
        private readonly IProductService _productService;
        private readonly ICartProductService _cartproductService;
        private readonly IFridgeProductService _fridgeproductService; 
        private readonly IUserService _userService;
        public CartProductController(IProductService prodService, IUserService userService, IFridgeProductService fridgeproductService, ICartProductService cartproductService)
        {
            _cartproductService = cartproductService;
            _productService = prodService;
            _userService = userService;
            _fridgeproductService = fridgeproductService;
        }


        [HttpGet]
        [Route("general")]
        public async Task<ActionResult> GetCartProductList()
        {
            var products = (await _cartproductService.Get()).ToList();
            return Ok(products);
            //return Ok(await _productService.Get());
        }

        [HttpGet("{id}")] 
        [Route("fridge")]
        public async Task<ActionResult> GetCartProductListByFridgeId(int id)  //fridge_id
        {
            var products = (await _cartproductService.Get()).ToList().Where(m => m.FridgeId == id);
            return Ok(products);
        } 

        [HttpPut("{id}")]
        public async Task<ActionResult> PutFridgeProductDetail(int id, [FromBody]CartProduct product)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }
            var db_prod = await _cartproductService.Get(id);
            if (db_prod != null)
            { 
                await _cartproductService.Update(product);
                return Ok(product);
            }
            return NotFound();
        }


        [HttpGet("{id}")]
        public async Task<ActionResult> GetCartProductDetail(int id)
        {
            var product = await _cartproductService.Get(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }


        [HttpPost]
        public async Task<ActionResult> PostCartProductDetail([FromBody]CartProduct product)
        {
            product.ProductId = (await _productService.Get(m => m.Name == product.Product.Name)).FirstOrDefault().Id;
            product.Product.Name = "";
            await _cartproductService.Add(product);
            return CreatedAtAction("GetCartProductDetail", new { id = product.Id }, product);
        }


        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteCartProductDetail(int id)
        {
            var product = await _cartproductService.Get(id);
            if (product == null)
            {
                return NotFound();
            }
            await _cartproductService.Delete(product);
            return Ok(product);
        }

        public List<CartProductModel> MyMapCartProduct(List<CartProduct> db_products)
        {
            try
            {
                var new_products = new List<CartProductModel>();
                foreach (var db_prod in db_products)
                {
                    new_products.Add(new CartProductModel(db_prod));
                }
                return new_products;
            }
            catch (Exception e)
            {
                return null;
            }
        }


    }
}