import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemList = ['utility','damage','tank'];

  componentSelected;

  onSelect(value) {
    this.componentSelected = value;
  }

  article: Object = {
    title: 'Item Builds',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
