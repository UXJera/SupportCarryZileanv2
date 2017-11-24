import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spells-r',
  templateUrl: './spells-r.component.html',
  styleUrls: ['./spells-r.component.scss']
})
export class SpellsRComponent implements OnInit {

  spellData: any;

  constructor(private spellsService: SpellsService) {
    this.spellsService.getData().subscribe(
      (res) => {
        this.spellData = res;
        this.spellData = this.spellData.chronoshift;
      },
       (error) => console.log("error : " + error),
    )
  }

  ngOnInit() {
  }

}
