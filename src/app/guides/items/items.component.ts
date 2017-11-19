import { Component, OnInit, OnChanges } from '@angular/core';

import { Guide } from '../guide.model';
// import { GuideService } from '../guide.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  // providers: [GuideService]
})
export class ItemsComponent implements OnInit, OnChanges {

  constructor(
    // private guideService: GuideService
  ) { }

  componentSelected;

  itemGuides: Guide[] = [
    new Guide(0, 'utility', ''),
    new Guide(1, 'damage', ''),
    new Guide(2, 'tank', ''),
  ];

  // this.guideService.onSelect(value);

  onSelect(value) {
    for (const items of this.itemGuides) {
      items.selected = false;
    }
    this.componentSelected = value.index;
    value.selected = true;
  }

  article = {
    title: 'Item Builds',
    updated: 'Pre-Season 8'
  };

  ngOnInit() {
  }
  ngOnChanges() {
    // this.guideService.onSelect();
  }

}
