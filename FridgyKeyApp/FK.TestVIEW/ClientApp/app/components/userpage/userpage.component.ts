import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataTableDirective} from 'angular-datatables';
import {OrderService} from '../../services/order.service'
import {UserService} from '../../services/user.service'
import {HttpAuthService} from '../../services/auth.service'
import {ServerResponse} from "../../models/ServerResponse";
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Component({
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})

export class UserPageComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;
  public order ={
    id:"",
    date: "",
    cityFrom:{
      city:""
    },
    tour:{
      dateFrom:"",
      dateTo:""
    },
    price:"",
    orderStatus:{
      status:""
    }
  };

  public orders = [];


  public currentUser: any = {
    id: "",
    isAuntificated: false,
    email: '',
    login: '',
    fio: '',
    birthday: new Date(),
    roles: []
  };

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private httpAuthService: HttpAuthService,
              private orderService: OrderService,
              private userService: UserService,
              private router: Router,
              private activateRoute: ActivatedRoute) {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      paging: true
    };

    this.dtTrigger.next();
  }

  load = false;

  async ngOnInit() {

    this.currentUser = await this.httpAuthService.GetCurrentUser();
    this.orders = await this.orderService.getOrdersByUser();
    console.log(this.orders);
    this.dtTrigger.next();
  }

  async updateUser(event) {
    if (event.isChanged) {
      let userUpdateInfo = {
        fio: this.currentUser.fio
      };
      let response: ServerResponse<any> = await this.userService.updateUser(userUpdateInfo);
      if (response.statusCode == 200) {
        this.currentUser = await this.httpAuthService.GetCurrentUser();
      } else {
        console.log(response);
      }
    }
  }
}
