import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-hybrid-element',
  templateUrl: './skill-hybrid-element.component.html',
  styleUrls: ['./skill-hybrid-element.component.scss']
})
export class SkillHybridElementComponent implements OnInit {

  imgAlt = 'Hybrid Skill Order';
  imagePath = 'assets/images/skill-order/hybrid.jpg';
  imageLink = 'assets/images/skill-order/hybrid-big.jpg';

  constructor() { }

  ngOnInit() {
  }

}
