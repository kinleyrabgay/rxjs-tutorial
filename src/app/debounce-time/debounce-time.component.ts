import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css'],
})
export class DebounceTimeComponent implements OnInit {
  /**
   * Emits a notification from the source observable only after a
   * particular time span has passed without another source emission
   *
   * USE CASES
   * 1. Search
   *    -> user type the values : you CANNOT call APIS so many times
   *    -> time lag : debounceTime
   *    -> fast => API calls
   * 2. Delay / Emit the next
   * -----------------------
   * functions -> observable
   * -----------------------
   */

  // define formGrou
  searchForm!: FormGroup;
  name!: FormControl;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl('start search'),
    });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(debounceTime(3000))
      .subscribe((d) => {
        console.log(d);
      });
  }

  readValue() {}
}
