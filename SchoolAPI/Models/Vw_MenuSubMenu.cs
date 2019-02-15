namespace SchoolAPI.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    public partial class Vw_MenuSubMenu
    {
        [StringLength(50)]
        public string Role { get; set; }

        [Key]
        [Column(Order = 0)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long RoleId { get; set; }

        [StringLength(50)]
        public string AllowEdit { get; set; }

        [StringLength(50)]
        public string AllowDelete { get; set; }

        [StringLength(50)]
        public string AllowView { get; set; }

        [StringLength(50)]
        public string AllowInsert { get; set; }

        public long? ModuleId { get; set; }

        [Key]
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public long MenuId { get; set; }
    }
}
