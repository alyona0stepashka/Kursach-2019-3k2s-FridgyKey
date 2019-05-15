import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { FridgeService } from 'src/app/services/fridge.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';
import { UserfridgeService } from 'src/app/services/userfridge.service';

@Component({
  selector: 'app-user-fridge-add',
  templateUrl: './user-fridge-add.component.html',
  styles: []
})
export class UserFridgeAddComponent implements OnInit {

  public userDetails: UserDetail; 
  public _service: UserfridgeService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: UserfridgeService,
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
    this.insertRecord(form);  
  } 

  insertRecord(form: NgForm){
    this._service.postUserFridgeDetail().subscribe(
      res=>{
        this.resetForm(form);
        this._toastrService.success('Submitted (post) successfully', 'Fridge Detail Register'); 
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