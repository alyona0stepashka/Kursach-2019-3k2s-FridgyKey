 
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RolesGuard implements CanActivate {
  private static baseUri = ['start-page', 'auth/login', 'auth', ''];

  constructor (private router: Router, private location: Location) {}

  canActivate (route: ActivatedRouteSnapshot): Observable<boolean> | boolean {

    if (localStorage.getItem('role') != route.data.expectedRole ) {
      switch (localStorage.getItem('role')) {
        case 'SuperAdmin':
          this.router.navigate(['/main/adminpanel']);
          break;
        case 'SuperManager':
          this.router.navigate(['/main/supermanagerpanel']);
          break;
        case 'Manager':
          this.router.navigate(['/main/managerpanel']);
          break;
        default:
          alert('You don\'t have permission to login!');
          localStorage.clear();
          this.router.navigate(['/start-page']);
          break;
      }
      return false;
    }
    return true;
  }
}