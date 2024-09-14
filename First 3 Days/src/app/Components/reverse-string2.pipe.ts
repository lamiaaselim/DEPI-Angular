import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString2'
})
export class ReverseString2Pipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.split('').reverse().join('');
  }
  // [L , a , m , i, a, a ] => aaimaL

}
