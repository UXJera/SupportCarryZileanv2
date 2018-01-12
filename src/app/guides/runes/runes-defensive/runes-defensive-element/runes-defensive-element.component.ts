import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../runes.service';
import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-defensive-element',
  templateUrl: './runes-defensive-element.component.html',
  styleUrls: ['./runes-defensive-element.component.scss']
})
export class RunesDefensiveElementComponent implements OnInit {

  primaryDefensiveRune: any; // resolve
  secondaryDefensiveRune: any; // sorcery

  constructor(private runesService: RunesService) {
    this.primaryDefensiveRune = this.runesService.resolve;
    this.secondaryDefensiveRune = this.runesService.sorcery;
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
  }

}
