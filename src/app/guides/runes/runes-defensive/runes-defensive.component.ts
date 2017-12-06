import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-defensive',
  templateUrl: './runes-defensive.component.html',
  styleUrls: ['./runes-defensive.component.scss'],
})
export class RunesDefensiveComponent implements OnInit {

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

  ngOnInit() {
  }

}
