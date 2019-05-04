//import {Component, OnInit, ViewChild} from '@angular/core';
//import {Router} from '@angular/router';
//import {DataTableDirective} from 'angular-datatables';

//import {FridgeService} from '../../services/fridge.service'
//import {HttpAuthService} from '../../services/auth.service'
//import {ServerResponse} from "../../models/ServerResponse";
//import {Subject} from 'rxjs/Subject';

 
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';

import { FridgeService } from '../../services/fridge.service';
import { HttpAuthService } from '../../services/auth.service';
import { ServerResponse } from "../../models/ServerResponse";
import { Subject } from 'rxjs/Subject'; 



@Component({
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})

  //------------------

export class AdminPageComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  public fridges = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  public errors: Array<string> = new Array<string>();

  constructor(private httpAuthService: HttpAuthService,
    private fridgeService: FridgeService,
    private router: Router) {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      paging: true
    };
    this.dtTrigger.next();
  }

  load = false;

  async ngOnInit() {
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

  async updateFridge(id) {
    let response: ServerResponse<any> = await this.fridgeService.updateFridge(id);
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

}

  //------------------

//export class AdminPageComponent implements OnInit {

//  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

//  public fridges = [];
//  dtOptions: DataTables.Settings = {};
//  dtTrigger: Subject<any> = new Subject();

//  constructor(private httpAuthService: HttpAuthService,
//              private fridgeService: FridgeService,
//              private router: Router) {
//    this.dtOptions = {
//      pagingType: 'full_numbers',
//      pageLength: 5,
//      paging: true
//    };
//    this.dtTrigger.next();
//  }

//  load = false;

//  async ngOnInit() {
//    this.fridges = await this.fridgeService.getAllFridges();
//    this.dtTrigger.next();
//  }

//  async deleteFridge(id) {
//    let response: ServerResponse<any> = await this.fridgeService.deleteFridge(id);
//    if (response.statusCode == 200) {
//      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
//        dtInstance.destroy();
//        this.fridges = await this.fridgeService.getAllFridges();
//        this.dtTrigger.next();
//      });
//    } else {
//      console.log(response);
//    }
//  }

//  async updateFridge(tourId) {
//    let response: ServerResponse<any> = await this.fridgeService.updateFridge(tourId);
//    if (response.statusCode == 200) {
//      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
//        dtInstance.destroy();
//        this.fridges = await this.fridgeService.getAllFridges();
//        this.dtTrigger.next();
//      });

//    } else {
//      console.log(response);
//    }
//  }

//}
