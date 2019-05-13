import { UserDetail } from './UserDetail';
import { ProductInfo } from './ProductInfo';

export class Product {
    Id: number;
    Name: string;
    Description: string;
    ImgURL: string;
    ProdInfo: ProductInfo;
    User: UserDetail;
}

/*
 public int Id { get; set; }

        [StringLength(450)]
        public virtual string UserId { get; set; }

        [StringLength(450)]
        public string Name { get; set; }

        [StringLength(450)]
        public string Description { get; set; }

        [StringLength(255)]
        public string ImgURL { get; set; }


        public virtual ICollection<FridgeProduct> FridgeProducts { get; set; }

        //public virtual ICollection<Ingredient> Ingredients { get; set; }

        public virtual ProductInfo ProdInfo { get; set; }

        public virtual ApplicationUser User { get; set; }
        */