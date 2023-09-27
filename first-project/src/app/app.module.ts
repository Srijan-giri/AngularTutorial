import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/AboutComponent/about.component';
import { FooterComponent } from './components/FooterComponent/footer.component';
import { NavbarComponent } from './components/navbar-component/navbar-component.component';
import { ServicesComponent } from './components/services/services.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TeamComponent } from './components/team/team.component';
import { CustomModule } from './modules/custom.module';
import { InterpolationComponent } from './tutorials/interpolation/interpolation.component';
import { PropertyBindingComponent } from './tutorials/property-binding/property-binding.component';
import { EventBindingComponent } from './tutorials/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './tutorials/two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    ServicesComponent,
    SidebarComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule, // component --> declaration cutom.module.ts--->export it ---> imports it in app.module.ts ---> then we can use selector of team in app.component.html
   FormsModule, // [ngModel]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
