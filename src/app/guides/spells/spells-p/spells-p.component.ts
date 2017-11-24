import { Component, OnInit } from '@angular/core';
import { SpellsService } from '../spells.service';

@Component({
  selector: 'app-spells-p',
  templateUrl: './spells-p.component.html',
  styleUrls: ['./spells-p.component.scss']
})
export class SpellsPComponent implements OnInit {

  spellData: any;

  constructor(private spellsService: SpellsService) {
    this.spellsService.getData().subscribe(
      (res) => {
        this.spellData = res;
        this.spellData = this.spellData.passive;
      },
       (error) => console.log("error : " + error),
    )
  }

  ngOnInit() {
  }

}
