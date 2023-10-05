import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'upper'
})
export class UpperCasePipe implements PipeTransform{
    transform(value: string, ...args: any[]) {
        // all logics here
       console.log("using custom pipes");
       console.log(value);
       // any logic
       return value.toUpperCase();       
    }

}