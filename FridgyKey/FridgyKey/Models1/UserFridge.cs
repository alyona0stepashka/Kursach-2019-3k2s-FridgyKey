namespace FridgyKey.Models1
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("UserFridge")]
    public partial class UserFridge
    {
        public int Id { get; set; }

        public int? FridgeId { get; set; }

        public int? UserId { get; set; }

        public virtual Fridge Fridge { get; set; }

        public virtual User User { get; set; }
    }
}
