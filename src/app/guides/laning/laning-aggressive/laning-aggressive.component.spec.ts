import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaningAggressiveComponent } from './laning-aggressive.component';

describe('LaningAggressiveComponent', () => {
  let component: LaningAggressiveComponent;
  let fixture: ComponentFixture<LaningAggressiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaningAggressiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaningAggressiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
