import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, first, from, last } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  // define formGrou
  searchForm!: FormGroup;
  name!: FormControl;
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
    this.searchForm = new FormGroup({
      name: new FormControl('start search'),
    });

    this.searchForm
      .get('name')
      ?.valueChanges.pipe(debounceTime(3000))
      .subscribe((d) => {
        console.log(d);
      });
    this.catetories$.pipe(first(), last()).subscribe((d) => {
      console.log(d);
    });
  }

  readValue() {}
}
