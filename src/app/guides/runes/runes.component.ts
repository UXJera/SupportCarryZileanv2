import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

  itemList = [
    { index: 0, name: 'Utility', img: '' },
    { index: 1, name: 'Offensive', img: '' },
    { index: 2, name: 'Defensive', img: '' },
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
