import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-e-max-element',
  templateUrl: './skill-e-max-element.component.html',
  styleUrls: ['./skill-e-max-element.component.scss']
})
export class SkillEMaxElementComponent implements OnInit {

  imgAlt = 'E Max';
  imagePath = "assets/images/skill-order/emax.jpg";
  imageLink = "assets/images/skill-order/emax-big.jpg"

  constructor() { }

  ngOnInit() {
  }

}
