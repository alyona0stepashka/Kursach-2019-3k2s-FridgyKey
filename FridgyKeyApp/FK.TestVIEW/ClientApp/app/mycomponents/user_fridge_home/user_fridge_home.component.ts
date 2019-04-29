import { Component, OnInit } from '@angular/core';
import { HttpAuthService } from '../../services/auth.service'
import { FridgeService } from '../../services/fridge.service'
import { ServerResponse } from "../../models/ServerResponse";
import { UserFridgeAdd, Fridge } from "../../models/Fridge";
import { FridgeView } from "../../models/Fridge";
import { CurrentUser } from "../../models/CurrentUser"; 

@Component({
  selector: 'user_fridge_home',
  templateUrl: './user_fridge_home.component.html',
  providers: [FridgeService]
})
export class UserFridgeHomeComponent implements OnInit {

  public userfridge: UserFridgeAdd = new UserFridgeAdd();
  public currentUser: CurrentUser = new CurrentUser();
  public fridge: Fridge = new Fridge();
  public fridges = [];

  tableMode: boolean = true;          // табличный режим

  constructor(private httpAuthService: HttpAuthService,
    private fridgeService: FridgeService) { }

  async ngOnInit() {
    this.currentUser = await this.httpAuthService.GetCurrentUser();
    this.loadFridges();    // загрузка данных при старте компонента  
  }
  // получаем данные через сервис
  async loadFridges() {
    this.fridges = await this.fridgeService.getAllFridgesByUser(); 
  }

  saveFridge() {
    if (this.fridge.id == null) {
      this.fridgeService.addFridge(this.fridge);
      this.saveUserFridge();
    }
    else {
      this.fridgeService.updateFridge(this.fridge);
    }
    this.loadFridges();  
  }

  // сохранение данных
  saveUserFridge() {  
    this.fridgeService.addUserFridge(this.userfridge);
    this.loadFridges();
  }
  editFridge(p: FridgeView) {
    this.fridge.id = p.fridgeid;
    this.fridge.name = p.name;
  }
  cancel() {
    this.userfridge = new UserFridgeAdd();
    this.tableMode = true;
  }
  deleteUserFridge(p: FridgeView) {
    this.fridgeService.deleteUserFridge(p.fridgeid);
    this.loadFridges(); 
  }
  addFridge() {
    this.cancel();
    this.tableMode = false;
  }
}
