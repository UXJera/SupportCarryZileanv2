import { Component, OnInit } from '@angular/core';
import { ItemBuild } from '../../item-build.model';

@Component({
  selector: 'app-items-damage-element',
  templateUrl: './items-damage-element.component.html',
  styleUrls: ['./items-damage-element.component.scss']
})
export class ItemsDamageElementComponent implements OnInit {

  itemBuild: ItemBuild[] = [
    new ItemBuild('Eye of the Watchers', './assets/images/items/eye-of-the-watchers.png'),
    new ItemBuild('Morellonomicon', './assets/images/items/morellonomicon.png'),
    new ItemBuild('Liandri\'s Torment', './assets/images/items/liandris-torment.png'),
    new ItemBuild('Rabadons Deathcap', './assets/images/items/rabadons-deathcap.png'),
    new ItemBuild('Control Ward', './assets/images/items/control-ward.png'),
    new ItemBuild('Sorcerer\'s Shoes', './assets/images/items/sorcerers-shoes.png'),
    new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
