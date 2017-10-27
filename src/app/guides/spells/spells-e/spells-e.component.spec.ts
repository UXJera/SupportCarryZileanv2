import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsEComponent } from './spells-e.component';

describe('SpellsEComponent', () => {
  let component: SpellsEComponent;
  let fixture: ComponentFixture<SpellsEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
