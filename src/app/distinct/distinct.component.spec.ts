import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctComponent } from './distinct.component';

describe('DistinctComponent', () => {
  let component: DistinctComponent;
  let fixture: ComponentFixture<DistinctComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistinctComponent]
    });
    fixture = TestBed.createComponent(DistinctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
