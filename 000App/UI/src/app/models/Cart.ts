import { UserDetail } from "./UserDetail";
import { Fridge } from './Fridge';
import { Product } from './Product';

export class Cart {
    Id: number;
    Amount: number;
    Description: string;
    EI: string;  

    Fridge: Fridge;
    Product: Product;
    User: UserDetail; 
}

/*

         public int Id { get; set; } 
        public int FridgeId { get; set; } 
        public int ProductId { get; set; } 
        public virtual string UserId { get; set; } 
         public double Amount { get; set; } 
         public string EI { get; set; } 
         public string Description { get; set; }  
        public virtual Fridge Fridge { get; set; } 
        public virtual Product Product { get; set; } 
        public virtual ApplicationUser User { get; set; }   

*/
