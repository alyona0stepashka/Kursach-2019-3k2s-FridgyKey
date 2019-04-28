import {Component, OnInit} from '@angular/core';
import {Router, NavigationEnd, ActivatedRoute} from '@angular/router';

import {HttpAuthService} from "../../services/auth.service";
import {CurrentUser} from '../../models/CurrentUser';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentUser: CurrentUser = new CurrentUser();

  constructor(private httpAuthService: HttpAuthService, private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  async ngOnInit(): Promise<void> {


    this.currentUser = await this.httpAuthService.GetCurrentUser();
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map(route => {
        while (route.firstChild) route = route.firstChild;
        return route;
      })
      .filter(route => route.outlet === 'primary')
      .mergeMap(route => route.data)
      .subscribe(async (event) => {
        this.currentUser = await this.httpAuthService.GetCurrentUser();
      });
  }

  public async logout() {
    await this.httpAuthService.logout();
    this.currentUser = await this.httpAuthService.GetCurrentUser();
    this.router.navigate(['login']);
  }

 }
