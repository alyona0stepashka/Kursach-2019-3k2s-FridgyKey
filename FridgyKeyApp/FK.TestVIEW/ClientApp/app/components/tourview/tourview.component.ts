/**
 * Created by annae on 20.04.2018.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpAuthService} from '../../services/auth.service';
import {TourService} from '../../services/tour.service';
import {OrderService} from '../../services/order.service';
import {ServerResponse} from "../../models/ServerResponse";
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Component({
  templateUrl: './tourview.component.html',
  styleUrls: ['./tourview.component.css']
})

export class TourViewComponent implements OnInit {

  public photoLink: any;
 public tour = {
   id: "",
    cityFrom: {
      id: "",
      city: ""
    },
    countOfTours: "",
    dateFrom: "",
    dateTo: "",
    foodType: {
      id: "",
      type: ""
    },
    hotel: {
      id: "",
      name: "",
      stars: "",
      city: {
        id: "",
        name: "",
        country: {
          id: "",
          name: ""
        }
      },
      placementType: {
        id: "",
        type: ""
      }
    },
    price: "",
    tourType: {
      id: "",
      type: ""
    },
    transportType: {
      id: "",
      type: ""
    }
  };
  public auth: boolean;
  public tourId: number;

  constructor(private httpAuthService: HttpAuthService, private tourService: TourService,
              private router: Router, private orderService: OrderService,
              private activateRoute: ActivatedRoute) {
  }

  load = false;

  async ngOnInit() {
    this.auth = (await this.httpAuthService.GetCurrentUser()).isAuntificated;
    await this.activateRoute.params.subscribe(params => this.tourId = params['tourId']);
    if (!this.tourId) {
      this.router.navigate(['']);
    }
    this.load = true;
    let response: ServerResponse<any> = await this.tourService.getTourById(this.tourId);
    if (response.statusCode == 200) {
      this.tour = response.data;
      this.photoLink = `https://yandex.by/images/search?text=отель%20${this.tour.hotel.name}%20${this.tour.hotel.city.name}%20фото`;
    } else {
      this.router.navigate(['']);
    }
    this.load = false;
  }

  async makeOrder(tourId: number) {

    let response: ServerResponse<any> = await this.orderService.addOrder(tourId);
    if (response.statusCode == 200) {
      this.router.navigate(['user']);
    } else {
      console.log(response);
    }
  }
}



