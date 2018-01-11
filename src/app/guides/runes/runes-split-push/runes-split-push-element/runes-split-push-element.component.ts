import { Component, OnInit } from '@angular/core';
import { Rune } from '../../rune.model';
import { RunesService } from '../../runes.service';

@Component({
  selector: 'app-runes-split-push-element',
  templateUrl: './runes-split-push-element.component.html',
  styleUrls: ['./runes-split-push-element.component.scss']
})
export class RunesSplitPushElementComponent implements OnInit {

  primaryRune: any; // Sorcery
  secondaryRune: any; // Domination

  constructor(private runesService: RunesService) {
    this.primaryRune = this.runesService.domination;
    this.secondaryRune = this.runesService.sorcery;
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
  }

}
