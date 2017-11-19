import { Component, OnInit } from '@angular/core';
import { ItemBuild } from '../../item-build.model';

@Component({
  selector: 'app-items-damage-element',
  templateUrl: './items-damage-element.component.html',
  styleUrls: ['./items-damage-element.component.scss']
})
export class ItemsDamageElementComponent implements OnInit {

  itemBuild: ItemBuild[] = [
    new ItemBuild(0, 'Eye of the Watchers', './assets/images/items/eye-of-the-watchers.png'),
    new ItemBuild(1, 'Morellonomicon', './assets/images/items/morellonomicon.png'),
    // new ItemBuild(2, 'Zhonya's Hourglass', './assets/images/items/zhonyas-hourglass.png'),
    new ItemBuild(2, 'Liandri\'s Torment', './assets/images/items/liandris-torment.png'),
    new ItemBuild(3, 'Rabadons Deathcap', './assets/images/items/rabadons-deathcap.png'),
    // new ItemBuild(4, 'Archangel's Staff / Seraph's Embrace', './assets/images/items/seraphs-embrace.png'),
    new ItemBuild(4, 'Sorcerer\'s Shoes', './assets/images/items/sorcerers-shoes.png'),
    new ItemBuild(5, 'Control Ward', './assets/images/items/control-ward.png'),
    new ItemBuild(6, 'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
