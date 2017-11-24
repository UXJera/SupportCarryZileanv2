import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-offensive',
  templateUrl: './runes-offensive.component.html',
  styleUrls: ['./runes-offensive.component.scss'],
  providers: [ RunesService ]
})
export class RunesOffensiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
