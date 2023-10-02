import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector:'[dkClass]'
})
export class dkClassDirective implements OnInit{

    @Input() dkClass :string|undefined;

    constructor(private ref:ElementRef){}

    ngOnInit(): void {
        this.ref.nativeElement.classList.add(this.dkClass);
    }
    

}