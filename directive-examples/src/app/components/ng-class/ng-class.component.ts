import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  // ob="primary fontStyle"; ---> // string
  // ob=['primary','fontStyle']; ---> // array

  primary = true;
  ob = {
    'primary': this.primary,
    'fontStyle': true,
    'second':!this.primary,
  }


  togglePrimary() {
    // this.ob.primary=false;
    this.ob.primary = !this.ob.primary;
    // this.primary=!this.primary;
  }

  toggleoffStyle() {
    this.ob.fontStyle = !this.ob.fontStyle;
  }
}

/*!SECTION

 [ngClass] -- attribute directive -- add or remove css classes to an HTML elements.

 syntax :

 <div [ngClass]="expression"></div>

 expression must return :
 string
 array
 object





*/