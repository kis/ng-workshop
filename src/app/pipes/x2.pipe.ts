import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'x2'
})
export class X2Pipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value * 2;
  }

}
