import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ForbiddenNameValidator } from '../../custom-validations/username.validator';
import { ConfirmPasswordValidator } from '../../custom-validations/confirmPassword.validator';

@Component({
  selector: 'app-reactiv-forms',
  templateUrl: './reactiv-forms.component.html',
  styleUrl: './reactiv-forms.component.scss',
})
export class ReactivFormsComponent {
  // registerForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl('')
  //   })
  // })
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        userName: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            ForbiddenNameValidator,
          ],
        ],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
        address: this.fb.group({
          city: [''],
          state: [''],
          postalCode: [''],
        }),
      },
      { validators: [ConfirmPasswordValidator] }
    );
  }

  get userName() {
    return this.registerForm.get('userName');
  }

  getData() {
    this.registerForm.patchValue({
      userName: 'Lamiaa',
      address: {
        city: 'Egypt',
        state: 'Giza',
        postalCode: '1234',
      },
    });
  }
}
