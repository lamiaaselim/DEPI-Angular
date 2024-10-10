import { Component } from '@angular/core';
import { AuthService } from './../../Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  constructor(public authService: AuthService) {}

  onLogOut() {
    this.authService.logout();
  }
}
