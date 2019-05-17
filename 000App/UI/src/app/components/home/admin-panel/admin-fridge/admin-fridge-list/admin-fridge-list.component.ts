import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { FridgeService } from 'src/app/services/fridge.service';
import { UserfridgeService } from 'src/app/services/userfridge.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Fridge } from 'src/app/models/Fridge';

@Component({
  selector: 'app-admin-fridge-list',
  templateUrl: './admin-fridge-list.component.html',
  styles: []
})
export class AdminFridgeListComponent implements OnInit {

  public isLoaded: boolean = false;
  public userDetails: UserDetail; 
  public _service: FridgeService;
  public _serviceUserFridge: UserfridgeService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: FridgeService,
    service2: UserfridgeService,
    toastr: ToastrService,
    private userService: UserService) {
    this._service = service;
    this._serviceUserFridge = service2;
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

  onDelete(Id){
    if (confirm('Are you sure?')) {
      this.isLoaded=false;
      this._serviceUserFridge.deleteUserFridgeDetail(Id).subscribe(
      res=>{ 
        this._toastrService.warning('Submitted (delete) successfully', 'Fridge Detail Register');
        this._service.refreshListGeneral();
      },
      err=>{
        console.log(err);
      }
    )}
    this.isLoaded=true;
  }
  
  onOpen(Id){
    localStorage.setItem("fridgeId",Id);
    this.router.navigate(['/home/open']);
  }
}
