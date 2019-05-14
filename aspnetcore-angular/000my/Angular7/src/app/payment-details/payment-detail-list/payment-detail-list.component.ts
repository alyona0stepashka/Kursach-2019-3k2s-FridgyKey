import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {
  
  public _service: PaymentDetailService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: PaymentDetailService,
    toastr: ToastrService) {
    this._service = service;
    this._toastrService = toastr;
   }  

  ngOnInit() {
    this._service.refreshList();
  }

  populateForm(pd:PaymentDetail){
    this._service.formData = Object.assign({},pd);
  }

  onDelete(PMId){
    if (confirm('Are you sure?')) {
    this._service.deletePaymentDetail(PMId).subscribe(
      res=>{ 
        this._toastrService.warning('Submitted (delete) successfully', 'Payment Detail Register');
        this._service.refreshList();
      },
      err=>{
        console.log(err);
      }
    )}
  }



}
