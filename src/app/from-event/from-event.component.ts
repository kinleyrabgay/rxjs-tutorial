import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css'],
})
export class FromEventComponent implements OnInit {
  /**
   * ViewChild
   * NativeElement
   * Create an observable from events
   */
  @ViewChild('validate') validate: ElementRef | undefined;
  @ViewChild('getLink') getLink: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {}

  rxjsEvent() {
    const btnObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    btnObservable$.subscribe((d) => {
      console.log(d);
    });
  }

  getEvent() {
    const linkObserables$ = fromEvent(this.getLink?.nativeElement, 'click');
    linkObserables$.subscribe((d) => {
      console.log(d);
    });
  }
}
