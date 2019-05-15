import { Component, OnInit } from '@angular/core';
import { UserDetail } from 'src/app/models/UserDetail';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  isFridge = false;
  userDetails: UserDetail; 
  isAdmin = false;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {

    if (localStorage.getItem('fridgeId') != null)
    {
      this.isFridge = true;
    }
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res as UserDetail;
    if (this.userDetails.Role=="admin") {
      this.isAdmin=true;
    }
    else{
      this.isAdmin=false;
    }
      },
      err => {
        console.log(err);
      },
    );
  }

  onLogout() {
    localStorage.removeItem('token'); 
    localStorage.removeItem('role'); 
    //localStorage.removeItem('currentUser');
    this.router.navigate(['/begin/login']);
  }
}
