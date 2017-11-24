import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spells-e',
  templateUrl: './spells-e.component.html',
  styleUrls: ['./spells-e.component.scss']
})
export class SpellsEComponent implements OnInit {

  spellData: any;

  constructor(private spellsService: SpellsService) {
    this.spellsService.getData().subscribe(
      (res) => {
        this.spellData = res;
        this.spellData = this.spellData.timeWarp;
      },
       (error) => console.log("error : " + error),
    )
  }

  ngOnInit() {
  }

}
