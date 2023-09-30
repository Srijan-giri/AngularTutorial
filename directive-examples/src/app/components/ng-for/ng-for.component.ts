import { Component } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  students = [
    new Student("Ankit Kumar", 73828827, "ECE"),
    new Student("Suman Jha", 6228828, "CSE"),
    new Student("Sujoy Mandal", 67382728, "CE"),
    new Student("Uttom Kumar", 77273072, "IT"),
    new Student("Prabal Mandal", 7228819, "EE"),
  ]

  clearStudents(){
    this.students=[];
  }
}

/*

*ngFor : repeating elements for n number of times.

<html-element *ngFor="let a of array" >
</html-element>

*ngFor provides several variables :
1.index --  current position --index 0
2. count -- total number of items in collections
3.first -- true if loop is at first position
4. last -- true : last positon pe
5.even -- true : even position pe
6.odd -- true : odd position pe


*/
