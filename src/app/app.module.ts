import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './from-event/from-event.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    FromComponent,
    OfComponent,
    FromEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
