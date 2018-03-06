import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-items-utility-element',
  templateUrl: './items-utility-element.component.html',
  styleUrls: ['./items-utility-element.component.scss']
})
export class ItemsUtilityElementComponent implements OnInit {

  itemBuild = [];

  items: any;

  constructor(private itemsService: ItemsService) {
    this.items = this.itemsService.itemLib;
  }

  ngOnInit() {
    this.itemBuild = [
      this.items.eyeOfAscention,
      this.items.ardentCenser,
      this.items.redemption,
      this.items.locketOfTheIronSolari,
      this.items.controlWard,
      this.items.bootsOfMobility,
      this.items.sweeper
    ]
  }

  // itemBuild: ItemBuild[] = [
  //   new ItemBuild('Remnant of the Watchers', './assets/images/items/remnant-of-the-watchers.png'),
  //   new ItemBuild('Ardent Censer', './assets/images/items/ardent-censer.png'),
  //   //new ItemBuild('Athenes Unholy Grail', './assets/images/items/athenes-unholy-grail.png'),
  //   new ItemBuild('Redemption', './assets/images/items/redemption.png'),
  //   new ItemBuild('Locket of the Iron Solari', './assets/images/items/locket-of-the-iron-solari.png'),
  //   new ItemBuild('Control Ward', './assets/images/items/control-ward.png'),
  //   new ItemBuild('Boots of Mobility', './assets/images/items/boots-of-mobility.png'),
  //   new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  // ];


}
