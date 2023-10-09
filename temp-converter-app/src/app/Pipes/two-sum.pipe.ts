import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoSum'
})
export class TwoSumPipe implements PipeTransform {

  transform(value:any,n1:number ,n2:number): unknown {
    // logic

    return `${value}:${n1+n2}`;
  }

}
