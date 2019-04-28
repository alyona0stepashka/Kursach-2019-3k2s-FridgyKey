import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TourService} from '../../services/tour.service'
import {ServerResponse} from "../../models/ServerResponse";
import {IMyDrpOptions} from 'mydaterangepicker';

@Component({
  templateUrl: './createtour.component.html',
  styleUrls: ['./createtour.component.css']
})

export class CreateTourComponent implements OnInit {
  myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd-mm-yyyy'
  };

  public tourInformation: any = {
    tourType: new Array(),
    foodType: new Array(),
    transportType: new Array(),
    cityFrom: new Array(),
    hotel: new Array()
  };
  public errors: Array<string> = new Array<string>();
  public country = {
    id: 0,
    name: ""
  };
  public city = {
    id: 0,
    name: "",
    country: {
      id: "",
      name: ""
    }
  };

  public hotel = {
    id: 0,
    name: "",
    city: {
      id: "",
      name: "",
      country: {
        id: "",
        name: ""
      }
    },
    stars:"",
    placementType: {
      id: "",
      type: ""
    }
  };

  public dateModel: any = {
    beginDate: {year: "", month: "", day: ""},
    endDate: {year: "", month: "", day: ""}
  };

  public tour = {
    cityFrom: {
      id: "",
      city: ""
    },
    countOfTours: "",
    dateFrom: new Date(),
    dateTo: new Date(),
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

  constructor(private tourService: TourService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    this.tourInformation = await this.tourService.getAllDataForTour();
    console.log(this.tourInformation);
    let date = new Date();
    this.dateModel.beginDate.year = date.getFullYear();
    this.dateModel.beginDate.month = date.getMonth() + 1;
    this.dateModel.beginDate.day = date.getDate();
    this.dateModel.endDate.year = date.getFullYear();
    this.dateModel.endDate.month = date.getMonth() + 1;
    this.dateModel.endDate.day = date.getDate();
  }

  load = false;

  async create() {
    this.load = true;
    this.tour.dateFrom = new Date(this.dateModel.beginDate.year, this.dateModel.beginDate.month - 1, this.dateModel.beginDate.day + 1);
    this.tour.dateTo = new Date(this.dateModel.endDate.year, this.dateModel.endDate.month - 1, this.dateModel.endDate.day + 1);

    let response: ServerResponse<any> = await this.tourService.addTour(this.tour);
    if (response.statusCode == 200) {
      this.load = false;
      this.router.navigate([`tourView/${response.data.id}`]);
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

  async createCountry() {
    let response: ServerResponse<any> = await this.tourService.addCountry(this.country);
    if (response.statusCode == 200) {
      this.router.navigate([``]);
    } else if (response.statusCode == 400) {
      for (let key in response.data) {
        response.data[key].forEach((item) => {
          this.errors.push(`${key}: ${item}`);
        })
      }
    } else {
      console.log(response);
    }
  }

  async createCity() {
    let response: ServerResponse<any> = await this.tourService.addCity(this.city);
    if (response.statusCode == 200) {
      this.router.navigate([``]);
    } else if (response.statusCode == 400) {
      for (let key in response.data) {
        response.data[key].forEach((item) => {
          this.errors.push(`${key}: ${item}`);
        })
      }
    } else {
      console.log(response);
    }
  }

  async createHotel() {
    let response: ServerResponse<any> = await this.tourService.addHotel(this.hotel);
    if (response.statusCode == 200) {
      this.router.navigate([``]);
    } else if (response.statusCode == 400) {
      for (let key in response.data) {
        response.data[key].forEach((item) => {
          this.errors.push(`${key}: ${item}`);
        })
      }
    } else {
      console.log(response);
    }
  }
}
