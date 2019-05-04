import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

import { HttpAuthService } from "../services/auth.service"

@Injectable()
export class CurrentUserOrAdminGuard implements CanActivate {
  constructor(private httpAuthService: HttpAuthService, private router: Router) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let user = await this.httpAuthService.GetCurrentUser();
    if (!user.isAuntificated) {
      this.router.navigate(['']);
    }
    else {
      return true;
    }
    return false;
  }
}
