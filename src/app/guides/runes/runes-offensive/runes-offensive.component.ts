import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-offensive',
  templateUrl: './runes-offensive.component.html',
  styleUrls: ['./runes-offensive.component.scss'],
})
export class RunesOffensiveComponent implements OnInit {

  primaryRune: any; // sorcery
  secondaryRune: any; // inspiration

  constructor(private runesService: RunesService) {
    this.primaryRune = this.runesService.sorcery;
    this.secondaryRune = this.runesService.inspiration;
  }

  ngOnInit() {
  }

}
