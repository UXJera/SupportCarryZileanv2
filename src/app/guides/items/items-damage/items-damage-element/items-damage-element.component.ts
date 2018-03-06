import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-items-damage-element',
  templateUrl: './items-damage-element.component.html',
  styleUrls: ['./items-damage-element.component.scss']
})
export class ItemsDamageElementComponent implements OnInit {

  itemBuild = [];

  items: any;

  constructor(private itemsService: ItemsService) {
    this.items = this.itemsService.itemLib;
  }

  ngOnInit() {
    this.itemBuild = [
      this.items.eyeOfTheWatchers,
      this.items.archangelsStaff,
      this.items.morellonomicon,
      this.items.rabadonsDeathcap,
      this.items.controlWard,
      this.items.sorcerersShoes,
      this.items.sweeper
    ]
  }

}
