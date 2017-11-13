import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes-utility',
  templateUrl: './runes-utility.component.html',
  styleUrls: ['./runes-utility.component.scss']
})
export class RunesUtilityComponent implements OnInit {

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
