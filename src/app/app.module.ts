import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';
import { FromComponent } from './from/from.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './from-event/from-event.component';
import { IntervalComponent } from './interval/interval.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { TakeComponent } from './take/take.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsLearningComponent,
    FromComponent,
    OfComponent,
    FromEventComponent,
    IntervalComponent,
    DebounceTimeComponent,
    TakeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
