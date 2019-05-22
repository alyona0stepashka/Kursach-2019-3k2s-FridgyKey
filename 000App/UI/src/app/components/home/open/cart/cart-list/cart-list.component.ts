import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { CartService } from 'src/app/services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Cart } from 'src/app/models/Cart';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styles: []
})
export class CartListComponent implements OnInit {

  public today: Date;
  public fridgeId: number;
  public isLoaded: boolean = false;
  public userDetails: UserDetail; 
  public _service: CartService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: CartService,
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

  populateForm(pd:Cart){
    this._service.formData = Object.assign({},pd);
  }

  onDelete(PMId){
    if (confirm('Are you sure?')) {
      this.isLoaded=false;
      this._service.deleteCartDetail(PMId).subscribe(
      res=>{ 
        this._toastrService.warning('Submitted (delete) successfully', 'Cart Detail Register');
        this._service.refreshList(this.fridgeId);
      },
      err=>{
        console.log(err);
      }
    )}
    this.isLoaded=true;
  }
}
