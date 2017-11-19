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
    new ItemBuild(0,'Ancient Coin', './assets/images/items/ancient-coin.png'),
    new ItemBuild(1,'Potion of Healing', './assets/images/items/potion.png'),
    new ItemBuild(2,"Refillable Potion", './assets/images/items/refill-potion.png'),
    new ItemBuild(3,"Trinket Ward", './assets/images/items/trinket-ward.png'),
  ];

  // Early Game Items
  itemBuild2: ItemBuild[] = [
    new ItemBuild(0,'Nomads Medalion', './assets/images/items/nomads-medalion.png'),
    new ItemBuild(1,'Sightstone', './assets/images/items/sightstone.png'),
    new ItemBuild(2,"Boots", './assets/images/items/boots.png'),
    new ItemBuild(3,"Glacial Shroud", './assets/images/items/glacial-shroud.png'),

    // new ItemBuild(5,"Sorcerer's Shoes", './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild(6,'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild(0,'Eye of the Watchers', './assets/images/items/eye-of-the-watchers.png'),
    new ItemBuild(1,'Righteous Glory', './assets/images/items/righteous-glory.png'),
    new ItemBuild(2,"Ninja Tabi", './assets/images/items/ninja-tabi.png',true),
    new ItemBuild(3,"Mercury Treads", './assets/images/items/mercury-treads.png',true),
    new ItemBuild(4,"Sweeper Trinket", './assets/images/items/sweeper.png'),

    // new ItemBuild(5,"Sorcerer's Shoes", './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild(6,'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild(0,'Mikaels Crucible', './assets/images/items/mikaels-crucible.png'),
    new ItemBuild(1,"ZZ'Rot Portal", './assets/images/items/zzrot-portal.png'),
    new ItemBuild(2,"Banner of Command", './assets/images/items/banner-of-command.png'),
    // new ItemBuild(3,"Archangel's Staff / Seraph's Embrace", './assets/images/items/seraphs-embrace.png'),
  ];

  // itemSetCode = `{"title":"Tanky Zilean","associatedMaps":[],"associatedChampions":[26],"blocks":[{"items":[{"id":"2055","count":1},{"id":"2003","count":1},{"id":"3303","count":1},{"id":"3301","count":1},{"id":"3341","count":1},{"id":"3364","count":1}],"type":"Flexible Zilean"},{"items":[{"id":"2049","count":1},{"id":"3098","count":1},{"id":"3096","count":1},{"id":"3024","count":1},{"id":"3801","count":1},{"id":"1001","count":1}],"type":"Basics"},{"items":[{"id":"2301","count":1},{"id":"2302","count":1},{"id":"3800","count":1},{"id":"3109","count":1},{"id":"3190","count":1},{"id":"3102","count":1},{"id":"3158","count":1}],"type":"Core Build"},{"items":[{"id":"2138","count":1},{"id":"2139","count":1}],"type":"Elixir"}]}`;

  constructor() { }

  ngOnInit() {
  }

}
