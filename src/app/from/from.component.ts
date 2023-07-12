import { Component, OnInit } from '@angular/core';
import { Observable, from, map } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent implements OnInit {
  order: string = '';
  /**
   * (from) operator
   * creates observable from array and array like
   */
  orders$ = from(['Fashion', 'Electronics', 'Mobile', 'Household']);

  orderArr = ['Fashiion', 'Electronic', 'Mobile', 'Household'];
  orderArr$ = from(this.orderArr);

  ngOnInit(): void {
    this.orderArr$.subscribe((value) => {
      console.log(value);
      this.order = value;
    });
  }
}
