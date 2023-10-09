import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'threeProduct'
})
export class ThreeProductPipe implements PipeTransform {

  transform(value: String,n1:number,n2:number): unknown {
       return `${value} : ${n1*n2}`;
  }

}
