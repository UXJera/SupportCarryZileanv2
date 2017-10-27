import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystyleAggressiveComponent } from './playstyle-aggressive.component';

describe('PlaystyleAggressiveComponent', () => {
  let component: PlaystyleAggressiveComponent;
  let fixture: ComponentFixture<PlaystyleAggressiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaystyleAggressiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystyleAggressiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
