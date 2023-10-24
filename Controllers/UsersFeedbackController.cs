using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Configuration;
using Newtonsoft.Json;

namespace feedback.Controllers
{
    public class UsersFeedbackController : Controller
    {
        // GET: UsersFeedback
        string _connectionString = ConfigurationManager.ConnectionStrings["UAIMS"].ConnectionString;
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GET_FEEDBACK_QUESTION()
        {
            string result = string.Empty;
            try
            {

                SqlConnection con = new SqlConnection(_connectionString);
                SqlCommand cmd = new SqlCommand("GET_FEEDBACK_QUESTION", con);
                cmd.CommandType = CommandType.StoredProcedure;
                DataSet ds = new DataSet();
                SqlDataAdapter da = new SqlDataAdapter();
                da.SelectCommand = cmd;
                da.Fill(ds);
                result = JsonConvert.SerializeObject(ds);

            }
            catch (Exception ex)
            {
                return Json(ex.Message, JsonRequestBehavior.AllowGet);
            }
            return Json(result, JsonRequestBehavior.AllowGet);
        }
    }
}