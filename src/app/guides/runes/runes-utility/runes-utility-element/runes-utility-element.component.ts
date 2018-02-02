import { Component, OnInit } from '@angular/core';
import { Rune } from '../../rune.model';
import { RunesService } from '../../runes.service';

@Component({
  selector: 'app-runes-utility-element',
  templateUrl: './runes-utility-element.component.html',
  styleUrls: ['./runes-utility-element.component.scss']
})
export class RunesUtilityElementComponent implements OnInit {

  primaryUtilityRune: any; // Sorcery
  secondaryUtilityRune: any; // Domination

  constructor(private runesService: RunesService) {
    this.primaryUtilityRune = this.runesService.sorcery;
    this.secondaryUtilityRune = this.runesService.domination;
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
    this.primaryUtilityRune.keystone[0].highlightPrimary = true;
    this.primaryUtilityRune.keystone[1].highlightPrimary = false;
    this.primaryUtilityRune.slot3[2].highlightPrimary = true;
    this.primaryUtilityRune.slot3[0].highlightPrimary = false;
  }

}
