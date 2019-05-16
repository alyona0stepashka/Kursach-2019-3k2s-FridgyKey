using CoreWebApi.Controllers;
using FK.DAL.Interfaces;
using FK.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using Xunit;

namespace UnitTest
{
    public class UnitTest1
    {



        [Fact]
        public void IndexViewDataMessage()
        {
            //ProductController controller = new ProductController(); 
            //var result = controller.GetProductList() as ViewResult; 
            //Assert.Equal("Hello world!", result?.ViewData["Message"]);

            // Arrange
            //var mock = new Mock<IRepository<Product,int>>();
            //mock.Setup(repo => repo.Get(1)).Returns(new Product {a });
            //var controller = new HomeController(mock.Object);

            //// Act
            //var result = controller.Index();

            //// Assert
            //var viewResult = Assert.IsType<ViewResult>(result);
            //var model = Assert.IsAssignableFrom<IEnumerable<Phone>>(viewResult.Model);
            //Assert.Equal(GetTestPhones().Count, model.Count());
        }
        //[Fact]
        //public void IndexReturnsAViewResultWithAListOfMedicines()
        //{
        //    // Arrange
        //    var mock = new Mock<IRepository>();
        //    mock.Setup(repo => repo.GetAll()).Returns(GetTestQuiz());
        //    var controller = new HController(mock.Object);

        //    // Act
        //    var result = controller.Index();

        //    // Assert
        //    var viewResult = Assert.IsType<ViewResult>(result);
        //    var model = Assert.IsAssignableFrom<IEnumerable<Quiz>>(viewResult.Model);
        //    Assert.Equal(GetTestQuiz().Count, model.Count());
        //}
        //private List<Quiz> GetTestQuiz()
        //{
        //    var q = new List<Quiz>
        //    {
        //        new Quiz { Id=12, Title="it", Description="Apaaaa", Text="qqwqwq"},

        //    };
        //    return q;
        //}

        //[Fact]
        //public void AddMedicinesReturnsViewResult()
        //{
        //    // Arrange
        //    var mock = new Mock<IRepository>();
        //    var controller = new HController(mock.Object);
        //    controller.ModelState.AddModelError("Name", "Required");
        //    Quiz newPhone = new Quiz();

        //    // Act
        //    var result = controller.AddQuiz(newPhone);

        //    // Assert
        //    var viewResult = Assert.IsType<ViewResult>(result);
        //    Assert.Equal(newPhone, viewResult?.Model);
        //}

        //[Fact]
        //public void AddMedicinesReturnsARedirectAndAddsMedicines()
        //{
        //    // Arrange
        //    var mock = new Mock<IRepository>();
        //    var controller = new HController(mock.Object);
        //    var newQuiz = new Quiz()
        //    {
        //        Title = "TestingUnitTest"
        //    };

        //    // Act
        //    var result = controller.AddQuiz(newQuiz);

        //    // Assert
        //    var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result);
        //    Assert.Null(redirectToActionResult.ControllerName);
        //    Assert.Equal("Index", redirectToActionResult.ActionName);
        //    mock.Verify(r => r.Create(newQuiz));
        //}

        //[Fact]
        //public void GetMedicinesReturnsBadRequestResultWhenIdIsNull()
        //{
        //    // Arrange
        //    var mock = new Mock<IRepository>();
        //    var controller = new HController(mock.Object);

        //    // Act
        //    var result = controller.GetQuiz(null);

        //    // Arrange
        //    Assert.IsType<BadRequestResult>(result);
        //}

        //[Fact]
        //public void GetMedicinesReturnsNotFoundResult()
        //{
        //    // Arrange
        //    int testQuizId = 1;
        //    var mock = new Mock<IRepository>();
        //    mock.Setup(repo => repo.Get(testQuizId))
        //        .Returns(null as Quiz);
        //    var controller = new HController(mock.Object);

        //    // Act
        //    var result = controller.GetQuiz(testQuizId);

        //    // Assert
        //    Assert.IsType<NotFoundResult>(result);
        //}

        //--------------------------

        //[Fact]
        //public void GetQuizReturnsViewResultWithQuiz()
        //{
        //    // Arrange
        //    int testQuizId = 13;
        //    var mock = new Mock<IRepository>();
        //    mock.Setup(repo => repo.Get(testQuizId))
        //        .Returns(GetTestQuiz().FirstOrDefault(p => p.Id == testQuizId));
        //    var controller = new HController(mock.Object);

        //    // Act
        //    var result = controller.GetQuiz(testQuizId);

        //    // Assert
        //    var viewResult = Assert.IsType<ViewResult>(result);
        //    var model = Assert.IsType<Quiz>(viewResult.ViewData.Model);
        //    Assert.Equal("Title", model.Title);            
        //    Assert.Equal("Description", model.Description);
        //    Assert.Equal("Text", model.Text);
        //    Assert.Equal(testQuizId, model.Id);
        //}

        //[Fact]
        //public void IndexResultNotNull()
        //{
        //    // Arrange
        //    HController controller = new HController();
        //    // Act
        //    ViewResult result = controller.Index() as ViewResult;
        //    // Assert
        //    Assert.NotNull(result);
        //}

        //[Fact]
        //public void IndexNameEqualIndex()
        //{
        //    // Arrange
        //    HController controller = new HController();
        //    // Act
        //    ViewResult result = controller.Index() as ViewResult;
        //    // Assert
        //    Assert.Equal("Index", result?.ViewName);
        //}
    }
}
