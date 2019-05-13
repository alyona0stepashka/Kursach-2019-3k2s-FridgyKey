import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetail } from './shared/user-detail.model';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Angular7';
  //isAdmin = false;
  //isAuthenticate = false;
  //userDetails: UserDetail;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    // this.service.getUserProfile().subscribe(
    //   res => {
    //     this.userDetails = res as UserDetail;
    //   },
    //   err => {
    //     console.log(err);
    //   },
    // );
    // if (UserDetail!=null) {
    //   // if (this.userDetails.Role=="admin") {
    //   //   this.isAdmin=true;
    //   // }
    //   this.isAuthenticate=true;
    // } 
  }
  
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }



}
