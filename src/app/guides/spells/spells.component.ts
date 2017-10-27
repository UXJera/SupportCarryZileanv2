import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  itemList = [
    { index: 0, name: 'Passive', img: '' },
    { index: 1, name: 'Q', img: '' },
    { index: 2, name: 'W', img: '' },
    { index: 3, name: 'E', img: '' },
    { index: 4, name: 'R', img: '' }
  ];

  componentSelected;

  onSelect(value) {
    this.componentSelected = value.index;
  }

  article: Object = {
    title: 'Runepage Setup',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
