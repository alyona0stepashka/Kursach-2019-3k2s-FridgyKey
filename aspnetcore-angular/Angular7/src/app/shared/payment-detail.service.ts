import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
private _http: HttpClient;
 public formData: PaymentDetail;
 readonly rootURL = 'http://localhost:8491/api/';
 
  constructor(private http:HttpClient) { 
    this._http=http;
  }

postPaymentDetail(formData:PaymentDetail){
  return this._http.post(this.rootURL+'payment', formData);
}



}
