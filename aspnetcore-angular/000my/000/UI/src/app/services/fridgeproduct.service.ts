import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FridgeProduct } from '../models/FridgeProduct';
import { FormBuilder} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FridgeproductService {
  private _http: HttpClient;
  public formData: FridgeProduct;
  readonly rootURL = 'http://localhost:8491/api';
  list: FridgeProduct[];
  
   constructor(private fb: FormBuilder,private http:HttpClient) { 
     this._http=http;
   }
 
 postFridgeProductDetail(){
   return this._http.post(this.rootURL+'/fridgeproduct', this.formData);
 } 
 
 putFridgeProductDetail(){
   return this._http.put(this.rootURL+'/fridgeproduct/'+ this.formData.Id, this.formData);
 } 
 
 deleteFridgeProductDetail(id){
   return this._http.delete(this.rootURL+'/fridgeproduct/'+ id);
 } 
 
 refreshList(id){  //fridge_id
   this._http.get(this.rootURL+'/fridgeproduct/fridge/'+id)
   .toPromise()
   .then(res=> this.list = res as FridgeProduct[]);
 }
 
 resetForm(){
  this.formData = {
    Id:0,
    Amount: 0,
    Description: '',
    EI: '',
    Price: 0,
    DateBuy: new Date(),
    DateValid: new Date(),
    Fridge: {
      Id:0,
      Name: '',
      Description: '',
      PasswordHash: '',
      DateCreate: new Date(),
      Stickers: null,
      FridgeProducts: null,
      Users: null
    },
    Product: {
      Id:0,
      Name: '',
      Description: '',
      ImgURL: '',
      ProdInfo: {
        Id:0,
        Fat: 0,
        Carb: 0,
        Protein: 0,
        Kkal: 0
      },
      User: {
        Id: '',
        FullName: '',
        Email: '',
        Password: '',
        Role: ''
    }
    },
    User: {
      Id:'',
      FullName: '',
      Email: '',
      Password: '',
      Role: ''
   } 
  };
}
}
