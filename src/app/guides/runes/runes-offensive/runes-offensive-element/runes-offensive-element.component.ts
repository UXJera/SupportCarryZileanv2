import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../runes.service';

import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-offensive-element',
  templateUrl: './runes-offensive-element.component.html',
  styleUrls: ['./runes-offensive-element.component.scss']
})
export class RunesOffensiveElementComponent implements OnInit {

  primaryOffensiveRune: any; // Sorcery
  secondaryOffensiveRune: any; // Inspiration

  constructor(private runesService: RunesService) {
    this.primaryOffensiveRune = this.runesService.sorcery;
    this.secondaryOffensiveRune = this.runesService.inspiration;
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
    this.primaryOffensiveRune.keystone[1].highlightPrimary = true;
    this.primaryOffensiveRune.keystone[0].highlightPrimary = false;
  }
}
