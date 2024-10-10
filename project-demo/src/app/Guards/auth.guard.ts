import { inject, Injectable } from '@angular/core';
import {CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class AuthGaurd implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate():boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else{
      this.router.navigate(['/login'])
      return false;
    }
  }

  canActivateChild():boolean  | Observable<boolean> | Promise<boolean> {{
    return this.canActivate()
  }
}
}
export const authParentGuard: CanActivateFn = (route, state) => {
  return inject(AuthGaurd).canActivate();
};
export const authChildGuard: CanActivateFn = (route, state) => {
  return inject(AuthGaurd).canActivateChild();
};
