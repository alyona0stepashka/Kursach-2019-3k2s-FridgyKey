import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserDetail } from 'src/app/models/UserDetail';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-product-detail',
  templateUrl: './user-product-detail.component.html',
  styles: []
})
export class UserProductDetailComponent implements OnInit {
  
  public userDetails: UserDetail; 
  public _service: ProductService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: ProductService,
    toastr: ToastrService,
    private userService: UserService) {
    this._service = service;
    this._toastrService = toastr;
   }  

  ngOnInit() {
    this.resetForm();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res as UserDetail; 
      },
      err => {
        console.log(err);
      },
    );
  }

  onSubmit(form: NgForm) {
    if (this._service.formData.Id==0) this.insertRecord(form);  
    else this.updateRecord(form);
  } 

  insertRecord(form: NgForm){
    this._service.postProductDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.success('Submitted (post) successfully', 'Product Detail Register');
        this._service.refreshList();
      },
      err=>{
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this._service.putProductDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.info('Submitted (put) successfully', 'Product Detail Register');
        this._service.refreshList();
      },
      err=>{
        console.log(err);
      }
    )
  }

  resetForm(form?:NgForm){
    if (form!=null) form.resetForm();
    this._service.resetForm();
  }


}
