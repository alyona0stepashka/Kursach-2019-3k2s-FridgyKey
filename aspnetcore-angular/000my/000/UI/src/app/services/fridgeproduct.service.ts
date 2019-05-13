import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FridgeProduct } from '../models/FridgeProduct';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
 
 refreshList(){
   this._http.get(this.rootURL+'/fridgeproduct')
   .toPromise()
   .then(res=> this.list = res as FridgeProduct[]);
 }
 
}
