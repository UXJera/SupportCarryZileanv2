import { Component, OnInit } from '@angular/core';

import { Guide } from '../guide.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  componentSelected;

  private itemGuides: Guide[] = [
    new Guide(0,'utility', ''),
    new Guide(1,'damage',''),
    new Guide(2,'tank',''),
  ]

  onSelect(value) {
    for (let items of this.itemGuides) {
      items.selected = false;
    }
    this.componentSelected = value.index;
    value.selected = true;
  }

  article: Object = {
    title: 'Item Builds',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
