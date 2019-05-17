import { UserDetail } from "./UserDetail";
import { Fridge } from './Fridge';
import { Product } from './Product';

export class FridgeProduct {
    Id: number;
    Amount: number;
    Description: string;
    EI: string;
    Price: number;
    DateBuy: Date;
    DateValid: Date;

    Fridge: Fridge;
    Product: Product;
    User: UserDetail; 
}

/*
  public int Id { get; set; }

        public int? FridgeId { get; set; }

        public int? ProductId { get; set; }

        [StringLength(450)]
        public virtual string UserId { get; set; }

        public double? Amount { get; set; }

        [StringLength(50)]
        public string EI { get; set; }

        [StringLength(255)]
        public string Description { get; set; }

        public decimal? Price { get; set; }

        public DateTime? DateBuy { get; set; }

        public DateTime? DateValid { get; set; }

        public virtual Fridge Fridge { get; set; }

        public virtual Product Product { get; set; }

        public virtual ApplicationUser User { get; set; }

        */