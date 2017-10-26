import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss']
})
export class GuidesComponent implements OnInit {

  guides = [
    { name: 'runes', title: 'Rune Strategies'},
    { name: 'items', title: 'Item Builds' },
    { name: 'spells', title: 'Spell Information'},
    { name: 'playstyle', title: 'Playstles'},
    { name: 'matchups', title: 'Matchups'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
