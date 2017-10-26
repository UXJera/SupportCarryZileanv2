import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  itemBuilds = ['utility','damage','tank'];
  itemComponent;

  onSelect(value) {
    this.itemComponent = value;
  }

  article: Object = {
    title: 'Item Builds',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
