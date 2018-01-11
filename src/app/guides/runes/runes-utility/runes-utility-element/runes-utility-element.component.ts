import { Component, OnInit } from '@angular/core';
import { Rune } from '../../rune.model';
import { RunesService } from '../../runes.service';

@Component({
  selector: 'app-runes-utility-element',
  templateUrl: './runes-utility-element.component.html',
  styleUrls: ['./runes-utility-element.component.scss']
})
export class RunesUtilityElementComponent implements OnInit {

  primaryRune: any; // Sorcery
  secondaryRune: any; // Domination

  constructor(private runesService: RunesService) {
    this.primaryRune = this.runesService.sorcery;
    this.secondaryRune = this.runesService.domination;
    this.primaryRune.keystone[0].highlightPrimary = true;
    this.primaryRune.keystone[1].highlightPrimary = false;
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
  }

}
