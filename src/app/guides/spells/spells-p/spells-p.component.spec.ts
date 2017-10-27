import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellsPComponent } from './spells-p.component';

describe('SpellsPComponent', () => {
  let component: SpellsPComponent;
  let fixture: ComponentFixture<SpellsPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellsPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
