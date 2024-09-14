import { Component } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/IProduct';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})

export class BindingComponent {
  product : IProduct= {
    id: 1,
    name: 'Laptop',
    description: 'A high-performance laptop',
    price: 1200,
    inStock: true
  };
  message: string = 'Welcome From Angular';
  studentID: number = 20;
  studentName: string = 'Hesham';
  result: boolean = false;
  resultStatus: string = 'Waiting for results...';
  imagePath: string = './../../../assets/images/hero_section.png';
  isActive: boolean = false;
  textColor: string = 'red';
  username : string = ''
  constructor() {
    setTimeout(() => {
      this.result = true;
    }, 5000);
  }
  getSudentStatus() {
    return this.resultStatus;
  }

  handelClick() {
    this.message = 'Welcome From Veiw => Event Binding';
  }
}
