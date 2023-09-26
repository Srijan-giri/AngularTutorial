import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  firstName = "Ankit Kumar";
  lastName = "Tiwari";
  fullName = this.firstName + " " + this.lastName;
  address = "ABC Road";
  laptops = ['macbook', 'dell', 'hp'];


  a = 2;
  flag = false;


  currentDate = new Date();

  getFullName() {
    return this.firstName + this.lastName;
  }

  getNameInCaps() {
    return (this.firstName + this.lastName).toUpperCase();
  }

  getReverseOfName() {
    let rev = '';
    for (let i = this.fullName.length - 1; i >= 0; i--) {
      rev = rev + this.fullName.charAt(i);
    }

    return rev.toUpperCase();
  }





}
/*

  Data and logic --> ts

  Interpolation : allow to include expression
  syntax :
  {{ expression }}


Important Points ::

1) It is a one way binding(
  component ---> view(templete)
)

2) cannot make use of following :
assignments : =,+=,-=,*=

Keywords : new,typeof

increment and decrement operators : b++

bitwise operators | & 


*/