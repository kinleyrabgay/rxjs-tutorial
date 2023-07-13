import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, elementAt, first, from, last } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  categories = [
    'Mobiles',
    'Some',
    'Highlights',
    'Chargers',
    'TV',
    'Headphones',
  ];
  catetories$ = from(this.categories);
  constructor() {}
  ngOnInit(): void {
    /**
     * elementAt (start: 0), return the value at index of the source
     */
    this.catetories$.pipe(elementAt(2)).subscribe((d) => console.log(d));
  }
}
