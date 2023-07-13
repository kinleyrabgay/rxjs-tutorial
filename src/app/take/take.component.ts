import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime, from, of, takeLast, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  /**
   * Take (tells how many values to take)
   * UPDATE
   * takWhile (take the value and check the condition or not, if condition
   * is met it will stop)
   * UPDATE
   * takeLast (take )
   */

  searchForm!: FormGroup;
  name!: FormControl;

  categories = ['Mobile', 'TV', 'Chargers', 'Headphones'];
  // categories$ = of(this.categories);
  categories$ = from(this.categories);

  constructor() {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });

    this.categories$.pipe(takeLast(2)).subscribe((item) => console.log(item));

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(
        // take(2), // take 2 values
        // takeWhile((v) => this.checkCondition(v)), //takke values till the condition is true
        // takeLast(2),
        // if true: continue else: break
        debounceTime(3000) // time lag before it emits next value
      )
      .subscribe((d) => {
        console.log(d);
      });
  }

  readValue() {}

  checkCondition(value: any) {
    return value.length < 5 ? true : false;
  }
}
