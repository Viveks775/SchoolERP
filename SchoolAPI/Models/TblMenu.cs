namespace SchoolAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("TblMenu")]
    public partial class TblMenu
    {
        [Key]
        public long MenuId { get; set; }

        public long? ModuleId { get; set; }

        public long? CreatedBy { get; set; }

        public DateTime? CreatedDate { get; set; }

        public long? ModifiedBy { get; set; }

        public DateTime? ModifiedDate { get; set; }

        public Int32 Status { get; set; }

        public long? RoleId { get; set; }
    }
}
