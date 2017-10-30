import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-q-max-element',
  templateUrl: './skill-q-max-element.component.html',
  styleUrls: ['./skill-q-max-element.component.scss']
})
export class SkillQMaxElementComponent implements OnInit {

  imagePath = "assets/images/skill-order/qmax.jpg";
  imageLink = "assets/images/skill-order/qmax-big.jpg"


  constructor() { }

  ngOnInit() {
  }

}
