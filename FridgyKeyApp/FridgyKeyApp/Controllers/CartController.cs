using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using FK.BLL.Interfaces;
using FK.Models;
using FridgyKeyApp.Models.New;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FridgyKeyApp.Controllers
{
    //public class CartController : Controller
    //{
    //    private readonly IAccountService _accountService; 
    //    private readonly ISessionHelper _sessionHelper;
    //    private readonly IProductService _productService; 
    //    private readonly IProductInfoService _productInfoService; 

    //    public CartController( 
    //        ISessionHelper helper,
    //        IProductService product,
    //        IAccountService account,
    //        IProductInfoService orderProductService)
    //    { 
    //        _sessionHelper = helper;
    //        _productService = product;
    //        _accountService = account;
    //        _productInfoService = orderProductService;
    //    }

    //    public IActionResult Index()
    //    {
    //        var cart =
    //            _sessionHelper.GetObjectFromJson<List<CartProductViewModel>>(HttpContext.Session, "cart");
    //        ViewBag.cart = cart; 
    //        return View();
    //    }

    //    public IActionResult Buy(int id)
    //    {
    //        var product = _productService.GetProduct(id);
    //        if (_sessionHelper.GetObjectFromJson<List<CartProductViewModel>>(HttpContext.Session, "cart") == null)
    //        {
    //            var cart = new List<CartProductViewModel>
    //            {
    //                new CartProductViewModel { Product = product, Amount = 1 }
    //            };
    //            _sessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
    //        }
    //        else
    //        {
    //            var cart = _sessionHelper.GetObjectFromJson<List<CartProductViewModel>>(HttpContext.Session, "cart");
    //            var index = IsExist(id);
    //            if (index != -1)
    //            {
    //                cart[index].Amount++;
    //            }
    //            else
    //            {
    //                cart.Add(new CartProductViewModel { Product = product, Amount = 1 });
    //            }
    //            _sessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);
    //        }

    //        return RedirectToAction("Index");
    //    }

    //    public IActionResult Remove(int id)
    //    {
    //        var cart =
    //            _sessionHelper.GetObjectFromJson<List<CartProductViewModel>>(HttpContext.Session, "cart");
    //        var index = IsExist(id);
    //        cart.RemoveAt(index);
    //        _sessionHelper.SetObjectAsJson(HttpContext.Session, "cart", cart);

    //        return RedirectToAction("Index");
    //    }

    //    public IActionResult BuyAllProductInBasket()
    //    {
    //        try
    //        {
    //        var getAllProduct = _sessionHelper.GetObjectFromJson<List<CartProductViewModel>>(HttpContext.Session, key: "cart");
    //        if (getAllProduct == null) return Content("", "Sorry, your shopping cart is empty!");  
    //        }         
    //        catch (ValidationException ex)
    //        {
    //            ModelState.AddModelError(ex. ex.Message);
    //        }

    //        return RedirectToAction("Index", "Home");
    //    } 
    //    private int IsExist(int id)
    //    {
    //        var cart = _sessionHelper.GetObjectFromJson<List<CartProductViewModel>>(HttpContext.Session, "cart");
    //        for (var i = 0; i < cart.Count; i++)
    //        {
    //            if (cart[i].CartProduct.Product.Id.Equals(id))
    //            {
    //                return i;
    //            }
    //        }
    //        return -1;
    //    }
    //}
}