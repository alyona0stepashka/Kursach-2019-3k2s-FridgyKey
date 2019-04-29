/**
 * Created by annae on 20.04.2018.
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { FridgeService } from '../../services/fridge.service';
import { ServerResponse } from "../../models/ServerResponse";
import { UserFridgeAdd } from "../../models/Fridge";
import { HttpAuthService } from '../../services/auth.service';
import { CurrentUser } from "../../models/CurrentUser"; 
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Component({
  selector:'my_fridges_home',
  templateUrl: './my_fridges_home.component.html',
  styleUrls: ['./my_fridges_home.component.css'],
  providers: [FridgeService]
})

export class MyFridgesHomeComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  userfridge: UserFridgeAdd = new UserFridgeAdd();
  public fridges = [];

  public currentUser: CurrentUser = new CurrentUser();
  //public currentUser: any = {
  //  id: "",
  //  isAuntificated: false,
  //  email: "",
  //  username: "",
  //  fIO: "",
  //  roles: []
  //};

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private httpAuthService: HttpAuthService,
    private fridgeService: FridgeService,
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
    this.fridges = await this.fridgeService.getAllFridges();
    this.dtTrigger.next();
  }

  async deleteFridge(id) {
    let response: ServerResponse<any> = await this.fridgeService.deleteFridge(id);
    if (response.statusCode == 200) {
      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.fridges = await this.fridgeService.getAllFridges();
        this.dtTrigger.next();
      });
    } else {
      console.log(response);
    }
  }

  async fridgeView(id) {
    this.router.navigate([`fridgeView/${id}`]);
  }

  async updateFridge(id) {
    this.router.navigate([`updateFridge/${id}`]);
  }

  async navigateToAdd() {
    this.router.navigate([`createFridge`]);
  }
}
