import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GuidesComponent implements OnInit {

  guides = [
    { name: 'runes', title: 'Rune Strategies'},
    { name: 'items', title: 'Item Builds' },
    { name: 'skill-order', title: 'Skill Order'},
    { name: 'spells', title: 'Spell Information'},
    { name: 'playstyle', title: 'Playstles'},
    // { name: 'matchups', title: 'Matchups'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
