import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';

  constructor(private router: Router){}
  
  onLogout() {
    //localStorage.removeItem('token');
    this.router.navigate(['/begin/login']);
  }

}
