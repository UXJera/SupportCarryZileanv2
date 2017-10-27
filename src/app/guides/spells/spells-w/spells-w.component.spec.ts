import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsWComponent } from './spells-w.component';

describe('SpellsWComponent', () => {
  let component: SpellsWComponent;
  let fixture: ComponentFixture<SpellsWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
