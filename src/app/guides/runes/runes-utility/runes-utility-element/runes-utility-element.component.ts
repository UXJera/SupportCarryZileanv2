import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes-utility-element',
  templateUrl: './runes-utility-element.component.html',
  styleUrls: ['./runes-utility-element.component.scss']
})
export class RunesUtilityElementComponent implements OnInit {

  constructor() { }
  toggled = false;

  images: Object = {
    detailed: '../assets/images/runes/utility/utility-detailed-sd.jpg',
    brief: '../assets/images/runes/utility/utility-brief-sd.jpg',
  }

  imagesHD: Object = {
    detailed: '../assets/images/runes/utility/utility-detailed-hd.jpg',
    brief: '../assets/images/runes/utility/utility-brief-hd.jpg'
  }

  onToggle() {
    this.toggled = !this.toggled;
  }
  ngOnInit() {
  }

}
