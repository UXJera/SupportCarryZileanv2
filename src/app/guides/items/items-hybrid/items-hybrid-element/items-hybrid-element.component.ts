import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../items.service';

@Component({
  selector: 'app-items-hybrid-element',
  templateUrl: './items-hybrid-element.component.html',
  styleUrls: ['./items-hybrid-element.component.scss']
})
export class ItemsHybridElementComponent implements OnInit {

  itemBuild = [];

  items: any;

  constructor(private itemsService: ItemsService) {
    this.items = this.itemsService.itemLib;
  }

  ngOnInit() {
    this.itemBuild = [
      this.items.eyeOfTheWatchers,
      this.items.archangelsStaff,
      this.items.redemption,
      this.items.locketOfTheIronSolari,
      this.items.controlWard,
      this.items.bootsOfMobility,
      this.items.sweeper
    ]
  }

}
