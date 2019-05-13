import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7';

constructor(private router: Router) {}

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }


}
