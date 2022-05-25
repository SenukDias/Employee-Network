using Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System.Web;
using System.Web.Services;
using DBConnection;


namespace Employee_Network.services
{
    
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class EMPservices : System.Web.Services.WebService
    {

        [WebMethod]
        public string AddUser(Member member)
        {
            new DBAccess().AddData(member);
            return "Data Entered";
        }
    }
}
