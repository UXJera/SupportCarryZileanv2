import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laning',
  templateUrl: './laning.component.html',
  styleUrls: ['./laning.component.css']
})
export class LaningComponent implements OnInit {

  itemList = [
    { index: 0, name: 'aggressive', img: '' },
    { index: 1, name: 'reactive', img: '' }
  ];

  componentSelected;

  onSelect(value) {
    this.componentSelected = value.index;
  }

  article: Object = {
    title: 'Playstyles',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
