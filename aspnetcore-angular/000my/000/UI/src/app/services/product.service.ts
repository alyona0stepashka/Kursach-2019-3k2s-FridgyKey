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
   return this._http.put(this.rootURL+'/product?id='+ this.formData.Id, this.formData);
 } 
 
 deleteProductDetail(id){
   return this._http.delete(this.rootURL+'/product?id='+ id);
 } 
 
 refreshList(){
   this._http.get(this.rootURL+'/product/user')
   .toPromise()
   .then(res=> this.list = res as Product[]);
 }

 refreshListGeneral(){
   this._http.get(this.rootURL+'/product/general')
   .toPromise()
   .then(res=> this.list = res as Product[]);
 }
 
 resetForm(){
  this.formData = {
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
  };    
}
}
