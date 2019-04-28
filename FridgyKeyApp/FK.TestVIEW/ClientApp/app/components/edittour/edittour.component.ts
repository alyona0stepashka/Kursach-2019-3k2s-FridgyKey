import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TourService} from '../../services/tour.service'
import {ServerResponse} from "../../models/ServerResponse";
import {IMyDrpOptions} from 'mydaterangepicker';


@Component({
  templateUrl: './edittour.component.html',
  styleUrls: ['./edittour.component.css']
})

export class EditTourComponent implements OnInit{

  public tourInformation: any;
  public errors: Array<string> = new Array<string>();
  public tourId:any;
  public tour: any = {
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
      id: 0,
      type: ""
    },
    transportType: {
      id: "",
      type: ""
    }
  };

  public dateModel: any = {
    beginDate: {year: "", month: "", day: ""},
    endDate: {year: "", month: "", day: ""}
  };

  constructor(private tourService: TourService,
              private router: Router,
              private activateRoute: ActivatedRoute) {
  }

  async ngOnInit() {
    await this.activateRoute.params.subscribe(params => this.tourId = params['tourId']);
    let response: ServerResponse<any> = await this.tourService.getTourById(this.tourId);
    if (response.statusCode == 200) {
      this.tour = response.data;
      console.log(this.tour);
      this.dateModel.beginDate.year = (new Date(this.tour.dateFrom)).getFullYear();
      this.dateModel.beginDate.month = (new Date(this.tour.dateFrom)).getMonth() + 1;
      this.dateModel.beginDate.day = (new Date(this.tour.dateFrom)).getDate();
      this.dateModel.endDate.year = (new Date(this.tour.dateFrom)).getFullYear();
      this.dateModel.endDate.month = (new Date(this.tour.dateFrom)).getMonth() + 1;
      this.dateModel.endDate.day = (new Date(this.tour.dateFrom)).getDate();
    } else {
      this.router.navigate(['']);
    }
    this.tourInformation = await this.tourService.getAllDataForTour();
  }

  load = false;

  async update() {
    this.load = true;

    this.tour.dateFrom = new Date(this.dateModel.beginDate.year, this.dateModel.beginDate.month -1, this.dateModel.beginDate.day + 1);
    this.tour.dateTo = new Date(this.dateModel.endDate.year, this.dateModel.endDate.month -1, this.dateModel.endDate.day + 1);

    let response: ServerResponse<any> = await this.tourService.updateTour(this.tour);
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
}
