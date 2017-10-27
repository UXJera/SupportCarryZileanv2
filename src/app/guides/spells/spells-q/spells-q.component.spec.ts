import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsQComponent } from './spells-q.component';

describe('SpellsQComponent', () => {
  let component: SpellsQComponent;
  let fixture: ComponentFixture<SpellsQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
