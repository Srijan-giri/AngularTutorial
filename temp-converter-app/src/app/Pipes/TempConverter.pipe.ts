import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'convertTemp',
})
export class TempConverterPipe implements PipeTransform{
    transform(value: number , type:string) {
       if(type==='C'){
          const c = (value-32)/1.8;
          return c.toFixed(2);
       }
       else if(type=='F')
       {
        const f = (value*1.8)+32;
        return f.toFixed(2);
       }

       return null;

    
    }

}