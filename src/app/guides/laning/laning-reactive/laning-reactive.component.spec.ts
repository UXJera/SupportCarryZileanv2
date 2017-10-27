import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaningReactiveComponent } from './laning-reactive.component';

describe('LaningReactiveComponent', () => {
  let component: LaningReactiveComponent;
  let fixture: ComponentFixture<LaningReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaningReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaningReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
