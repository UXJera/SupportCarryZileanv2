import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsTankElementComponent } from './items-tank-element.component';

describe('ItemsTankElementComponent', () => {
  let component: ItemsTankElementComponent;
  let fixture: ComponentFixture<ItemsTankElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsTankElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsTankElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
