import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  studentList = ['Mark', 'Ram', 'Lisa', 'Sam'];
  students$: Observable<string[]> = of(this.studentList);
  studentNames$: Observable<string> = of('Ram');
  studentObj = {
    id: 10,
    name: 'Ram',
  };
  studentObs$ = of(this.studentObj);

  constructor() {}
  ngOnInit(): void {
    this.students$.subscribe((data) => console.log(data));
    this.studentNames$.subscribe((data) => console.log(data));
    this.studentObs$.subscribe((d) => console.log(d));

    // Observable<T>: An Observable that synchronously emits the arguments described above and then immediately completes.
    of(10, 20, 40).subscribe({
      next: (value) => console.log('next', value),
      error: (err) => console.log('error', err),
      complete: () => console.log('the end'),
    });
  }
}
