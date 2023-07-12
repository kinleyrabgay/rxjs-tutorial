import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent implements OnInit {
  /**
   * Take (tells how many values to take)
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
        take(2), // take 2 values
        debounceTime(3000) // time lag before it emits next value
      )
      .subscribe((d) => {
        console.log(d);
      });
  }

  readValue() {}
}
