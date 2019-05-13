import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fridge } from '../models/Fridge';
import { AddFridge } from '../models/AddFridge';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {
  private _http: HttpClient;
  public formData: Fridge; 
  readonly rootURL = 'http://localhost:8491/api';
  list: Fridge[];
  
   constructor(private fb: FormBuilder,private http:HttpClient) { 
     this._http=http;
   }   
 
 postFridgeDetail(){
   return this._http.post(this.rootURL+'/fridge', this.formData);
 } 
 
 putFridgeDetail(){
   return this._http.put(this.rootURL+'/fridge/'+ this.formData.Id, this.formData);
 } 
 
 deleteFridgeDetail(id){
   return this._http.delete(this.rootURL+'/fridge/'+ id);
 } 
 
 refreshList(){
   this._http.get(this.rootURL+'/fridge')
   .toPromise()
   .then(res=> this.list = res as Fridge[]);
 }
 


 
}