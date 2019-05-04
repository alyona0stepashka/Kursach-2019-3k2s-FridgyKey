import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { HttpAuthService } from "../services/auth.service"

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private httpAuthService: HttpAuthService, private router: Router) { }
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if ((await this.httpAuthService.GetCurrentUser()).roles.indexOf('Admin') == -1) {
      this.router.navigate(['']);
    } else {
      return true;
    }
    return false;
  }
}
