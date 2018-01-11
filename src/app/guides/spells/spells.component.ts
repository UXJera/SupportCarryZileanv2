import { Component, OnInit } from '@angular/core';

import { Guide } from '../guide.model';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss'],
})
export class SpellsComponent implements OnInit {

  constructor() { }

  componentSelected;

  itemGuides: Guide[] = [
    new Guide(0, 'passive', '../assets/images/skills/passive.png'),
    new Guide(1, 'q', '../assets/images/skills/q.png'),
    new Guide(2, 'w', '../assets/images/skills/w.png'),
    new Guide(3, 'e', '../assets/images/skills/e.png'),
    new Guide(4, 'r', '../assets/images/skills/r.png'),
  ];

  onSelect(value) {
    for (const items of this.itemGuides) {
      items.selected = false;
    }
    this.componentSelected = value.index;
    value.selected = true;
  }

  article = {
    title: 'Spell Information',
    updated: 'Patch 8.1'
  };

  ngOnInit() {
  }

}
