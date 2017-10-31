import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-tank',
  templateUrl: './items-tank.component.html',
  styleUrls: ['./items-tank.component.scss']
})
export class ItemsTankComponent implements OnInit {

  itemSetCode = `{"title":"Tanky Zilean","associatedMaps":[],"associatedChampions":[26],"blocks":[{"items":[{"id":"2055","count":1},{"id":"2003","count":1},{"id":"3303","count":1},{"id":"3301","count":1},{"id":"3341","count":1},{"id":"3364","count":1}],"type":"Flexible Zilean"},{"items":[{"id":"2049","count":1},{"id":"3098","count":1},{"id":"3096","count":1},{"id":"3024","count":1},{"id":"3801","count":1},{"id":"1001","count":1}],"type":"Basics"},{"items":[{"id":"2301","count":1},{"id":"2302","count":1},{"id":"3800","count":1},{"id":"3109","count":1},{"id":"3190","count":1},{"id":"3102","count":1},{"id":"3158","count":1}],"type":"Core Build"},{"items":[{"id":"2138","count":1},{"id":"2139","count":1}],"type":"Elixir"}]}`;

  constructor() { }

  ngOnInit() {
  }

}
