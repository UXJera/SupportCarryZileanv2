import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes-utility',
  templateUrl: './runes-utility.component.html',
  styleUrls: ['./runes-utility.component.scss']
})
export class RunesUtilityComponent implements OnInit {

  constructor() { }

  toggled = false;

  onToggle() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {
  }

}
