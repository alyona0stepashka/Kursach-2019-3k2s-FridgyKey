import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { FridgeService } from 'src/app/services/fridge.service';
import { UserfridgeService } from 'src/app/services/userfridge.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Fridge } from 'src/app/models/Fridge';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styles: []
})
export class AdminUserListComponent implements OnInit {

  public isLoaded: boolean = false;
  public userDetails: UserDetail;  
  private _toastrService: ToastrService;

  constructor(private router: Router, 
    toastr: ToastrService,
    public userService: UserService) { 
    this._toastrService = toastr;
   }  

  ngOnInit() { 
    this.userService.refreshList();
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

  // onDelete(Id){
  //   if (confirm('Are you sure?')) {
  //     this.isLoaded=false;
  //     this.userService.deleteUserDetail(Id).subscribe(
  //     res=>{ 
  //       this._toastrService.warning('Submitted (delete) successfully', 'Fridge Detail Register');
  //       this.userService.refreshList();
  //     },
  //     err=>{
  //       console.log(err);
  //     }
  //   )}
  //   this.isLoaded=true;
  // }
   
}
