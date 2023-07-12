import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, take, takeWhile } from 'rxjs';

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
   */

  searchForm!: FormGroup;
  name!: FormControl;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.searchForm = new FormGroup({
      name: new FormControl(''),
    });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(
        // take(2), // take 2 values
        takeWhile((v) => this.checkCondition(v)),
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
