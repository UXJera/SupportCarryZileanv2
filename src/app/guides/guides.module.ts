import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { ItemsModule } from './items/items.module';
import { RunesModule } from './runes/runes.module';
import { LaningModule } from './laning/laning.module';

import { GuidesComponent } from './guides.component';
import { SpellsComponent } from './spells/spells.component';

import { MatchupsComponent } from './matchups/matchups.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TricksComponent } from './tricks/tricks.component';
import { LaningAggressiveComponent } from './laning/laning-aggressive/laning-aggressive.component';
import { LaningReactiveComponent } from './laning/laning-reactive/laning-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    ItemsModule,
    RunesModule,
    LaningModule
  ],
  declarations: [
    GuidesComponent,
    SpellsComponent,
    MatchupsComponent,
    LandingPageComponent,
    TricksComponent,
  ]
})
export class GuidesModule { }
