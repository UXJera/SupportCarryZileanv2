import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillOrderComponent } from './skill-order.component';
import { SkillQMaxComponent } from './skill-q-max/skill-q-max.component';
import { SkillEMaxComponent } from './skill-e-max/skill-e-max.component';
import { SkillQMaxElementComponent } from './skill-q-max/skill-q-max-element/skill-q-max-element.component';
import { SkillEMaxElementComponent } from './skill-e-max/skill-e-max-element/skill-e-max-element.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    SkillOrderComponent,
    SkillQMaxComponent,
    SkillEMaxComponent,
    SkillQMaxElementComponent,
    SkillEMaxElementComponent,
  ],
  exports: [
    SkillQMaxElementComponent,
    SkillEMaxElementComponent
  ]
})
export class SkillOrderModule { }
