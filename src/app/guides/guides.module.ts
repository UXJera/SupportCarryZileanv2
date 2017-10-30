import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { ItemsModule } from './items/items.module';
import { RunesModule } from './runes/runes.module';
import { SpellsModule } from './spells/spells.module';
import { PlaystyleModule } from './playstyle/playstyle.module';
import { MatchupsModule } from './matchups/matchups.module';
import { SkillOrderModule } from './skill-order/skill-order.module';

import { GuidesComponent } from './guides.component';

import { GuidesLandingComponent } from './guides-landing/guides-landing.component';


@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    ItemsModule,
    RunesModule,
    SpellsModule,
    PlaystyleModule,
    MatchupsModule,
    SkillOrderModule
  ],
  declarations: [
    GuidesComponent,
    GuidesLandingComponent,
  ]
})
export class GuidesModule { }
