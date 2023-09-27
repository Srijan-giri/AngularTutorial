import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  title = 'sachin ramesh tendulkar';
  
  // changeValue(event: Event) {
  //   const inputField = event.target as HTMLInputElement;
  //   this.title = inputField.value;
  // }

}


// []+()=[()] ==> two way databinding
// ngModel support this