import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'csDate'
})
export class MyDatePipe implements PipeTransform{
    transform(value: Date, ...args: any[]) {
    //    return value.toLocaleDateString();
        // return value.toLocaleTimeString();
        return value.toLocaleString();
    }

}