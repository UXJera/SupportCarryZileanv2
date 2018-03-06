import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-items-utility',
  templateUrl: './items-utility.component.html',
  styleUrls: ['./items-utility.component.scss'],
})
export class ItemsUtilityComponent implements OnInit {

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
      this.items.faerieCharm,
    ];
    this.itemBuildMid = [
      this.items.remnantOfTheAscended,
      this.items.ardentCenser,
      this.items.redemption,
      this.items.bootsOfMobility,
      this.items.sweeper
    ];
    this.itemBuildOptional = [
      this.items.mikaelsCrucible,
      this.items.knightsVow,
      this.items.bannerOfCommand,
      this.items.athenesUnholyGrail,
    ];
  }

}
