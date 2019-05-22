import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styles: []
})
export class AdminProductListComponent implements OnInit {

  public isLoaded: boolean = false;
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
    this._service.refreshListGeneral();
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res as UserDetail; 
      },
      err => {
        console.log(err);
      },
    );
    this.isLoaded=true;
  }

  populateForm(pd:Product){
    this._service.formData = Object.assign({},pd);
  }

  onDelete(PMId){
    if (confirm('Are you sure?')) {
      this.isLoaded=false;
      this._service.deleteProductDetail(PMId).subscribe(
      res=>{ 
        this._toastrService.warning('Submitted (delete) successfully', 'Product General Detail Register');
        this._service.refreshListGeneral();
      },
      err=>{
        console.log(err);
      }
    )}
    this.isLoaded=true;
  }
}
