import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  styleOb = {
    color: 'black',
  }

  active = false;
  buttonClick() {
    alert('You have click the button');
    this.styleOb.color = 'red';
    this.active = !this.active;
  }

  mouseEntered() {
    alert("Mouse Entered");
  }

  counter = 0;
  increaseCount(event: MouseEvent) {
    this.counter++;
    console.log(event);
    console.log(event.target);
    let button = event.target as HTMLButtonElement;
    console.log(button);
    console.log(button.textContent);

  }


  printInputValue(event: KeyboardEvent, inputField: HTMLInputElement) {
    // console.log(event);
    console.log(event.target);
    let input = event.target as HTMLInputElement;
    console.log(input);
    console.log(input.value);
    // console.log(inputField.value);
    inputField.setAttribute('style', "color:white");
    // inputField.setAttribute('style', 'background-color:red');

  }


  printInputValue1(event:Event ,inputField: HTMLInputElement) {
    console.log("Enter Button Up");
    console.log(event);
    console.log(inputField.value);
  }
}

/*

  Event Binding :

  (target-event)="statement"

*/