import { Component, OnInit } from '@angular/core';

import { Guide } from '../guide.model';

@Component({
  selector: 'app-playstyle',
  templateUrl: './playstyle.component.html',
  styleUrls: ['./playstyle.component.scss']
})
export class PlaystyleComponent implements OnInit {

  article: Object = {
    title: 'Playstyles',
    updated: 'Pre-Season 8'
  }

  componentSelected;

  itemGuides: Guide[] = [
    new Guide(0,'aggressive', ''),
    new Guide(1,'reactive',''),
  ]

  onSelect(value) {
    for (let items of this.itemGuides) {
      items.selected = false;
    }
    this.componentSelected = value.index;
    value.selected = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
