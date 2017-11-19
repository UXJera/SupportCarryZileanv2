import { Component, OnInit } from '@angular/core';

import {ItemBuild} from '../item-build.model';

@Component({
  selector: 'app-items-utility',
  templateUrl: './items-utility.component.html',
  styleUrls: ['./items-utility.component.scss']
})
export class ItemsUtilityComponent implements OnInit {

  isActive = false;

  // Starting Items
  itemBuild1: ItemBuild[] = [
    new ItemBuild(0,'Spellthiefs Edge', './assets/images/items/spellthiefs-edge.png'),
    new ItemBuild(1,'Potion of Healing', './assets/images/items/potion.png'),
    new ItemBuild(2,"Refillable Potion", './assets/images/items/refill-potion.png'),
    new ItemBuild(3,"Trinket Ward", './assets/images/items/trinket-ward.png'),
  ];

  // Early Game Items
  itemBuild2: ItemBuild[] = [
    new ItemBuild(0,'Frostfang', './assets/images/items/frostfang.png'),
    new ItemBuild(1,'Sightstone', './assets/images/items/sightstone.png'),
    new ItemBuild(2,"Boots", './assets/images/items/boots.png'),
    new ItemBuild(3,"Faerie Charm", './assets/images/items/forbidden-idol.png'),

    // new ItemBuild(5,"Sorcerer's Shoes", './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild(6,'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild(0,'Eye of the Watchers', './assets/images/items/eye-of-the-watchers.png'),
    new ItemBuild(1,'Redemption', './assets/images/items/redemption.png'),
    new ItemBuild(2,"Ardent Censer", './assets/images/items/ardent-censer.png',true),
    new ItemBuild(3,"Boots of Lucidity", './assets/images/items/boots-of-lucidity.png'),
    new ItemBuild(4,"Sweeper Trinket", './assets/images/items/sweeper.png'),

    // new ItemBuild(5,"Sorcerer's Shoes", './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild(6,'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild(0,'Mikaels Crucible', './assets/images/items/mikaels-crucible.png'),
    new ItemBuild(1,"Knight's Vow", './assets/images/items/knights-vow.png'),
    new ItemBuild(2,"Banner of Command", './assets/images/items/banner-of-command.png'),
    // new ItemBuild(3,"Archangel's Staff / Seraph's Embrace", './assets/images/items/seraphs-embrace.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
