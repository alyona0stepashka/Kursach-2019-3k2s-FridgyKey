import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { FridgeService } from 'src/app/services/fridge.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-fridge-detail',
  templateUrl: './user-fridge-detail.component.html',
  styles: []
})
export class UserFridgeDetailComponent implements OnInit {

  public userDetails: UserDetail; 
  public _service: FridgeService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: FridgeService,
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
    this._service.postFridgeDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.success('Submitted (post) successfully', 'Fridge Detail Register');
        this._service.refreshList();
      },
      err=>{
        console.log(err);
      }
    )
  }

  updateRecord(form: NgForm){
    this._service.putFridgeDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.info('Submitted (put) successfully', 'Fridge Detail Register');
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
