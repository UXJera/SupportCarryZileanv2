import { Component, OnInit } from '@angular/core';

import { Guide } from '../guide.model';

@Component({
  selector: 'app-skill-order',
  templateUrl: './skill-order.component.html',
  styleUrls: ['./skill-order.component.scss']
})
export class SkillOrderComponent implements OnInit {

  article = {
    title: 'Skill Order',
    updated: 'Pre-Season 8'
  };

  componentSelected;

  itemGuides: Guide[] = [
    new Guide(0, 'q max', '../assets/images/skills/q.png'),
    new Guide(1, 'hybrid order', '../assets/images/skills/e.png'),
    new Guide(2, 'e max', '../assets/images/skills/e.png'),
  ];

  onSelect(value) {
    for (const items of this.itemGuides) {
      items.selected = false;
    }
    this.componentSelected = value.index;
    value.selected = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
