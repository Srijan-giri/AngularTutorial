import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { FormsModule } from '@angular/forms';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { csClassDirective } from './CustomDirectives/cs-class.directive';
import { dkClassDirective } from './CustomDirectives/dk-class.directive';
import { csIfDirective } from './CustomDirectives/cs-if.directive';
import { dkIfDirective } from './CustomDirectives/dk-if.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { toogleIfDirective } from './CustomDirectives/toggle-if.directive';


@NgModule({
  declarations: [
    AppComponent,
    NgForComponent,
    NgSwitchComponent,
    NgIfComponent,
    NgClassComponent,
    NgStyleComponent,
    csClassDirective,
    dkClassDirective,
    csIfDirective,
    dkIfDirective,
    HighlightDirective,
    toogleIfDirective

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
