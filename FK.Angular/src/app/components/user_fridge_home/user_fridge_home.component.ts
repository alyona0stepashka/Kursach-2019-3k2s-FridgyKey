import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';
import { HttpAuthService } from '../../services/auth.service'
import { FridgeService } from '../../services/fridge.service'
import { ServerResponse } from "../../models/ServerResponse";
import { UserFridgeAdd, Fridge } from "../../models/Fridge";
import { FridgeView } from "../../models/Fridge";
import { CurrentUser } from "../../models/CurrentUser";
import 'rxjs/add/operator/map';

@Component({
  selector: 'user_fridge_home',
  templateUrl: './user_fridge_home.component.html',
  styleUrls: ['./user_fridge_home.component.css'],
  providers: [FridgeService, HttpAuthService]
})
export class UserFridgeHomeComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;

  public userfridge: UserFridgeAdd = new UserFridgeAdd();
  public currentUser: CurrentUser = new CurrentUser();
  public errors: Array<string> = new Array<string>();
  public fridge: Fridge = new Fridge();
  public fridges = [];

  public tableMode: boolean = true;          // табличный режим
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
    this.loadFridges();    // загрузка данных при старте компонента  
    this.dtTrigger.next();
  }
  // получаем данные через сервис
  async loadFridges() {
    this.load = false;
    this.fridges = await this.fridgeService.getAllFridgesByUser();
    this.load = true;
  }

  async saveFridge() {
    let response: ServerResponse<any>;
    if (this.fridge.id == null) {
      response = await this.fridgeService.addFridge(this.fridge);
      this.saveUserFridge();
    }
    else {
      response = await this.fridgeService.updateFridge(this.fridge);
    }
    if (response.statusCode == 200) {
      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
        dtInstance.destroy(); 
    this.loadFridges();  
        this.dtTrigger.next();
      });
    } else {
      console.log(response);
    }
  }

  // сохранение данных
  async saveUserFridge() {
    let response: ServerResponse<any>; 
    response = await this.fridgeService.addUserFridge(this.userfridge); if (response.statusCode == 200) {
      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
        dtInstance.destroy(); 
    this.loadFridges();
        this.dtTrigger.next();
      });
    } else {
      console.log(response);
    }
  }
  editFridge(p: FridgeView) {
    this.fridge.id = p.fridgeid;
    this.fridge.name = p.name;
  }
  cancel() {
    this.userfridge = new UserFridgeAdd();
    this.tableMode = true;
  }
  async deleteUserFridge(p: FridgeView) {
    let response: ServerResponse<any>;
    response = await this.fridgeService.deleteUserFridge(p.fridgeid); if (response.statusCode == 200) {
      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
        dtInstance.destroy();
    this.loadFridges();  
        this.dtTrigger.next();
      });
    } else {
      console.log(response);
    }
  }
  addFridge() {
    this.cancel();
    this.tableMode = false;
  }
  async openFridge(id) {
    this.router.navigate([`myFridges/${id}`]);
  }
}
