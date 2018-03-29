import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-damage',
  templateUrl: './items-damage.component.html',
  styleUrls: ['./items-damage.component.scss'],
})
export class ItemsDamageComponent implements OnInit {

  items: any;

  constructor(private itemsService: ItemsService) {
    this.items = this.itemsService.itemLib;
  }

  itemBuildStart = [];
  itemBuildEarly = [];
  itemBuildMid = [];
  itemBuildOptional = [];

  ngOnInit() {
    this.itemBuildStart = [
      this.items.spellthiefsEdge,
      this.items.healthPot,
      this.items.refillablePotion,
      this.items.trinketWard
    ];

    this.itemBuildEarly = [
      this.items.frostfang,
      this.items.boots,
      this.items.tearOfTheGoddess,
      this.items.lostChapter      
    ];
    this.itemBuildMid = [
      this.items.frostfang,
      this.items.archangelsStaff,
      this.items.morellonomicon,
      this.items.sorcerersShoes,
      this.items.sweeper
    ];
    this.itemBuildOptional = [
      this.items.locketOfTheIronSolari,
      this.items.rylaisCrystalScepter,
      this.items.bansheesVeil,
      this.items.zhonyasHourglass,
      this.items.liandrisTorment
    ];
  }

}
