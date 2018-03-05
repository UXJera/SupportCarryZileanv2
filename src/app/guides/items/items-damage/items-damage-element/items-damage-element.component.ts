import { Component, OnInit } from '@angular/core';
import { ItemBuild } from '../../item-build.model';

@Component({
  selector: 'app-items-damage-element',
  templateUrl: './items-damage-element.component.html',
  styleUrls: ['./items-damage-element.component.scss']
})
export class ItemsDamageElementComponent implements OnInit {

  itemBuild: ItemBuild[] = [
    new ItemBuild('Remnant of the Watchers: \&nbsp 100', './assets/images/items/remnant-of-the-watchers.png'),
    new ItemBuild('Archangel\'s Staff', './assets/images/items/archangels-staff.png'),
    new ItemBuild('Morellonomicon', './assets/images/items/morellonomicon.png'),
    //new ItemBuild('Liandri\'s Torment', './assets/images/items/liandris-torment.png'),
    new ItemBuild('Rabadons Deathcap', './assets/images/items/rabadons-deathcap.png'),
    new ItemBuild('Control Ward', './assets/images/items/control-ward.png'),
    new ItemBuild('Sorcerer\'s Shoes', './assets/images/items/sorcerers-shoes.png'),
    new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
