import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-runes-defensive',
  templateUrl: './runes-defensive.component.html',
  styleUrls: ['./runes-defensive.component.scss']
})
export class RunesDefensiveComponent implements OnInit {

  constructor() { }
  toggled = false;

  onToggle() {
    this.toggled = !this.toggled;
  }

  ngOnInit() {
  }

}
