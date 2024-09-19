import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { EnrollService } from './../../services/enroll.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  address: string[] = ['Alex', 'Cairo', 'Qena', 'Suaz'];
  userModel = new User('', '', '', false);

  constructor(private enrollService: EnrollService) {}

  onSubmit() {
    // console.log(this.userModel)
    this.enrollService.enRoll(this.userModel).subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
    });
  }
  ngOnInit() {}
}
