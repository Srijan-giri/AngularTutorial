import { Directive, TemplateRef, ViewContainerRef, OnInit, Input } from '@angular/core';

@Directive({
    selector: '[toogleIf]'
})
export class toogleIfDirective implements OnInit {
    private toggleif: boolean | undefined = false;

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>
    ) { }
    ngOnInit(): void {

    }

    @Input()
    set toogleIf(condition: boolean) {
        if (condition && !this.toggleif) {
            this.container.createEmbeddedView(this.template);
            this.toggleif = true;
        }
        else if (!condition && this.toggleif) {
            this.container.clear();
            this.toggleif = false;
        }

    }


}