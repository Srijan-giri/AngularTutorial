import { Directive, OnInit, TemplateRef, ViewContainerRef,Input } from "@angular/core";

@Directive({
    selector:'[dkIf]'
})
export class dkIfDirective implements OnInit{
    dkif:boolean|undefined;

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>
    ){
        
    }

    @Input()
    set dkIf(cndition:boolean)
    {
        this.dkif=cndition;
        this.updateView();
    }

    updateView(){
        if(this.dkif)
        {
            this.container.createEmbeddedView(this.template);
        }
        else{
            this.container.clear();
        }
    }
    ngOnInit(): void {}
   
}