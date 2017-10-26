import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesDefensiveComponent } from './runes-defensive.component';

describe('RunesDefensiveComponent', () => {
  let component: RunesDefensiveComponent;
  let fixture: ComponentFixture<RunesDefensiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunesDefensiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesDefensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
