import { Component, OnInit } from '@angular/core';
import { ItemBuild } from '../item-build.model';
@Component({
  selector: 'app-items-damage',
  templateUrl: './items-damage.component.html',
  styleUrls: ['./items-damage.component.scss']
})
export class ItemsDamageComponent implements OnInit {

  alternateView = false;

  onToggleAlternate() {
    this.alternateView = !this.alternateView;
  }

  // Starting Items
  itemBuild1: ItemBuild[] = [
    new ItemBuild('Spelltheifs Edge', './assets/images/items/spellthiefs-edge.png'),
    new ItemBuild('Potion of Healing', './assets/images/items/potion.png'),
    new ItemBuild('Refillable Potion', './assets/images/items/refill-potion.png'),
    new ItemBuild('Trinket Ward', './assets/images/items/trinket-ward.png'),
  ];

  // Early Game Items
  itemBuild2: ItemBuild[] = [
    new ItemBuild('Frostfang', './assets/images/items/frostfang.png'),
    new ItemBuild('Boots', './assets/images/items/boots.png'),
    new ItemBuild('Lost Chapter', './assets/images/items/lost-chapter.png'),
    new ItemBuild('Tear of the Goddess', './assets/images/items/tear.png'),
  ];

  // Mid Game Items
  itemBuild3: ItemBuild[] = [
    new ItemBuild('Frostfang', './assets/images/items/frostfang.png'),
    new ItemBuild('Archangel\'s Staff', './assets/images/items/archangels-staff.png'),
    new ItemBuild('Morellonomicon', './assets/images/items/morellonomicon.png'),
    new ItemBuild('Sorcerer Shoes', './assets/images/items/sorcerers-shoes.png'),
    new ItemBuild('Sweeper Trinket', './assets/images/items/sweeper.png'),
  ];

  // Defensive Optional Items
  itemBuild4: ItemBuild[] = [
    new ItemBuild('Locket of the Iron Solari', './assets/images/items/locket-of-the-iron-solari.png'),
    new ItemBuild('Rylai\'s Crystal Staff', './assets/images/items/rylais.png'),
    new ItemBuild('Banshees Veil', './assets/images/items/banshees-veil.png'),
    new ItemBuild('Zhonya\'s Hourglass', './assets/images/items/zhonyas-hourglass.png'),
    new ItemBuild('Liandri\'s Torment', './assets/images/items/liandris-torment.png'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
