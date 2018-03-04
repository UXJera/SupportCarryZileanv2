import { Component, OnInit } from '@angular/core';

import {ItemBuild} from '../item-build.model';

@Component({
  selector: 'app-items-utility',
  templateUrl: './items-utility.component.html',
  styleUrls: ['./items-utility.component.scss'],
})
export class ItemsUtilityComponent implements OnInit {

  alternateView = false;

  onToggleAlternate() {
    this.alternateView = !this.alternateView;
  }

  // Starting Items
  itemBuild1: ItemBuild[] = [
    new ItemBuild('Spellthiefs Edge', './assets/images/items/spellthiefs-edge.png'),
    new ItemBuild('Potion of Healing', './assets/images/items/potion.png'),
    new ItemBuild('Refillable Potion', './assets/images/items/refill-potion.png'),
    new ItemBuild('Trinket Ward', './assets/images/items/trinket-ward.png'),
  ];

  // Early Game Items
  itemBuild2: ItemBuild[] = [
    new ItemBuild('Frostfang', './assets/images/items/frostfang.png'),
    new ItemBuild('Boots', './assets/images/items/boots.png'),
    new ItemBuild('Forbidden Idol', './assets/images/items/forbidden-idol.png'),
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild('Remnant of the Watchers', './assets/images/items/remnant-of-the-watchers.png'),
    new ItemBuild('Ardent Censer', './assets/images/items/ardent-censer.png'),
    // new ItemBuild('Athenes Unholy Grail', './assets/images/items/athenes-unholy-grail.png'),
    new ItemBuild('Redemption', './assets/images/items/redemption.png'),
    new ItemBuild('Boots of Mobility', './assets/images/items/boots-of-mobility.png'),
    new ItemBuild('Sweeper Trinket', './assets/images/items/sweeper.png'),
  ];

  // Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild('Mikaels Crucible', './assets/images/items/mikaels-crucible.png'),
    new ItemBuild('Warmog\'s Armor', './assets/images/items/knights-vow.png'),
    new ItemBuild('Banner of Command', './assets/images/items/banner-of-command.png'),
    //new ItemBuild('Ardent Censer', './assets/images/items/ardent-censer.png'),
    new ItemBuild('Athenes Unholy Grail', './assets/images/items/athenes-unholy-grail.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
