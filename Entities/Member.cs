using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Member
    {
        #region Id
        public Int32 Id { get; set; }
        #endregion

        #region No
        public Int32 No { get; set; }
        #endregion

        #region Name
        public string Name { get; set; }
        #endregion

        #region Login
        public string Login { get; set; }
        #endregion

        #region Mobile
        public string Mobile { get; set; }
        #endregion

        #region Email
        public string Email { get; set; }
        #endregion

        #region Password
        public string Password { get; set; }
        #endregion

        #region Gender
        public string Gender { get; set; }
        #endregion

        #region Framework
        public string Framework { get; set; }
        #endregion

        #region Position
        public string Position { get; set; }
        #endregion

        #region Description
        public string Description { get; set; }
        #endregion

        #region Month
        public string Month { get; set; }
        #endregion

        #region Salary
        public string Salary { get; set; }
        #endregion
    }

    public class Members : List<Member>
    {

    }
}
