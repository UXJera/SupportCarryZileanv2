import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laning',
  templateUrl: './laning.component.html',
  styleUrls: ['./laning.component.css']
})
export class LaningComponent implements OnInit {

  article: Object = {
    title: 'Playstyles',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
