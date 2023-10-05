import { Component } from '@angular/core';

@Component({
  selector: 'app-important-pipes',
  templateUrl: './important-pipes.component.html',
  styleUrls: ['./important-pipes.component.css']
})
export class ImportantPipesComponent {
  name = "Ankit Kumar";
  description = "He is famous singer";
  itemPrice = 2345.4;
  ramPercentage = 0.45962;
  amount=4500;
  csDate = new Date();


  convertToUpperCase(value: string) {
    return value.toUpperCase();
  }
}

/*!SECTION

2. uppercase : convert string into uppercase
3. lowercase : convert string into lowercase
4. slice : start : end 

5. number : format number

syntax : 
   expression | number :digit information

   'min number of integer.min digit after fraction-max digit after fraction'
   '2.2-4'

6. percent - format of percentage

syntax :
    expression | percentage :'digit info'

    'min number of integer.min digit after fraction-max digit after fraction'

7. currency - format of currency

syntax :
    expression | currency : show true/false : 'digit info'

    'min number of integer.min digit after fraction-max digit after fraction'





*/