
export class Fridge {
  public id: number;
  public passwordhash: string;
  public name: string;
  public description: string;
  //public datecreate: date; 
}

export class FridgeView {
  public fridgeid: number; 
  public name: string;
  //public datecreate: date;
  public users: Array<any>
}

export class UserFridgeAdd {
  public id: number;
  public passwordhash: string; 
}
