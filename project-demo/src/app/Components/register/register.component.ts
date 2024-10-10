import { Component } from '@angular/core';
import { USERModel } from './USERModel';
import { UsersService } from '../../Services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  userModel = new USERModel('', '', '', '', false);

  constructor(private userService: UsersService, private router: Router){}


  onRegister(){
    this.userService.addUser(this.userModel).subscribe({
      next: (data) => {
        console.log(data)
        this.router.navigate(['/login'])
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Register Error",
          text: "Something went wrong!",
          footer: '<a href="#">Why do I have this issue?</a>'
        });
      }
    })
  }
}
