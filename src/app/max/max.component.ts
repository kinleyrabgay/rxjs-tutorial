import { Component, OnInit } from '@angular/core';
import { distinct, filter, from, max, min } from 'rxjs';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css'],
})
export class MaxComponent implements OnInit {
  ranks = [1, 56, 45, 2, 7, 33, 76, 23, 43, 26, 56];
  ranks$ = from(this.ranks);

  constructor() {}
  ngOnInit(): void {
    /**
     * max() operator: returns the max value
     */
    this.ranks$
      .pipe(
        distinct(),
        filter((v) => this.filterValue(v)),
        max()
      )
      .subscribe((v) => console.log(v));

    /**
     * min() operator: returns the min value
     */
    this.ranks$
      .pipe(
        distinct(),
        filter((v) => this.filterValue(v)),
        min()
      )
      .subscribe((v) => console.log(v));
  }

  filterValue(v: number) {
    return v < 10 ? true : false;
  }
}
