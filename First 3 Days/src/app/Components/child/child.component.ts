import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() parentData: any;
  @Output() childEvent = new EventEmitter();

  sendData() {
    this.childEvent.emit("hello parent, I'm child");
  }
  whoIam() {
    console.log("I'm child component");
  }
}
