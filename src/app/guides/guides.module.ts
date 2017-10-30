import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { ItemsModule } from './items/items.module';
import { RunesModule } from './runes/runes.module';
import { SpellsModule } from './spells/spells.module';
import { PlaystyleModule } from './playstyle/playstyle.module';
import { MatchupsModule } from './matchups/matchups.module';

import { GuidesComponent } from './guides.component';

import { GuidesLandingComponent } from './guides-landing/guides-landing.component';
import { SkillOrderComponent } from './skill-order/skill-order.component';

@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    ItemsModule,
    RunesModule,
    SpellsModule,
    PlaystyleModule,
    MatchupsModule
  ],
  declarations: [
    GuidesComponent,
    GuidesLandingComponent,
    SkillOrderComponent,
  ]
})
export class GuidesModule { }
