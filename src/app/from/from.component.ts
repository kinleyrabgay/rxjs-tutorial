import { Component, OnInit } from '@angular/core';
import { Observable, from, map, toArray } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css'],
})
export class FromComponent implements OnInit {
  /**
   * from and of operator are creators (can create observable)
   * DIFFERENCE:
   * from => from array or array like
   * of => can create from string, array (anything)
   */
  order: string = '';
  localArr: string[] | undefined;

  orderArr = ['Fashiion', 'Electronic', 'Mobile', 'Household'];
  orderArr$ = from(this.orderArr);

  ngOnInit(): void {
    /**
     * signle string value
     */
    this.orderArr$.subscribe((value) => {
      this.order = value;
    });

    /**
     * array of string value
     */
    this.orderArr$.pipe(toArray()).subscribe((arr) => (this.localArr = arr));
  }
}
