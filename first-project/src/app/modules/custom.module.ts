// custom module

import { NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { TeamComponent } from "../components/team/team.component";
import { PropertyBindingComponent } from "../tutorials/property-binding/property-binding.component";




@NgModule(
  {
    declarations: [TeamComponent],
    exports: [TeamComponent],
    imports: [],
    providers: []

  }
)
export class CustomModule {

}