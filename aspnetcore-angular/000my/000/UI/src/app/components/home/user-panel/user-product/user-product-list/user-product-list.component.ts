import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { UserDetail } from 'src/app/models/UserDetail';
import { UserService } from 'src/app/services/user.service';
// import { DataTableDirective } from 'angular-datatables';
// import { Subject } from 'rxjs/Subject';

//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-user-product-list',
  templateUrl: './user-product-list.component.html',
  styles: []
})
export class UserProductListComponent implements OnInit {

  //@ViewChild(DataTableDirective) dtElement: DataTableDirective;
  //dtOptions: DataTables.Settings = {};
  //dtTrigger: Subject<any> = new Subject();


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

   // this.dtOptions = {
   //   pagingType: 'full_numbers',
   //   pageLength: 5,
   //   paging: true
   // };

    //this.dtTrigger.next();

   }  

  ngOnInit() { 

   // this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
  //    dtInstance.destroy(); 
  //    this._service.refreshList();
  //    this.dtTrigger.next();
  //  });

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
   // this.dtTrigger.next();

  }

  onDelete(PMId){
    if (confirm('Are you sure?')) {
      this.isLoaded=false;
      this._service.deleteProductDetail(PMId).subscribe(
      res=>{ 
        this._toastrService.warning('Submitted (delete) successfully', 'Product Detail Register');
      //  this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
      //    dtInstance.destroy(); 
      //    this._service.refreshList();
      //    this.dtTrigger.next();
     //   });

      },
      err=>{
        console.log(err);
      }
    )}
    this.isLoaded=true;
   // this.dtTrigger.next(); 
  }
}
