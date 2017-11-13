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

  onToggle() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {
  }

}
