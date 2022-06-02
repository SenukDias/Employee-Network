using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Payment
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

        #region Month
        public string Month { get; set; }
        #endregion

        #region Salary
        public string Salary { get; set; }
        #endregion

    }
    public class Payments : List<Payment>
    {

    }
}
