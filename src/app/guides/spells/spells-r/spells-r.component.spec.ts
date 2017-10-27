import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsRComponent } from './spells-r.component';

describe('SpellsRComponent', () => {
  let component: SpellsRComponent;
  let fixture: ComponentFixture<SpellsRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
