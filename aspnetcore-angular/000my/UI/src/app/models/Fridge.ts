import { Sticker } from './Sticker';
import { FridgeProduct } from './FridgeProduct';
//import { UserFridge } from './UserFridge';
import { UserDetail } from './UserDetail';

export class Fridge {
    Id: number;
    Name: string;
    Description: string;
    PasswordHash: string;
    DateCreate: Date;

    Stickers: Sticker[];
    FridgeProducts: FridgeProduct[];
    Users:UserDetail[];
    //UserFridges: UserFridge[];
}

/*
 public int Id { get; set; }

        [StringLength(50)]
        public string PasswordHash { get; set; }

        [StringLength(50)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Description { get; set; }

        public DateTime? DateCreate { get; set; }

        public virtual ICollection<Sticker> Stickers { get; set; }
        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }

        public virtual ICollection<UserFridge> UserFridges { get; set; }

        */