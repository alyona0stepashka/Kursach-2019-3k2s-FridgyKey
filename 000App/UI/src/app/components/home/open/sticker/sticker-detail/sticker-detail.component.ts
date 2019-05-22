import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { StickerService } from 'src/app/services/sticker.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sticker-detail',
  templateUrl: './sticker-detail.component.html',
  styles: []
})
export class StickerDetailComponent implements OnInit {

  public fridgeId: number;
  public userDetails: UserDetail; 
  public _service: StickerService;
  private _toastrService: ToastrService;

  constructor(private router: Router,
    service: StickerService,
    toastr: ToastrService,
    private userService: UserService) {
    this._service = service;
    this._toastrService = toastr;
   }  

  ngOnInit() {
    this.fridgeId = parseInt(localStorage.getItem("fridgeId")); 
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
  } 

  insertRecord(form: NgForm){
    this._service.postStickerDetail().subscribe(
      res=>{ 
        this._toastrService.success('Submitted (post) successfully', 'Sticker Detail Register');
        this._service.refreshList(this.fridgeId);
      },
      err=>{
        console.log(err);
      }
    )
  }  

}
