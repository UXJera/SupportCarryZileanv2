import { Component, OnInit } from '@angular/core';
import { RunesService } from '../runes.service';

@Component({
  selector: 'app-runes-utility',
  templateUrl: './runes-utility.component.html',
  styleUrls: ['./runes-utility.component.scss'],
})
export class RunesUtilityComponent implements OnInit {

  primaryRune: any; // Sorcery
  secondaryRune: any; // Domination

  dominationTest: any;

  constructor(private runesService: RunesService) {
    this.dominationTest = this.runesService.domination;

    console.log(this.dominationTest);
    this.runesService.getData().subscribe(
      (res) => {
        let runesData: any = res;
        this.primaryRune = runesData.sorcery;
        this.secondaryRune = runesData.domination;
      },
       (error) => console.log("error : " + error),
    )
  }

  ngOnInit() {
  }

}
