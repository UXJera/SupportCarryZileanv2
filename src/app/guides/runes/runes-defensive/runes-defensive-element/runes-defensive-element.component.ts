import { Component, OnInit } from '@angular/core';

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
    [
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-keystone-1.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-keystone-2.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-keystone-3.png',
        desc: ''
      },
    ],
    [
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-1-1.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-1-2.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-1-3.png',
        desc: ''
      },
    ],
    [
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-2-1.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-2-2.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-2-3.png',
        desc: ''
      },
    ],
    [
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-3-1.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-3-2.png',
        desc: ''
      },
      {
        name: 'Grasp of the Undying',
        src: './assets/images/runes/icons/resolve/resolve-slot-3-3.png',
        desc: ''
      },
    ],
  ];

  onToggle() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {
  }

}
