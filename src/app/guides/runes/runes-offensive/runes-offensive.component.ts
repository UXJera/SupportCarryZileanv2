import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-offensive',
  templateUrl: './runes-offensive.component.html',
  styleUrls: ['./runes-offensive.component.scss'],
})
export class RunesOffensiveComponent implements OnInit {

  primaryRune: any; // Sorcery
  secondaryRune: any; // Domination

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

  ngOnInit() {
  }

}
