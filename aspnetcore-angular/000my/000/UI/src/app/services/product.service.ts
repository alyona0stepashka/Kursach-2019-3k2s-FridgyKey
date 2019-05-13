import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/Product';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _http: HttpClient;
  public formData: Product;
  readonly rootURL = 'http://localhost:8491/api';
  list: Product[];
  
   constructor(private fb: FormBuilder,private http:HttpClient) { 
     this._http=http;
   }
 
 postProductDetail(){
   return this._http.post(this.rootURL+'/product', this.formData);
 } 
 
 putProductDetail(){
   return this._http.put(this.rootURL+'/product/'+ this.formData.Id, this.formData);
 } 
 
 deleteProductDetail(id){
   return this._http.delete(this.rootURL+'/product/'+ id);
 } 
 
 refreshList(){
   this._http.get(this.rootURL+'/product')
   .toPromise()
   .then(res=> this.list = res as Product[]);
 }
 
}
