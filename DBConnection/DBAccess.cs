using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Entities;
using System.Data.SqlClient;

namespace DBConnection
{
    public class DBAccess
    {
        //Add Sign_Up data
        public void AddData(Member member)
        {
            using (SqlConnection sqlConnection = new SqlConnection("Data Source=SENUK-VIVOBOOK;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand sqlCommand = sqlConnection.CreateCommand();
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.CommandText = "AddEmp";


                SqlParameter NameParameter = new SqlParameter("@Name", System.Data.SqlDbType.NVarChar);
                SqlParameter LoginParameter = new SqlParameter("@Login", System.Data.SqlDbType.NVarChar);
                SqlParameter MobileParameter = new SqlParameter("@Mobile", System.Data.SqlDbType.NVarChar);
                SqlParameter E_mailParameter = new SqlParameter("@E_mail", System.Data.SqlDbType.NVarChar);
                SqlParameter PasswordParameter = new SqlParameter("@Password", System.Data.SqlDbType.NVarChar);
                SqlParameter FrameworkParameter = new SqlParameter("@Framework", System.Data.SqlDbType.NVarChar);
                SqlParameter PositionParameter = new SqlParameter("@Position", System.Data.SqlDbType.NVarChar);
                SqlParameter GenderParameter = new SqlParameter("@Gender", System.Data.SqlDbType.NVarChar);
                SqlParameter DescriptionParameter = new SqlParameter("@Description", System.Data.SqlDbType.NVarChar);

                NameParameter.Value = member.Name;
                LoginParameter.Value = member.Login;
                MobileParameter.Value = member.Mobile;
                E_mailParameter.Value = member.Email;
                PasswordParameter.Value = member.Password;
                GenderParameter.Value = member.Gender;
                FrameworkParameter.Value = member.Framework;
                PositionParameter.Value = member.Position;
                DescriptionParameter.Value = member.Description;

                sqlCommand.Parameters.Add(NameParameter);
                sqlCommand.Parameters.Add(E_mailParameter);
                sqlCommand.Parameters.Add(LoginParameter);
                sqlCommand.Parameters.Add(MobileParameter);
                sqlCommand.Parameters.Add(PasswordParameter);
                sqlCommand.Parameters.Add(FrameworkParameter);
                sqlCommand.Parameters.Add(GenderParameter);
                sqlCommand.Parameters.Add(PositionParameter);
                sqlCommand.Parameters.Add(DescriptionParameter);

                sqlCommand.ExecuteNonQuery();
            }

        }

        // Get all data
        public Members GetMembers()
        {
            Members members = new Members();

            using (SqlConnection sqlConnection = new SqlConnection("Data Source=.;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand SqlCommand = sqlConnection.CreateCommand();
                SqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                SqlCommand.CommandText = "GetData";

                using (SqlDataReader dataReader = SqlCommand.ExecuteReader())
                {
                    while (dataReader.Read())
                    {
                        Member member = new Member();

                        member.Id = int.Parse(dataReader["id"].ToString());
                        member.Name = dataReader["Name"].ToString();
                        member.Login = dataReader["Login"].ToString();
                        member.Mobile = dataReader["Mobile"].ToString();
                        member.Email = dataReader["E_Mail"].ToString();
                        member.Gender = dataReader["Gender"].ToString();
                        member.Framework = dataReader["Framework"].ToString();
                        member.Position = dataReader["Position"].ToString();
                        member.Description = dataReader["Description"].ToString();

                        members.Add(member);
                    }
                }
            }
            return members;
        }





        //Add Message 
        public void AddMessage(Message message)
        {
            using (SqlConnection sqlConnection = new SqlConnection("Data Source=SENUK-VIVOBOOK;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand sqlCommand = sqlConnection.CreateCommand();
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.CommandText = "AddMsg";


                SqlParameter NameParameter = new SqlParameter("@Name", System.Data.SqlDbType.NVarChar);
                SqlParameter E_mailParameter = new SqlParameter("@E_mail", System.Data.SqlDbType.NVarChar);
                SqlParameter MobileParameter = new SqlParameter("@Phone", System.Data.SqlDbType.NVarChar);
                SqlParameter WebParameter = new SqlParameter("@Website", System.Data.SqlDbType.NVarChar);
                SqlParameter MessageParameter = new SqlParameter("@Message", System.Data.SqlDbType.NVarChar);

                NameParameter.Value = message.Name;
                E_mailParameter.Value = message.Email;
                MobileParameter.Value = message.Phone;
                WebParameter.Value = message.Website;
                MessageParameter.Value = message.Mesage;

                sqlCommand.Parameters.Add(NameParameter);
                sqlCommand.Parameters.Add(E_mailParameter);
                sqlCommand.Parameters.Add(MobileParameter);
                sqlCommand.Parameters.Add(WebParameter);
                sqlCommand.Parameters.Add(MessageParameter);

                sqlCommand.ExecuteNonQuery();
            }

        }

        // Data Form fill
        public Member GetByid(Member member)
        {
            Members members = new Members();

            using (SqlConnection sqlConnection = new SqlConnection("Data Source=.;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand SqlCommand = sqlConnection.CreateCommand();
                SqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                SqlCommand.CommandText = "GetData_id";

                SqlParameter idParameter = new SqlParameter("@id", System.Data.SqlDbType.BigInt);

                idParameter.Value = member.Id;

                SqlCommand.Parameters.Add(idParameter);

                using (SqlDataReader dataReader = SqlCommand.ExecuteReader())
                {
                    while (dataReader.Read())
                    {
                        member  = new Member();

                        member.Id = int.Parse(dataReader["id"].ToString());
                        member.Name = dataReader["Name"].ToString();
                        member.Login = dataReader["Login"].ToString();
                        member.Mobile = dataReader["Mobile"].ToString();
                        member.Email = dataReader["E_Mail"].ToString();
                        member.Gender = dataReader["Gender"].ToString();
                        member.Framework = dataReader["Framework"].ToString();
                        member.Position = dataReader["Position"].ToString();
                        member.Description = dataReader["Description"].ToString();

                        members.Add(member);
                    }
                }
            }
            return member;
        }

        // Update Employee Data
        public void DataUpdate(Member member)
        {

            using (SqlConnection sqlConnection = new SqlConnection("Data Source=.;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand sqlCommand = sqlConnection.CreateCommand();
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.CommandText = "Data_Update";


                SqlParameter IdParameter = new SqlParameter("@Id", System.Data.SqlDbType.BigInt);
                SqlParameter NameParameter = new SqlParameter("@Name", System.Data.SqlDbType.NVarChar);
                SqlParameter LoginParameter = new SqlParameter("@Login", System.Data.SqlDbType.NVarChar);
                SqlParameter MobileParameter = new SqlParameter("@Mobile", System.Data.SqlDbType.NVarChar);
                SqlParameter E_mailParameter = new SqlParameter("@E_mail", System.Data.SqlDbType.NVarChar);
                SqlParameter PasswordParameter = new SqlParameter("@Password", System.Data.SqlDbType.NVarChar);
                SqlParameter FrameworkParameter = new SqlParameter("@Framework", System.Data.SqlDbType.NVarChar);
                SqlParameter PositionParameter = new SqlParameter("@Position", System.Data.SqlDbType.NVarChar);
                SqlParameter GenderParameter = new SqlParameter("@Gender", System.Data.SqlDbType.NVarChar);
                SqlParameter DescriptionParameter = new SqlParameter("@Description", System.Data.SqlDbType.NVarChar);

                IdParameter.Value = member.Id;
                NameParameter.Value = member.Name;
                LoginParameter.Value = member.Login;
                MobileParameter.Value = member.Mobile;
                E_mailParameter.Value = member.Email;
                PasswordParameter.Value = member.Password;
                GenderParameter.Value = member.Gender;
                FrameworkParameter.Value = member.Framework;
                PositionParameter.Value = member.Position;
                DescriptionParameter.Value = member.Description;

                sqlCommand.Parameters.Add(IdParameter);
                sqlCommand.Parameters.Add(NameParameter);
                sqlCommand.Parameters.Add(E_mailParameter);
                sqlCommand.Parameters.Add(LoginParameter);
                sqlCommand.Parameters.Add(MobileParameter);
                sqlCommand.Parameters.Add(PasswordParameter);
                sqlCommand.Parameters.Add(FrameworkParameter);
                sqlCommand.Parameters.Add(GenderParameter);
                sqlCommand.Parameters.Add(PositionParameter);
                sqlCommand.Parameters.Add(DescriptionParameter);

                sqlCommand.ExecuteNonQuery();
            }
        }

        // Delete Employee Data
        public void DataDelete(Member member)
        {

            using (SqlConnection sqlConnection = new SqlConnection("Data Source=.;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand sqlCommand = sqlConnection.CreateCommand();
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.CommandText = "DeleteMember";

                SqlParameter idParameter = new SqlParameter("@id", System.Data.SqlDbType.BigInt);

                idParameter.Value = member.Id;

                sqlCommand.Parameters.Add(idParameter);

                sqlCommand.ExecuteNonQuery();
            }
        }

        //Add Payment 
        public void AddPayment(Member member)
        {
            using (SqlConnection sqlConnection = new SqlConnection("Data Source=SENUK-VIVOBOOK;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand sqlCommand = sqlConnection.CreateCommand();
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.CommandText = "AddPay";


                SqlParameter IdParameter = new SqlParameter("@id", System.Data.SqlDbType.BigInt);
                SqlParameter NameParameter = new SqlParameter("@Name", System.Data.SqlDbType.NVarChar);
                SqlParameter MonthParameter = new SqlParameter("@Month", System.Data.SqlDbType.NVarChar);
                SqlParameter SalParameter = new SqlParameter("@Salary", System.Data.SqlDbType.NVarChar);
                SqlParameter StatusParameter = new SqlParameter("@Status", System.Data.SqlDbType.NVarChar);

                IdParameter.Value = member.Id;
                NameParameter.Value = member.Name;
                MonthParameter.Value = member.Month;
                SalParameter.Value = member.Salary;
                StatusParameter.Value = "Paid";

                sqlCommand.Parameters.Add(IdParameter);
                sqlCommand.Parameters.Add(NameParameter);
                sqlCommand.Parameters.Add(MonthParameter);
                sqlCommand.Parameters.Add(SalParameter);
                sqlCommand.Parameters.Add(StatusParameter);

                sqlCommand.ExecuteNonQuery();
            }

        }

        // Get all Payment
        public Payments GetPayment()
        {
            Payments payments = new Payments();

            using (SqlConnection sqlConnection = new SqlConnection("Data Source=.;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand SqlCommand = sqlConnection.CreateCommand();
                SqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                SqlCommand.CommandText = "GetPayment";

                using (SqlDataReader dataReader = SqlCommand.ExecuteReader())
                {
                    while (dataReader.Read())
                    {
                        Payment Payment = new Payment();

                        Payment.Id = int.Parse(dataReader["id"].ToString());
                        Payment.No = int.Parse(dataReader["No"].ToString());
                        Payment.Name = dataReader["Name"].ToString();
                        Payment.Month = dataReader["Month"].ToString();
                        Payment.Salary = dataReader["Salary"].ToString();

                        payments.Add(Payment);
                    }
                }
            }
            return payments;
        }

        // Delete Payment Record
        public void ClrSalary(Payment payment)
        {

            using (SqlConnection sqlConnection = new SqlConnection("Data Source=.;Initial Catalog=Employee;Integrated Security=True"))
            {
                sqlConnection.Open();

                SqlCommand sqlCommand = sqlConnection.CreateCommand();
                sqlCommand.CommandType = System.Data.CommandType.StoredProcedure;
                sqlCommand.CommandText = "DeletePayment";

                SqlParameter noParameter = new SqlParameter("@no", System.Data.SqlDbType.BigInt);

                noParameter.Value = payment.No;

                sqlCommand.Parameters.Add(noParameter);

                sqlCommand.ExecuteNonQuery();
            }
        }
    }
}
