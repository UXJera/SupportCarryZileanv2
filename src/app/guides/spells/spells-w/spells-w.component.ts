import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spells-w',
  templateUrl: './spells-w.component.html',
  styleUrls: ['./spells-w.component.scss']
})
export class SpellsWComponent implements OnInit {

  spellData: any;

  constructor(private spellsService: SpellsService) {
    this.spellsService.getData().subscribe(
      (res) => {
        this.spellData = res;
        this.spellData = this.spellData.rewind;
      },
       (error) => console.log("error : " + error),
    )
  }

  ngOnInit() { }
}
