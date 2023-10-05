import { Pipe,PipeTransform } from '@angular/core';

@Pipe({
    name:'toCel'
})
export class ToCelPipe implements PipeTransform{
    transform(fTem: number, ...args: any[]) {
        console.log(fTem);
        const c =(fTem-32)/1.8;
        return c.toFixed(2); 
        
        /*!SECTION
        c=(F-32)-1.8


        */
    }

}