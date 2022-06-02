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

        [WebMethod]
        public string SndMsg(Message message)
        {
            new DBAccess().AddMessage(message);
            return "Data Entered";
        }

        [WebMethod]
        public Members Data_GetAll()
        {
            return new DBAccess().GetMembers();
        }

        [WebMethod]
        public Member GetByid(Member member)
        {
            return new DBAccess().GetByid(member);
        }

        [WebMethod]
        public string UpdateData(Member member)
        {
            new DBAccess().DataUpdate(member);
            return "Data Updated";
        }

        [WebMethod]
        public string DeleteData(Member member)
        {
            new DBAccess().DataDelete(member);
            return "Data Deleted";
        }

        [WebMethod]
        public Members PayData()
        {
            return new DBAccess().GetMembers();
        }

        [WebMethod]
        public string PayUser(Member member)
        {
            new DBAccess().AddPayment(member);
            return "Data Entered";
        }

        [WebMethod]
        public Payments GetPayment()
        {
            return new DBAccess().GetPayment();
        }

        [WebMethod]
        public string ClrSalary(Payment payment)
        {
            new DBAccess().ClrSalary(payment);
            return "Data Deleted";
        }
    }
}
