/**
 * Created by annae on 20.04.2018.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataTableDirective} from 'angular-datatables';
import {HttpAuthService} from '../../services/auth.service'
import {TourService} from '../../services/tour.service'
import {ServerResponse} from "../../models/ServerResponse";
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild(DataTableDirective) dtElement: DataTableDirective;


  public tours = [];

  public currentUser: any = {
    id: "",
    isAuntificated: false,
    email: '',
    login: '',
    fIO: '',
    birthday: new Date(),
    roles: []
  };

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  constructor(private httpAuthService: HttpAuthService, private tourService: TourService,
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
    this.tours = await this.tourService.getAllTours();
    this.dtTrigger.next();
  }

  async deleteTour(id) {
    let response: ServerResponse<any> = await this.tourService.deleteTour(id);
    if (response.statusCode == 200) {
      this.dtElement.dtInstance.then(async (dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        this.tours = await this.tourService.getAllTours();
        this.dtTrigger.next();
      });
    } else {
      console.log(response);
    }
  }

  async tourView(id) {
this.router.navigate([`tourView/${id}`]);
}

  async updateTour(id) {
    this.router.navigate([`updateTour/${id}`]);
  }

  async navigateToAdd() {
    this.router.navigate([`createTour`]);
  }
}
