import { Component, OnInit } from '@angular/core';
import { from, interval, toArray } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css'],
})
export class IntervalComponent implements OnInit {
  /**
   * Interval
   */
  orderArr = ['Fashiion', 'Electronic', 'Mobile', 'Household'];
  orderArr$ = from(this.orderArr);

  ngOnInit(): void {
    this.orderArr$.subscribe((d) => {
      const seqNum$ = interval(1000);
      seqNum$.subscribe((num) => {
        if (num < 5) {
          console.log(num + ' ' + d);
        }
      });
    });

    this.orderArr$.pipe(toArray()).subscribe((d) => console.log(d));
  }
}
