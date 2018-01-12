import { Component, OnInit } from '@angular/core';
import { Rune } from '../../rune.model';
import { RunesService } from '../../runes.service';

@Component({
  selector: 'app-runes-split-push-element',
  templateUrl: './runes-split-push-element.component.html',
  styleUrls: ['./runes-split-push-element.component.scss']
})
export class RunesSplitPushElementComponent implements OnInit {

  primarySplitPushRune: any; // Sorcery
  secondarySplitPushRuneRune: any; // Domination

  constructor(private runesService: RunesService) {
    this.primarySplitPushRune = this.runesService.domination;
    this.secondarySplitPushRuneRune = this.runesService.sorcery;
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
  }

}
