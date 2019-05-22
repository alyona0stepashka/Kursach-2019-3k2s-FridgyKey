import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styles: []
})
export class CartDetailComponent implements OnInit {

  public fridgeId: number;
  public userDetails: UserDetail; 
  public _service: CartService;
  private _toastrService: ToastrService;
  public products: Product[];

  constructor(private router: Router,
    service: CartService,
    toastr: ToastrService,
    private prodService: ProductService,
    private userService: UserService) {
    this._service = service;
    this._toastrService = toastr;
   }  

  ngOnInit() {
    this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
    this.resetForm();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res as UserDetail; 
      },
      err => {
        console.log(err);
      },
    );
    this.prodService.refreshList();
    this.products = this.prodService.list;
  }

  onSubmit(form: NgForm) {
    if (this._service.formData.Id==0) this.insertRecord(form);  
    else this.updateRecord(form);
  } 

  insertRecord(form: NgForm){
    this._service.postCartDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.success('Submitted (post) successfully', 'Product Detail Register');
        this._service.refreshList(this.fridgeId);
      },
      err=>{
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this._service.putCartDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.info('Submitted (put) successfully', 'Product Detail Register');
        this._service.refreshList(this.fridgeId);
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
