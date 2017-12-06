import { Component, OnInit } from '@angular/core';
import { Rune } from '../../rune.model';
import { RunesService } from '../../runes.service';


@Component({
  selector: 'app-runes-split-push-element',
  templateUrl: './runes-split-push-element.component.html',
  styleUrls: ['./runes-split-push-element.component.scss']
})
export class RunesSplitPushElementComponent implements OnInit {

  runePrimarySrc = './assets/images/runes/icons/domination/domination-main.png';
  runeSecondarySrc = './assets/images/runes/icons/sorcery/sorcery-main.png';

  primaryRune: any; // Sorcery
  secondaryRune: any; // Domination

  constructor(private runesService: RunesService) {
    this.runesService.getData().subscribe(
      (res) => {
        let runesData: any = res;
        this.primaryRune = runesData.domination;
        this.secondaryRune = runesData.sorcery;
      },
       (error) => console.log("error : " + error),
    )
  }

  toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  ngOnInit() {
  }

}
