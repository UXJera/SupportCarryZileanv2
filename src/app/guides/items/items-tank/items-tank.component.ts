import { Component, OnInit } from '@angular/core';

import {ItemBuild} from '../item-build.model';

@Component({
  selector: 'app-items-tank',
  templateUrl: './items-tank.component.html',
  styleUrls: ['./items-tank.component.scss']
})
export class ItemsTankComponent implements OnInit {

  alternateView = false;

  onToggleAlternate() {
    this.alternateView = !this.alternateView;
  }

  // Starting Items
  itemBuild1: ItemBuild[] = [
    new ItemBuild('Ancient Coin', './assets/images/items/ancient-coin.png'),
    new ItemBuild('Potion of Healing', './assets/images/items/potion.png'),
    new ItemBuild('Refillable Potion', './assets/images/items/refill-potion.png'),
    new ItemBuild('Trinket Ward', './assets/images/items/trinket-ward.png'),
  ];

  // Early Game Items
  itemBuild2: ItemBuild[] = [
    new ItemBuild('Nomads Medalion', './assets/images/items/nomads-medalion.png'),
    new ItemBuild('Boots', './assets/images/items/boots.png'),
    new ItemBuild('Glacial Shroud', './assets/images/items/glacial-shroud.png'),
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild('Nomads Medalion', './assets/images/items/nomads-medalion.png'),
    new ItemBuild('Rigteous Glory', './assets/images/items/righteous-glory.png'),
    new ItemBuild('Knight\'s Vow', './assets/images/items/knights-vow.png'),
    new ItemBuild('Mercury Treads', './assets/images/items/mercury-treads.png'),
    new ItemBuild('Sweeper Trinket', './assets/images/items/sweeper.png'),
  ];

  // Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild('Ardent Censer', './assets/images/items/ardent-censer.png'),
    new ItemBuild('Mikaels Crucible', './assets/images/items/mikaels-crucible.png'),
    new ItemBuild('Banner of Command', './assets/images/items/banner-of-command.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
