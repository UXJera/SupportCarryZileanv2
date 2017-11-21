import { Component, OnInit } from '@angular/core';

import { ItemBuild } from '../../item-build.model';

@Component({
  selector: 'app-items-utility-element',
  templateUrl: './items-utility-element.component.html',
  styleUrls: ['./items-utility-element.component.scss']
})
export class ItemsUtilityElementComponent implements OnInit {

  itemBuild: ItemBuild[] = [
    new ItemBuild('Eye of the Watchers', './assets/images/items/eye-of-the-watchers.png'),
    new ItemBuild('Athenes Unholy Grail', './assets/images/items/athenes-unholy-grail.png'),
    new ItemBuild('Redemption', './assets/images/items/redemption.png'),
    new ItemBuild('Locket of the Iron Solari', './assets/images/items/locket-of-the-iron-solari.png'),
    new ItemBuild('Control Ward', './assets/images/items/control-ward.png'),
    new ItemBuild('Boots of Lucidity', './assets/images/items/boots-of-lucidity.png'),
    new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
