import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    this.registerForm = this.fb.group({
      userName: ['', [Validators.required]],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
    });
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
