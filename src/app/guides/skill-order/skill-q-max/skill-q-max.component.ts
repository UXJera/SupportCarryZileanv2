import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-q-max',
  templateUrl: './skill-q-max.component.html',
  styleUrls: ['./skill-q-max.component.scss']
})
export class SkillQMaxComponent implements OnInit {

  itemList = [
    { index: 0, name: 'q max', img: '' },
    { index: 1, name: 'e max', img: '' },
  ];

  componentSelected;

  onSelect(value) {
    this.componentSelected = value.index;
  }


  constructor() { }

  ngOnInit() {
  }

}
