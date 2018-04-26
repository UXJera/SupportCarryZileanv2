import { Component, OnInit } from '@angular/core';
import {RunesService} from '../runes.service';

@Component({
  selector: 'app-runes-split-push',
  templateUrl: './runes-split-push.component.html',
  styleUrls: ['./runes-split-push.component.scss']
})
export class RunesSplitPushComponent implements OnInit {

  primaryRune: any; // Domination
  secondaryRune: any; // Sorcery

  constructor(private runesService: RunesService) {
    this.primaryRune = this.runesService.domination;
    this.secondaryRune = this.runesService.sorcery;
  }

  ngOnInit() {
  }

}
