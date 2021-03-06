﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SchoolAPI.Param
{
    public class RoleMasterUpdateParam
    {
        public long RoleID { get; set; }
               
        public string Role { get; set; }

        public long CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public long ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        public int Status { get; set; }
    }
}