import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-compo',
  templateUrl: './parent-compo.component.html',
  styleUrls: ['./parent-compo.component.css']
})
export class ParentCompoComponent {
  parentCounter = 0;
  parentMethod(event : any){
    console.log(event);
     this.parentCounter = event;
    // alert('alert from comment');
  }

}
