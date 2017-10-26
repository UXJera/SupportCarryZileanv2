import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunesUtilityComponent } from './runes-utility.component';

describe('RunesUtilityComponent', () => {
  let component: RunesUtilityComponent;
  let fixture: ComponentFixture<RunesUtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunesUtilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunesUtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
