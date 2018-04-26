import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spells-q',
  templateUrl: './spells-q.component.html',
  styleUrls: ['./spells-q.component.scss']
})
export class SpellsQComponent implements OnInit {

  spellData: any;

  constructor(private spellsService: SpellsService) {
    this.spellsService.getData().subscribe(
      (res) => {
        this.spellData = res;
        this.spellData = this.spellData.timeBomb;
      },
       (error) => console.log("error : " + error),
    )
  }

  ngOnInit() {
  }

}
