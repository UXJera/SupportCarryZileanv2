import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-utility',
  templateUrl: './runes-utility.component.html',
  styleUrls: ['./runes-utility.component.scss'],
  providers: [ RunesService ]
})
export class RunesUtilityComponent implements OnInit {

  constructor(private runesService: RunesService) {
  }

  discussion1 = false;

  onToggleDiscussion1() {
    return this.discussion1 = this.runesService.toggleDiscussion1();
  }

  ngOnInit() {
  }

}
