import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: []
})
export class UserPageComponent implements OnInit {

  userDetails: UserDetail; 
  isAdmin = false;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    //this.userDetails = localStorage.getItem('currentUser');
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res as UserDetail; 
      });
  } 
}
