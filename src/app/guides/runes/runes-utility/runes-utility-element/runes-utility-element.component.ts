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
    this.runesService.getData().subscribe(
      (res) => {
        let runesData: any = res;
        this.primaryRune = runesData.sorcery;
        this.secondaryRune = runesData.domination;
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
