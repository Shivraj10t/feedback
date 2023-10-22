using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Configuration;
using System.Data;
using Newtonsoft.Json;

namespace feedback.Controllers
{

    public class newUserController : Controller
    {
        // GET: newUser
        string _connectionString = ConfigurationManager.ConnectionStrings["UAIMS"].ConnectionString;
        public ActionResult Index()
        {
            try
            {
                bool isSignin = (bool)Session["isSignin"];
                if (isSignin == true)
                {
                    return RedirectToAction("index", "Dashbord");
                }
                else
                {
                    return View();
                }
            }
            catch (Exception ex)
            {

                return View();
            }
             
        }

        public JsonResult btnsubmit(string firstname, string Lastname, string Contactno, string email)
        {
            SqlConnection con = new SqlConnection(_connectionString);
            SqlCommand cmd = new SqlCommand("NEW_REGISTER", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Clear();
            cmd.Parameters.AddWithValue("@FIRST_NAME", firstname);
            cmd.Parameters.AddWithValue("@LAST_NAME", Lastname);
            cmd.Parameters.AddWithValue("@CONTACT_NO", Contactno);
            cmd.Parameters.AddWithValue("@EMAIL", email);
            DataSet ds = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = cmd;
            da.Fill(ds);
            return Json("");
        }
        public JsonResult SignIn(  string email,string Contactno)
        {
            SqlConnection con = new SqlConnection(_connectionString);
            SqlCommand cmd = new SqlCommand("SignIn", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Clear();            
            cmd.Parameters.AddWithValue("@EMAIL", email);
            cmd.Parameters.AddWithValue("@PASSWORD", Contactno);
            DataSet ds = new DataSet();
            SqlDataAdapter da = new SqlDataAdapter();
            da.SelectCommand = cmd;
            da.Fill(ds);
            string result=JsonConvert.SerializeObject(ds);
            Session["isSignin"] = ds.Tables[0].Rows.Count > 0 ? true : false;
            return Json(result, JsonRequestBehavior.AllowGet);
        }

    }
}