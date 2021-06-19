using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using OfflineAppTest.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
namespace OfflineAppTest.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public ActionResult Manifest()
        {
         //   Response.ContentType = "text/cache-manifest";
            //Response.ContentEncoding = System.Text.Encoding.UTF8;
         //   Response.Cache.SetCacheability(System.Web.HttpCacheability.NoCache);
            return View();
        }
        //public IActionResult Privacy()
        //{
        //    return View();
        //}

        //[ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        //public IActionResult Error()
        //{
        //    return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        //}
    }
}
