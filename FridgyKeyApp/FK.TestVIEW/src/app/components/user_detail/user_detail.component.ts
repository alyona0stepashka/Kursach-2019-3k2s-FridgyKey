import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';
import { HttpAuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { CurrentUser } from "../../models/CurrentUser";
import 'rxjs/add/operator/map';
import { ServerResponse } from '../../models/ServerResponse'; 

@Component({
  selector:'user_detail',
  templateUrl: './user_detail.component.html',
  styleUrls: ['./user_detail.component.css'],
  providers: [HttpAuthService]  //???
})
export class UserDetailComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  public id: string;
  public user: any;
  public loaded: boolean = false;
  public errors: Array<string> = new Array<string>();

  constructor(private activeRoute: ActivatedRoute,
    private httpAuthService: HttpAuthService,
    private userService: UserService) {
    this.id = String(activeRoute.snapshot.params["id"]);
  }

  async ngOnInit() {
    if (this.id) {
      this.user = await this.userService.getUserById(this.id);  //???
      this.loaded = true;
    } 
  }
}
