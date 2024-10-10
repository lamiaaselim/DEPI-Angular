import { inject, Injectable } from '@angular/core';
import { CanActivate, CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Allow route if authenticated
    } else {
      this.router.navigate(['/login']); // Redirect to login if not authenticated
      return false;
    }
  }

  canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate();
  }
}

export const authParentGuard: CanActivateFn = (route, state) => {
  return inject(AuthGuard).canActivate();
};


export const authChildrenGuard: CanActivateChildFn = (route, state) => {
  return inject(AuthGuard).canActivateChild();
};
