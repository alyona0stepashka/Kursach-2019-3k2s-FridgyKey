import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Operator, Observable } from 'rxjs';

// declare module 'rxjs/Subject' {
//   interface Subject<T> {
//     lift<R>(operator: Operator<T, R>): Observable<R>;
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';


  
  constructor(private router: Router){}
  
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/begin/login']);
  }

}
