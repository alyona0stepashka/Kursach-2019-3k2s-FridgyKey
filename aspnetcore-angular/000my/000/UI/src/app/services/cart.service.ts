import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/Cart';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _http: HttpClient;
  public formData: Cart;
  readonly rootURL = 'http://localhost:8491/api';
  list: Cart[];
  
   constructor(private fb: FormBuilder,private http:HttpClient) { 
     this._http=http;
   }
 
 postCartDetail(){
   return this._http.post(this.rootURL+'/cart', this.formData);
 } 
 
 putCartDetail(){
   return this._http.put(this.rootURL+'/cart/'+ this.formData.Id, this.formData);
 } 
 
 deleteCartDetail(id){
   return this._http.delete(this.rootURL+'/cart/'+ id);
 } 
 
 refreshList(id){  //fridge_id
   this._http.get(this.rootURL+'/cart/fridge/'+id)
   .toPromise()
   .then(res=> this.list = res as Cart[]);
 }

 resetForm(){
    this.formData = {
      Id:0,
      Amount: 0,
      Description: '',
      EI: '',   
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
  