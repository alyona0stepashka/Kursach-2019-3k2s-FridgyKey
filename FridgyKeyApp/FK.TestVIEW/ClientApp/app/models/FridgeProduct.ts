
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
  public name: string;
  public description: string;
  public amount: number;
  public ei: string;
  public price: number;
  public username: string;  //!!! update viewmodel
  //public datebuy: date; 
  //public datevalid: date; 
}
