// csClass

import { Directive, Input, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector: '[csClass]'
})
export class csClassDirective implements OnInit {

    // data property  : store class string
    @Input() csClass: string | undefined;

    // inject element reference object by angular
    // ElementRef:Wrapper of Parent DOM element
    constructor(private ref: ElementRef) { }

    // initialize the component

    ngOnInit(): void {
        // adding the class to element: add class logic    
        this.ref.nativeElement.classList.add(this.csClass);
    }


}

