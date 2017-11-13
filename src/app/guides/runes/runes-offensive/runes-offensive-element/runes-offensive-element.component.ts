import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes-offensive-element',
  templateUrl: './runes-offensive-element.component.html',
  styleUrls: ['./runes-offensive-element.component.scss']
})
export class RunesOffensiveElementComponent implements OnInit {

  constructor() { }
  toggled = false;

  images: Object = {
    detailed: '../assets/images/runes/offensive/offensive-detail-sd.jpg',
    brief: '../assets/images/runes/offensive/offensive-brief-sd.jpg',
  }

  imagesHD: Object = {
    detailed: '../assets/images/runes/offensive/offensive-detail-hd.jpg',
    brief: '../assets/images/runes/offensive/offensive-brief-hd.jpg'
  }

  onToggle() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {
  }

}
