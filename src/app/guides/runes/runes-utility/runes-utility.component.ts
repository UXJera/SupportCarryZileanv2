import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes-utility',
  templateUrl: './runes-utility.component.html',
  styleUrls: ['./runes-utility.component.scss']
})
export class RunesUtilityComponent implements OnInit {

  constructor() { }

  toggled = false;
  discussion1 = false;

  onToggle() {
    this.toggled = !this.toggled;
  }

  onToggleDiscussion1() {
    this.discussion1 = !this.discussion1;
  }

  ngOnInit() {
  }

}
