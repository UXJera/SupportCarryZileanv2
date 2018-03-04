import { Component, OnInit } from '@angular/core';

import {ItemBuild} from '../item-build.model';

@Component({
  selector: 'app-items-hybrid',
  templateUrl: './items-hybrid.component.html',
  styleUrls: ['./items-hybrid.component.scss']
})
export class ItemsHybridComponent implements OnInit {

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
    new ItemBuild('Lost Chapter', './assets/images/items/lost-chapter.png'),
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild('Frostfang', './assets/images/items/frostfang.png'),
    new ItemBuild('Archangel\'s Staff', './assets/images/items/archangels-staff.png'),
    new ItemBuild('Redemption', './assets/images/items/redemption.png'),
    new ItemBuild('Boots of Mobility', './assets/images/items/boots-of-mobility.png'),
    new ItemBuild('Sweeper Trinket', './assets/images/items/sweeper.png'),
  ];

  // Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild('Banshees Veil', './assets/images/items/banshees-veil.png'),
    new ItemBuild('Knights Vow', './assets/images/items/knights-vow.png'),
    new ItemBuild('Banner of Command', './assets/images/items/banner-of-command.png'),
    new ItemBuild('Ludens Echo', './assets/images/items/ludens-echo.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
