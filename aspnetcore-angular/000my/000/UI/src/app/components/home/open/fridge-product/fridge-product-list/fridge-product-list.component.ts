import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { FridgeproductService } from 'src/app/services/fridgeproduct.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FridgeProduct } from 'src/app/models/FridgeProduct';

@Component({
  selector: 'app-fridge-product-list',
  templateUrl: './fridge-product-list.component.html',
  styles: []
})
export class FridgeProductListComponent implements OnInit {

  public today: Date;
  public fridgeId: number;
  public isLoaded: boolean = false;
  public userDetails: UserDetail; 
  public _service: FridgeproductService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: FridgeproductService,
    toastr: ToastrService,
    private userService: UserService) {
    this._service = service;
    this._toastrService = toastr;
   }  

  ngOnInit() { 
    //this.today = ??? 
    this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
    this._service.refreshList(this.fridgeId);
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

  populateForm(pd:FridgeProduct){
    this._service.formData = Object.assign({},pd);
  }

  onDelete(PMId){
    if (confirm('Are you sure?')) {
      this.isLoaded=false;
      this._service.deleteFridgeProductDetail(PMId).subscribe(
      res=>{ 
        this._toastrService.warning('Submitted (delete) successfully', 'FridgeProduct Detail Register');
        this._service.refreshList(this.fridgeId);
      },
      err=>{
        console.log(err);
      }
    )}
    this.isLoaded=true;
  }
}
