import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})

export class PipesComponent {
  uperCase = 'uperCase pipes example';
  lowerCase = ' LOWERCASE PIPE EXAMPLE';
  grades = 350.569538;
  today = new Date();
  currency  = 1000;
  customPipe = 5
}
