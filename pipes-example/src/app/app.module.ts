import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipeComponent } from './pipes-examples/date-pipe/date-pipe.component';
import { ImportantPipesComponent } from './pipes-examples/important-pipes/important-pipes.component';
import { UpperCasePipe } from './pipes-examples/custom-pipes/uppercase.pipe';
import { MyDatePipe } from './pipes-examples/custom-pipes/myDate.pipe';
import { ToCelPipe } from './pipes-examples/custom-pipes/toCel.pipe';
import { TempConverterComponent } from './pipes-examples/temp-converter/temp-converter.component';
import { TempConverterPipe } from './pipes-examples/custom-pipes/tempConverter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePipeComponent,
    ImportantPipesComponent,
    UpperCasePipe,
    MyDatePipe,
    ToCelPipe,
    TempConverterComponent,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
