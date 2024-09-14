import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square2'
})
export class Square2Pipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): any {
    return value * value;
  }

}
