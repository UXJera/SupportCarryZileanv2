import { Component, OnInit } from '@angular/core';

import { ItemBuild } from '../../item-build.model';

@Component({
  selector: 'app-items-hybrid-element',
  templateUrl: './items-hybrid-element.component.html',
  styleUrls: ['./items-hybrid-element.component.scss']
})
export class ItemsHybridElementComponent implements OnInit {
  itemBuild: ItemBuild[] = [
    new ItemBuild('Remnant of the Watchers', './assets/images/items/remnant-of-the-watchers.png'),
    new ItemBuild('Morellonomicon', './assets/images/items/morellonomicon.png'),
    new ItemBuild('Redemption', './assets/images/items/redemption.png'),
    new ItemBuild('Locket of the Iron Solari', './assets/images/items/locket-of-the-iron-solari.png'),
    new ItemBuild('Control Ward', './assets/images/items/control-ward.png'),
    new ItemBuild('Boots of Lucidity', './assets/images/items/boots-of-lucidity.png'),
    new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  constructor() { }

  ngOnInit() { }

}
