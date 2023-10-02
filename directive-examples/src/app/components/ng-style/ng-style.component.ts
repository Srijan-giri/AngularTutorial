import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  styleObject = {
    color: 'red',
    backgroundColor: 'black',
    padding: '10px',
    borderRadius: '10%'
  }

  changeStyle() {
    this.styleObject.borderRadius = '0px';
    this.styleObject.backgroundColor= '#e2e2e2';
  }

  toggleChange(){
    if(this.styleObject.color == 'red'){
      this.styleObject.color = 'blue';
    } else {
      this.styleObject.color = 'red';
    }
  }
}

/*!SECTION

[ngStyle]= allow to add or remove inline styles on html elements based on expression.


syntax :

    <div [ngStyle]="{'styleName':'expression'}"></div>


*/