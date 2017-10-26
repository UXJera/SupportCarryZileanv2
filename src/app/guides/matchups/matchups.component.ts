import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchups',
  templateUrl: './matchups.component.html',
  styleUrls: ['./matchups.component.css']
})
export class MatchupsComponent implements OnInit {

  article: Object = {
    title: 'Laning Matchups',
    updated: 'Pre-Season 8'
  }

  constructor() { }

  ngOnInit() {
  }

}
