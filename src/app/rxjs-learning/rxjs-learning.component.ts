import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css'],
})
export class RxjsLearningComponent implements OnInit {
  agents: Observable<string> | undefined;
  agentName: string | undefined;
  constructor() {}
  ngOnInit(): void {
    this.agents = new Observable(
      // Methods
      function (observer) {
        try {
          observer.next('K'), observer.next('R'), observer.next('S');
        } catch (e) {
          observer.error(e);
        }
      }
    );

    this.agents.subscribe((data) => {
      console.log(data);
      this.agentName = data;
    });
  }
}
