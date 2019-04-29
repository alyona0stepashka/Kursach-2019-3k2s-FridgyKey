import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { FridgeService } from '../../services/fridge.service'
import {ServerResponse} from "../../models/ServerResponse"; 

@Component({
  templateUrl: './createfridge.component.html',
  styleUrls: ['./createfridge.component.css']
})

export class CreateFridgeComponent implements OnInit {


  public fridge = {
    id: 0,
    userid: "",
    datecreate: new Date(),
    name: "",
    passwordhash: "",
    description: ""
  };

  public errors: Array<string> = new Array<string>();

 

  constructor(private fridgeService: FridgeService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
  }

  async ngOnInit() { 
  }

  load = false;

  async create() {
    this.load = true; 
    let response: ServerResponse<any> = await this.fridgeService.addFridge(this.fridge);
    if (response.statusCode == 200) {
      this.load = false;
      this.router.navigate([`fridgeView/${response.data.id}`]);
    } else if (response.statusCode == 400) {
      for (let key in response.data) {
        response.data[key].forEach((item) => {
          this.errors.push(`${key}: ${item}`);
        })
      }
    } else {
      console.log(response);
    }
    this.load = false;
  } 
}
