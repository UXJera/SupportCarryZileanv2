import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesOffensiveComponent } from './runes-offensive.component';

describe('RunesOffensiveComponent', () => {
  let component: RunesOffensiveComponent;
  let fixture: ComponentFixture<RunesOffensiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunesOffensiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesOffensiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
