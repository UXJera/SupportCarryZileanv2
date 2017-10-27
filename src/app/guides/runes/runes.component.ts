import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes',
  templateUrl: './runes.component.html',
  styleUrls: ['./runes.component.scss']
})
export class RunesComponent implements OnInit {

  itemList = ['offensive','utility','defensive'];

  componentSelected;

  onSelect(value) {
    this.componentSelected = value;
  }

  article: Object = {
    title: 'Runepage Setup',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
