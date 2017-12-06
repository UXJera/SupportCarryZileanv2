import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../runes.service';
import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-defensive-element',
  templateUrl: './runes-defensive-element.component.html',
  styleUrls: ['./runes-defensive-element.component.scss']
})
export class RunesDefensiveElementComponent implements OnInit {

  primaryRune: any; // Sorcery
  secondaryRune: any; // Domination

  constructor(private runesService: RunesService) {
    this.runesService.getData().subscribe(
      (res) => {
        let runesData: any = res;
        this.primaryRune = runesData.resolve;
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
