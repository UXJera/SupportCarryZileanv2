import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemList = [
    { index: 0, name: 'Utility', img: '' },
    { index: 1, name: 'Damage', img: '' },
    { index: 2, name: 'Tank', img: '' },
  ];

  componentSelected;

  onSelect(value) {
    this.componentSelected = value.index;
  }

  article: Object = {
    title: 'Item Builds',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
