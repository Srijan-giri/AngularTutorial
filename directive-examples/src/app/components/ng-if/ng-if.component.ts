import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
   active = true;
   count =3 ;
   changeState(){
    this.active = !this.active;
   }
}

/*!SECTION

*ngif -- angular directive -- add or remove elements based on some condition.

active =true
<div>
 
</div>

   syntax : 

   <div  *ngIf = "condition"></div>

   condition can be anything . It can be property of component class or any expression that evaluates as true / false.

   else block:
   ngIf else :

   <ng-template>
    


*/