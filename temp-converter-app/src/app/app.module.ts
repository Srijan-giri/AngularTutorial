import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { TempConverterPipe } from './Pipes/TempConverter.pipe';
import { FormsModule } from '@angular/forms';
import { TwoSumPipe } from './Pipes/two-sum.pipe';
import { ThreeProductPipe } from './Pipes/three-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    TempConverterPipe,
    TwoSumPipe,
    ThreeProductPipe
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
