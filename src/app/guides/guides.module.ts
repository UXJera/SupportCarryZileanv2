import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { ItemsModule } from './items/items.module';
import { RunesModule } from './runes/runes.module';
import { SpellsModule } from './spells/spells.module';
import { PlaystyleModule } from './playstyle/playstyle.module';

import { GuidesComponent } from './guides.component';

import { MatchupsComponent } from './matchups/matchups.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TricksComponent } from './tricks/tricks.component';

@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    ItemsModule,
    RunesModule,
    SpellsModule,
    PlaystyleModule,
  ],
  declarations: [
    GuidesComponent,
    MatchupsComponent,
    LandingPageComponent,
    TricksComponent,
  ]
})
export class GuidesModule { }
