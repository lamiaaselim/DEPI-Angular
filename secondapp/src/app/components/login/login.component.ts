import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ForbiddenNameValidator } from '../../custom-validations/username.validator';
import { ConfirmPasswordValidator } from '../../custom-validations/confirmPassword.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  // registerationForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl(''),
  //   address: new FormGroup({
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     postalCode: new FormControl(''),
  //   }),
  // });

  // registerationForm = this.fb.group({
  //   userName: this.fb.control(''),
  //   password: this.fb.control(''),
  //   confirmPassword: this.fb.control(''),
  //   address: this.fb.group({
  //     city: this.fb.control(''),
  //     state: this.fb.control(''),
  //     postalCode: this.fb.control(''),
  //   }),
  // });

  registerationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerationForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3), ForbiddenNameValidator]],
      email: [''],
      subscribe: [false],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      address: this.fb.group({
        city: [''],
        state: [''],
        postalCode: [''],
      }),
    }, {
      validators: [ConfirmPasswordValidator]
    });
  }

  get userName() {
    return this.registerationForm.get('userName');
  }
  get email() {
    return this.registerationForm.get('email');
  }

  setEmailValidator() {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>
    {
      if (checkedValue) {
        this.email?.setValidators(Validators.required)
      }else {
        this.email?.clearValidators();
      }
      this.email?.updateValueAndValidity()
    }
    );
  }

  ngOnInit() {}

  getData() {
    //   this.registerationForm.setValue({
    //     userName: 'Lamiaa',
    //     password: '1234',
    //     confirmPassword: '1234',
    //     address: {
    //       city: 'Egypt',
    //       state: 'United States',
    //       postalCode: '123',
    //     }
    //   });
    // }
    this.registerationForm.patchValue({
      userName: 'Lamiaa',
      address: {
        city: 'Egypt',
        state: 'United States',
        postalCode: '123',
      },
    });
  }
}
