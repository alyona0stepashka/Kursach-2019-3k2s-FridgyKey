import { UserDetail } from './UserDetail';

export class Sticker {
    Id: number;
    Text: string; 
    DateAdd: Date;

    User: UserDetail;
    //Fridge: Fridge;
}

/*
 public int Id { get; set; }

        public int FridgeId { get; set; }

        [StringLength(450)]
        public virtual string UserId { get; set; }

        [StringLength(450)]
        public string Text { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime DateAdd { get; set; }

        public virtual ApplicationUser User { get; set; }

        public virtual Fridge Fridge { get; set; }

        */