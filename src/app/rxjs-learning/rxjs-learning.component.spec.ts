import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLearningComponent } from './rxjs-learning.component';

describe('RxjsLearningComponent', () => {
  let component: RxjsLearningComponent;
  let fixture: ComponentFixture<RxjsLearningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsLearningComponent]
    });
    fixture = TestBed.createComponent(RxjsLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
