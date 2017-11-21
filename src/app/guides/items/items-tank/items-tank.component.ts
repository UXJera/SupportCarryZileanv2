import { Component, OnInit } from '@angular/core';

import {ItemBuild} from '../item-build.model';

@Component({
  selector: 'app-items-tank',
  templateUrl: './items-tank.component.html',
  styleUrls: ['./items-tank.component.scss']
})
export class ItemsTankComponent implements OnInit {

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
    new ItemBuild('Sightstone', './assets/images/items/sightstone.png'),
    new ItemBuild('Boots', './assets/images/items/boots.png'),
    new ItemBuild('Glacial Shroud', './assets/images/items/glacial-shroud.png'),

    // new ItemBuild('Sorcerer's Shoes', './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild('Eye of the Oasis', './assets/images/items/eye-of-the-oasis.png'),
    new ItemBuild('Rigteous Glory', './assets/images/items/righteous-glory.png'),
    //new ItemBuild('Ardent Censer', './assets/images/items/ardent-censer.png'),
    new ItemBuild('Boots of Lucidity', './assets/images/items/boots-of-lucidity.png'),
    new ItemBuild('Sweeper Trinket', './assets/images/items/sweeper.png'),

    // new ItemBuild('Sorcerer's Shoes', './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild('Mikaels Crucible', './assets/images/items/mikaels-crucible.png'),
    new ItemBuild('Knight\'s Vow', './assets/images/items/knights-vow.png'),
    new ItemBuild('Banner of Command', './assets/images/items/banner-of-command.png'),
    // new ItemBuild('Archangel's Staff / Seraph's Embrace', './assets/images/items/seraphs-embrace.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
