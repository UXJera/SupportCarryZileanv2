import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-tank',
  templateUrl: './items-tank.component.html',
  styleUrls: ['./items-tank.component.scss']
})
export class ItemsTankComponent implements OnInit {

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
      this.items.ancientCoin,
      this.items.healthPot,
      this.items.refillablePotion,
      this.items.trinketWard
    ];

    this.itemBuildEarly = [
      this.items.nomadsMedallion,
      this.items.boots,
      this.items.glacialShroud,
    ];
    this.itemBuildMid = [
      this.items.nomadsMedallion,
      this.items.righteousGlory,
      this.items.knightsVow,
      this.items.mercuryTreads,
      this.items.sweeper
    ];
    this.itemBuildOptional = [
      this.items.ardentCenser,
      this.items.mikaelsCrucible,
      this.items.bannerOfCommand
    ];
  }

}
