import { UserDetail } from './UserDetail';
//import { Sticker } from './Sticker';
import { FridgeProduct } from './FridgeProduct';
import { Product } from './Product';
//import { UserFridge } from './UserFridge';

export class ApplicationUser {
    User: UserDetail;
    //Stickers: Sticker[];
    FridgeProducts: FridgeProduct[];
    Products: Product[];
    //UserFridges: UserFridge[];

}

/*


        public virtual ICollection<Sticker> Stickers { get; set; }

        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }

        public virtual ICollection<Product> Products { get; set; }

        public virtual ICollection<UserFridge> UserFridges { get; set; }

        */