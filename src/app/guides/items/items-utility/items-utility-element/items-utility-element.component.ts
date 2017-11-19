import { Component, OnInit } from '@angular/core';

import { ItemBuild } from '../../item-build.model';

@Component({
  selector: 'app-items-utility-element',
  templateUrl: './items-utility-element.component.html',
  styleUrls: ['./items-utility-element.component.scss']
})
export class ItemsUtilityElementComponent implements OnInit {

  itemBuild: ItemBuild[] = [
    new ItemBuild(0, 'Eye of the Watchers', './assets/images/items/eye-of-the-watchers.png'),
    new ItemBuild(1, 'Ardent Censer', './assets/images/items/ardent-censer.png'),
    new ItemBuild(2, 'Redemption', './assets/images/items/redemption.png'),
    new ItemBuild(3, 'Locket of the Iron Solari', './assets/images/items/locket-of-the-iron-solari.png'),
    new ItemBuild(4, 'Knight\'s Vow', './assets/images/items/knights-vow.png'),
    new ItemBuild(5, 'Ninja Tabi', './assets/images/items/ninja-tabi.png'),
    new ItemBuild(6, 'Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
