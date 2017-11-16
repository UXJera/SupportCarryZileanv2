import { Component, OnInit } from '@angular/core';

import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-defensive-element',
  templateUrl: './runes-defensive-element.component.html',
  styleUrls: ['./runes-defensive-element.component.scss']
})
export class RunesDefensiveElementComponent implements OnInit {

  constructor() { }

  toggled = false;

  images: Object = {
    detailed: '../assets/images/runes/defensive/defensive-detail-sd.jpg',
    brief: '../assets/images/runes/defensive/defensive-brief-sd.jpg',
  }

  imagesHD: Object = {
    detailed: '../assets/images/runes/defensive/defensive-detail-hd.jpg',
    brief: '../assets/images/runes/defensive/defensive-brief-hd.jpg'
  }

  resolveShortcut = '~assets/images/runes/icons/resolve/'

  masteryArray = [
    [ new Rune('Grasp of the Undying','./assets/images/runes/icons/resolve/resolve-keystone-1.png',''),
      new Rune('Aftershock','./assets/images/runes/icons/resolve/resolve-keystone-2.png',''),
      new Rune('Guardian','./assets/images/runes/icons/resolve/resolve-keystone-3.png','',true),
    ],
    [
      new Rune('Unflinching','./assets/images/runes/icons/resolve/resolve-slot-1-1.png',''),
      new Rune('Demolish','./assets/images/runes/icons/resolve/resolve-slot-1-2.png',''),
      new Rune('Font of Life','./assets/images/runes/icons/resolve/resolve-slot-1-3.png','',true),
    ],
    [
      new Rune('Iron Skin','./assets/images/runes/icons/resolve/resolve-slot-2-1.png','',true),
      new Rune('Mirror Shell','./assets/images/runes/icons/resolve/resolve-slot-2-2.png','',true),
      new Rune('Conditioning','./assets/images/runes/icons/resolve/resolve-slot-2-3.png','',true),
    ],
    [
      new Rune('Overgrowth','./assets/images/runes/icons/resolve/resolve-slot-3-1.png',''),
      new Rune('Revitalize','./assets/images/runes/icons/resolve/resolve-slot-3-2.png',''),
      new Rune('Second Wind','./assets/images/runes/icons/resolve/resolve-slot-3-3.png','',true),
    ],
  ];

  onToggle() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {
  }

}
