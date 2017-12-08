import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-defensive',
  templateUrl: './runes-defensive.component.html',
  styleUrls: ['./runes-defensive.component.scss'],
})
export class RunesDefensiveComponent implements OnInit {

  primaryRune: any; // resolve
  secondaryRune: any; // sorcery

  constructor(private runesService: RunesService) {
    this.primaryRune = this.runesService.resolve;
    this.secondaryRune = this.runesService.sorcery;
  }

  ngOnInit() {
  }

}
