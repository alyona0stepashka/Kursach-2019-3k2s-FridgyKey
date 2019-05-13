import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styles: []
})
export class ProductDetailComponent implements OnInit {

  public _service: ProductService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: ProductService,
    toastr: ToastrService) {
    this._service = service;
    this._toastrService = toastr;
   }  

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (this._service.formData.Id==0) this.insertRecord(form);  
    else this.updateRecord(form);
  } 

  insertRecord(form: NgForm){
    this._service.postProductDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.success('Submitted (post) successfully', 'Payment Detail Register');
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
        this._toastrService.info('Submitted (put) successfully', 'Payment Detail Register');
        this._service.refreshList();
      },
      err=>{
        console.log(err);
      }
    )
  }

  resetForm(form?:NgForm){
    if (form!=null) form.resetForm();
    this._service.formData = {
      Id:0,
      Name:"",
      Description:"",
      ImgURL:"",
      ProdInfo:{
        Id:0,
        Fat:0,
        Card:0,
        Protein:0,
        Kkal:0
      } ,
      User:{
        Id:"",
        FullName:"",
        Email:"",
        Role:"",
        Password:""
      }
    };    
  }


}
