import { Component, OnInit } from '@angular/core';
import { count, distinct, from, skip } from 'rxjs';

@Component({
  selector: 'app-distinct',
  templateUrl: './distinct.component.html',
  styleUrls: ['./distinct.component.css'],
})
export class DistinctComponent implements OnInit {
  /**
   * distinct : eq: set
   */
  categories = [
    'Mobiles',
    'Some',
    'Chargers',
    'TV',
    'Highlights',
    'Chargers',
    'TV',
    'Headphones',
    'TV',
  ];

  catetories$ = from(this.categories);
  ngOnInit(): void {
    /**
     * distinct operator
     */
    // this.catetories$.pipe(distinct()).subscribe((d) => console.log(d));

    /**
     * skip operator : give back observable that will skip the first occurence
     * of the count user pass (how many values to skip: while giving value)
     */
    // this.catetories$.pipe(distinct(), skip(2)).subscribe((d) => console.log(d));

    /**
     * count operator: give the number of observable there
     */
    this.catetories$.pipe(count()).subscribe((d) => console.log(d));
  }
}
