import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-hybrid',
  templateUrl: './items-hybrid.component.html',
  styleUrls: ['./items-hybrid.component.scss']
})
export class ItemsHybridComponent implements OnInit {

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
      this.items.lostChapter,
    ];
    this.itemBuildMid = [
      this.items.frostfang,
      this.items.archangelsStaff,
      this.items.redemption,
      this.items.bootsOfMobility,
      this.items.sweeper
    ];
    this.itemBuildOptional = [
      this.items.bansheesVeil,
      this.items.knightsVow,
      this.items.bannerOfCommand,
      this.items.ludensEcho,
    ];
  }

}
