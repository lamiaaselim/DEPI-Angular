import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  // if user authenticated or not => check token

  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    const expiration = localStorage.getItem('tokenExpiration');

    if (token && expiration) {
      const expirationDate = new Date(expiration);
      return expirationDate > new Date();
    }
    return false;
  }



  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiration');
    this.router.navigate(['/login']);
  }
}
