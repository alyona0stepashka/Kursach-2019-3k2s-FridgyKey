import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
private _http: HttpClient;
 public formData: PaymentDetail;
 readonly rootURL = 'http://localhost:8491/api';
 list: PaymentDetail[];
 
  constructor(private http:HttpClient) { 
    this._http=http;
  }

postPaymentDetail(){
  return this._http.post(this.rootURL+'/payment', this.formData);
} 

putPaymentDetail(){
  return this._http.put(this.rootURL+'/payment/'+ this.formData.PMId, this.formData);
} 

deletePaymentDetail(id){
  return this._http.delete(this.rootURL+'/payment/'+ id);
} 

refreshList(){
  this._http.get(this.rootURL+'/payment')
  .toPromise()
  .then(res=> this.list = res as PaymentDetail[]);
}



}
