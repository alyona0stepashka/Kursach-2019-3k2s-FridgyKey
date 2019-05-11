import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service'; 
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {
  
  public _service: PaymentDetailService;
  private _toastrService: ToastrService;

  constructor(service: PaymentDetailService,
    toastr: ToastrService) {
    this._service = service;
    this._toastrService = toastr;
   }  

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    this._service.postPaymentDetail(form.value).subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.success('Submitted successfully', 'Payment Detail Register');
      },
      err=>{
        console.log(err);
      }
    )
  } 

  resetForm(form?:NgForm){
    if (form!=null) form.resetForm();
    this._service.formData = {
      PMId:0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    };
    
  }

}
