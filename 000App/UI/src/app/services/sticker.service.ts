import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sticker } from '../models/Sticker';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StickerService {
  private _http: HttpClient;
  public formData: Sticker;
  readonly rootURL = 'http://localhost:8491/api';
  list: Sticker[];

  // formModel = this.fb.group({
  //   Text: ['', Validators.required]
  // });
  
   constructor(private fb: FormBuilder,private http:HttpClient) { 
     this._http=http;
   }
 
 postStickerDetail(){
   return this._http.post(this.rootURL+'/sticker', this.formData);
 }   
 
 refreshList(id){  //fridge_id
   this._http.get(this.rootURL+'/sticker/fridge?id='+id)
   .toPromise()
   .then(res=> this.list = res as Sticker[]);
}
}