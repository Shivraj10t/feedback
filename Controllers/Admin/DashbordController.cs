using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace feedback.Controllers.Admin
{
    public class DashbordController : Controller
    {
        // GET: Dashbord
        public ActionResult Index()
        {
            try
            {
                bool isSignin = (bool)Session["isSignin"];
                if (isSignin == true)
                {

                }
                else
                {
                    return RedirectToAction("index", "newUser");
                }
            }
            catch (Exception ex)
            {

                return RedirectToAction("index", "newUser");
            }

            return View();
        }
    }
}