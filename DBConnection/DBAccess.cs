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
    }
}
