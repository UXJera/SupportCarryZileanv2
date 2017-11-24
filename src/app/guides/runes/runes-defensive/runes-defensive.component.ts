import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-defensive',
  templateUrl: './runes-defensive.component.html',
  styleUrls: ['./runes-defensive.component.scss'],
  providers: [ RunesService ]
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
