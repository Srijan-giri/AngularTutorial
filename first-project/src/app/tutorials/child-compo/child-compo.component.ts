import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-compo',
  templateUrl: './child-compo.component.html',
  styleUrls: ['./child-compo.component.css']
})
export class ChildCompoComponent implements OnInit {
  ngOnInit(): void {
     this.customEventEmitter.emit(this.counter);
  }

  @Input() counter = 0;
  @Input('firstName') name = "Durgesh";

  @Output() customEventEmitter = new EventEmitter<number>();

  increaseCounter() {
    this.counter++;
    this.customEventEmitter.emit(this.counter);
  }




}
