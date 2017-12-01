import { Component, OnInit } from '@angular/core';

import { Guide } from '../guide.model';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

  componentSelected;

  itemGuides: Guide[] = [
    new Guide(0, 'utility', ''),
    new Guide(1, 'offensive', ''),
    new Guide(2, 'defensive', ''),
    new Guide(3, 'split push', '')
  ];

  onSelect(value) {
    for (const items of this.itemGuides) {
      items.selected = false;
    }
    this.componentSelected = value.index;
    value.selected = true;
  }

  article = {
    title: 'Runepage Setup',
    updated: 'Pre-Season 8'
  };

  constructor() { }

  ngOnInit() {
  }

}
