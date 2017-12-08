import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../runes.service';

import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-offensive-element',
  templateUrl: './runes-offensive-element.component.html',
  styleUrls: ['./runes-offensive-element.component.scss']
})
export class RunesOffensiveElementComponent implements OnInit {

  primaryRune: any; // Sorcery
  secondaryRune: any; // Inspiration

  constructor(private runesService: RunesService) {
    this.primaryRune = this.runesService.sorcery;
    this.secondaryRune = this.runesService.inspiration;
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
  }

}
