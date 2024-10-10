import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../Services/users.service';
import { IUser } from '../../Models/user.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router, private userService: UsersService) {}

  onLogin() {
    this.userService.getAllUsers().subscribe({
      next: (users: IUser[]) => {
        // find user by email and password
        const user = Object.values(users).find(
          (u: IUser) => u.email === this.email && u.password === this.password
        );

        if (user) {
          console.log('Login successful');

          // 1. geberate fake token
          const token = this.generateFakeToken()
          const expiration = this.generateFakeTokenExpiration(1)

          // 2.
          localStorage.setItem('authToken', token)
          localStorage.setItem('tokenExpiration', expiration)

          // 3. navigate to home
          this.router.navigate(['/home']);
        } else {
          this.loginError = true;
        }
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          title: 'Login Error',
          text: 'Something went wrong!',
          icon: 'error',
          confirmButtonText: 'OK',
        });
      },
    });
  }

  generateFakeToken(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }

  generateFakeTokenExpiration(hours: number): string {
    const expirationDate = new Date();
    expirationDate.setHours(expirationDate.getHours() + hours);
    return expirationDate.toISOString();
  }

  isTokenExpired(): boolean {
    const expiration = localStorage.getItem('tokenExpiration');

    if (expiration) {
      const expirationDate = new Date(expiration);
      return expirationDate < new Date();
    }
    return true;
  }
}
