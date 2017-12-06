import { Component, OnInit } from '@angular/core';
import {RunesService} from '../runes.service';

@Component({
  selector: 'app-runes-split-push',
  templateUrl: './runes-split-push.component.html',
  styleUrls: ['./runes-split-push.component.scss']
})
export class RunesSplitPushComponent implements OnInit {

  primaryRune: any; // Domination
  secondaryRune: any; // Sorcery

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

  ngOnInit() {
  }

}
