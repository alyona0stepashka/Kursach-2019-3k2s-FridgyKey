namespace FridgyKey.Models1
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("FridgeProduct")]
    public partial class FridgeProduct
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int Id { get; set; }

        public int? FridgeId { get; set; }

        public int? UserId { get; set; }

        public int? ProductId { get; set; }

        public double? Amount { get; set; }

        [StringLength(10)]
        public string EI { get; set; }

        public decimal? Price { get; set; }

        public DateTime? DateValid { get; set; }

        public virtual Fridge Fridge { get; set; }

        public virtual Product Product { get; set; }

        public virtual User User { get; set; }
    }
}
