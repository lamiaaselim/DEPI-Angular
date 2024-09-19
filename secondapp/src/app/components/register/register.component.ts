import { Component } from '@angular/core';
import { USERModel } from './UserModel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userModel = new USERModel(
    '',
    '',
    '',
    '',
    false
  );
}
