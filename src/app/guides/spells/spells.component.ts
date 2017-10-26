import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.css']
})
export class SpellsComponent implements OnInit {

  article: Object = {
    title: 'Runepage Setup',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
