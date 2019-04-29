
export class FridgeProduct {
  public id: number;
  public passwordhash: string;
  public name: string;
  public description: string;
  //public datecreate: date; 
}  //???

export class FridgeProductView {
  public id: number;
  public fridgeid: number;
  public productid: number;
  public userid: string;
  public ei: string;
  public name: string;
  public description: string;
  public amount: number;
  public price: number; 
  //public datebuy: date; 
  //public datevalid: date; 
}
