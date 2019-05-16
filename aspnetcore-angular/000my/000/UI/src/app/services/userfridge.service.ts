import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddFridge } from '../models/AddFridge';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserfridgeService {
  private _http: HttpClient;
  public formData: AddFridge; 
  readonly rootURL = 'http://localhost:8491/api'; 
  
  // formModel = this.fb.group({
  //   Name: ['', Validators.required], 
  //   Passwords: this.fb.group({
  //     Password: ['', [Validators.required, Validators.minLength(4)]]})
  // });
  
   constructor(private fb: FormBuilder,private http:HttpClient) { 
     this._http=http;
   }   
  
 postUserFridgeDetail(){
  return this._http.post(this.rootURL+'/userfridge', this.formData);
}  

deleteUserFridgeDetail(id){
  return this._http.delete(this.rootURL+'/userfridge?id='+ id);  //fridge_id
} 

resetForm(){
  this.formData = { 
    Name: '',
    PasswordHash: ''  
  };    
}
}
