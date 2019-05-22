import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { StickerService } from 'src/app/services/sticker.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { Sticker } from 'src/app/models/Sticker';

@Component({
  selector: 'app-sticker-list',
  templateUrl: './sticker-list.component.html',
  styles: []
})
export class StickerListComponent implements OnInit {

  public fridgeId: number;
  public isLoaded: boolean = false;
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
}
