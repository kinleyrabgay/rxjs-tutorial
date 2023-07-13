import { Component, OnInit } from '@angular/core';
import { distinct, from } from 'rxjs';

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
  ];

  catetories$ = from(this.categories);
  ngOnInit(): void {
    this.catetories$.pipe(distinct()).subscribe((d) => console.log(d));
  }
}
