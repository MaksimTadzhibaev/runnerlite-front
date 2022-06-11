import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Role } from "../model/role";
import { User } from "../model/user";

import { LOGIN_URL } from "../pages/login/login.component";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const currentUser: User  = this.authService.currentUserValue;
      if (currentUser) {               
        if (route.data.roles) {
          if ((route.data.roles as Array<Role>).some(nr => currentUser.authorities.some(cr => nr.valueOf() === cr.authority.valueOf()))) {
            return true;
          }
          this.router.navigate(['/']);
          return false;
        } else {
          return true;
        }
      }
      this.router.navigate([LOGIN_URL]);
      return false;
    }
  
    
  
  }