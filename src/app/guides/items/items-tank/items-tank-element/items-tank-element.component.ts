import { Component, OnInit } from '@angular/core';
import { ItemBuild } from '../../item-build.model';

@Component({
  selector: 'app-items-tank-element',
  templateUrl: './items-tank-element.component.html',
  styleUrls: ['./items-tank-element.component.scss']
})
export class ItemsTankElementComponent implements OnInit {

  constructor() { }

  itemBuild: ItemBuild[] = [
    new ItemBuild('Eye of the Oasis', './assets/images/items/eye-of-the-oasis.png'),
    new ItemBuild('Righteous Glory', './assets/images/items/righteous-glory.png'),
    new ItemBuild('Knight\'s Vow', './assets/images/items/knights-vow.png'),
    new ItemBuild('Locket of the Iron Solari', './assets/images/items/locket-of-the-iron-solari.png'),
    new ItemBuild('Control Ward', './assets/images/items/control-ward.png'),
    // new ItemBuild(4Banshee's Veil', './assets/images/items/banshees-veil.png'),
    new ItemBuild('Ninja Tabi', './assets/images/items/ninja-tabi.png'),
    new ItemBuild('Hextech Sweeper', './assets/images/items/sweeper.png')
  ];

  ngOnInit() {
  }

}
