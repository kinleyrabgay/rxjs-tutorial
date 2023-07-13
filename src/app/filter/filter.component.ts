import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, filter } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  /**
   * filter the source observable based on predicate function
   */
  searchForm!: FormGroup;
  name!: FormControl;

  constructor() {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });

    // this.searchForm.get('name')?.valueChanges.subscribe((d) => console.log(d));

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(
        filter(
          (v) => this.checkCharCount(v)
          /**
           * USE CASE
           * 1. HTTP call : if user is not from a city
           * 2. If tax bracket is less than 30%
           */
        )
      )
      .subscribe((d) => {
        console.log(d);
      });
  }

  readValue() {}

  checkCharCount(v: any) {
    return v.length < 10 ? true : false;
  }
}
