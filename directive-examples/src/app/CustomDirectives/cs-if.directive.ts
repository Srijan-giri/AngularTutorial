import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:'[csIf]'
})
export class csIfDirective implements OnInit{

    csif:boolean | undefined;

    constructor(
        private container:ViewContainerRef,
        private template : TemplateRef<any>
        ){}

    @Input()    
    set csIf(condition:boolean)
    {
       this.csif=condition;
       this.updateView();
    }

    updateView(){
        // custom logic
        if(this.csif){
            this.container.createEmbeddedView(this.template);
        }else{
            this.container.clear();
        }
    }

    ngOnInit(): void {}

}