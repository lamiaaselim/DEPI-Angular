import { Component } from '@angular/core';
import { USERModel } from './UserModel';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userModel = new USERModel('', '', '', '', false);

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    // console.log(this.userModel)
    this.userService.addUser(this.userModel).subscribe({
      next: (data) => {
        this.router.navigate(['/login'])
      },
      error: (error) => {
        console.log(error)
        Swal.fire({
          title: 'Error!',
          text: 'Internal Server Error',
          icon: 'error',
          confirmButtonText: 'Try Again',
        });
      },
    });
  }
}
