import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent {
  name: string = '';
  textColor: string = 'blue';
  isLogin: boolean = false;

  items = ["lap", "mobile", "PC"]

  isSepial: boolean = false;
  isHeghlighted: boolean = true;

  toggleClass() {
    this.isSepial = !this.isSepial;
  }

  Login() {
    this.isLogin = !this.isLogin;
  }
}
