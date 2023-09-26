// custom module

import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { TeamComponent } from "../components/team/team.component";




@NgModule(
  {
    declarations:[TeamComponent],
    exports: [TeamComponent],
    imports:[],
    providers:[]

  }
)
export class CustomModule{
    
}