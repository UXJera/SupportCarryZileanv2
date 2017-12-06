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
    this.runesService.getData().subscribe(
      (res) => {
        let runesData: any = res;
        this.primaryRune = runesData.sorcery;
        this.secondaryRune = runesData.inspiration;
      },
       (error) => console.log("error : " + error),
    )
  }

  public toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
  }

}
