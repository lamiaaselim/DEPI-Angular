import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square3'
})
export class Square3Pipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return value * value * value;
  }

}
