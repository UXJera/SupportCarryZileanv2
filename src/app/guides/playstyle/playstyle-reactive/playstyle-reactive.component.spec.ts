import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaystyleReactiveComponent } from './playstyle-reactive.component';

describe('PlaystyleReactiveComponent', () => {
  let component: PlaystyleReactiveComponent;
  let fixture: ComponentFixture<PlaystyleReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaystyleReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaystyleReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
