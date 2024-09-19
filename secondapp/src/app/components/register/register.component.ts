import { Component } from '@angular/core';
import { USERModel } from './UserModel';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userModel = new USERModel('', '', '', '', false);

  constructor(private userService: UserService) {}

  onSubmit() {
    // console.log(this.userModel)
    this.userService.addUser(this.userModel).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }
}
