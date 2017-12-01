import { Component, OnInit } from '@angular/core';
import SummonerHelper from '../../../api/http-helper/summoner.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    console.log(await SummonerHelper.getSummonerByName('supportCarryZil'));
  }

}
