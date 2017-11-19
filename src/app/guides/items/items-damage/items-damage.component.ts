import { Component, OnInit } from '@angular/core';
import { ItemBuild } from '../item-build.model';
@Component({
  selector: 'app-items-damage',
  templateUrl: './items-damage.component.html',
  styleUrls: ['./items-damage.component.scss']
})
export class ItemsDamageComponent implements OnInit {

  // Starting Items
  itemBuild1: ItemBuild[] = [
    new ItemBuild(0,'Spelltheifs Edge', './assets/images/items/spellthiefs-edge.png'),
    new ItemBuild(1,'Potion of Healing', './assets/images/items/potion.png'),
    new ItemBuild(2,"Refillable Potion", './assets/images/items/refill-potion.png'),
    new ItemBuild(3,"Trinket Ward", './assets/images/items/trinket-ward.png'),
    // new ItemBuild(4,"Liandri's Torment", './assets/images/items/liandris-torment.png'),
    // new ItemBuild(5,"Sorcerer's Shoes", './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild(6,'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Early Game Items
  itemBuild2: ItemBuild[] = [
    new ItemBuild(0,'Frostfang', './assets/images/items/frostfang.png'),
    new ItemBuild(1,'Sightstone', './assets/images/items/sightstone.png'),
    new ItemBuild(2,"Boots", './assets/images/items/boots.png'),
    new ItemBuild(3,"Lost Chapter", './assets/images/items/lost-chapter.png'),
    new ItemBuild(4,"Tear of the Goddess", './assets/images/items/tear.png',true),

    // new ItemBuild(5,"Sorcerer's Shoes", './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild(6,'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild(0,'Eye of the Watchers', './assets/images/items/eye-of-the-watchers.png'),
    new ItemBuild(1,'Morellonomicon', './assets/images/items/morellonomicon.png'),
    new ItemBuild(2,"Sorcerer Shoes", './assets/images/items/sorcerers-shoes.png'),
    new ItemBuild(3,"Sweeper Trinket", './assets/images/items/sweeper.png'),
    // new ItemBuild(4,"Liandri's Torment", './assets/images/items/liandris-torment.png'),
    // new ItemBuild(5,"Sorcerer's Shoes", './assets/images/items/sorcerers-shoes.png'),
    // new ItemBuild(6,'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  // Defensive Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild(0,'Locket of the Iron Solari', './assets/images/items/locket-of-the-iron-solari.png'),
    new ItemBuild(1,'Banshees Veil', './assets/images/items/banshees-veil.png'),
    new ItemBuild(2,"Zhonya's Hourglass", './assets/images/items/zhonyas-hourglass.png'),
    new ItemBuild(3,"Archangel's Staff / Seraph's Embrace", './assets/images/items/seraphs-embrace.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
