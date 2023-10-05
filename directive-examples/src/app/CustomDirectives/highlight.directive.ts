import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ref: ElementRef) {
    this.ref.nativeElement.style.backgroundColor = 'yellow'
  }


  @HostListener('mouseenter')
  onMouseEnter() {
    console.log("entered");
    this.ref.nativeElement.style.backgroundColor = 'yellow';
    this.ref.nativeElement.style.color = "green";
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    console.log("leave");
    this.ref.nativeElement.style.backgroundColor = 'white';
    this.ref.nativeElement.style.color = "red";

  }

}
