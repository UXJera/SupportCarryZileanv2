import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidesRoutingModule } from './guides-routing.module';
import { ItemsModule } from './items/items.module';

import { ItemsComponent } from './items/items.component';
import { GuidesComponent } from './guides.component';
import { RunesComponent } from './runes/runes.component';
import { SpellsComponent } from './spells/spells.component';
import { LaningComponent } from './laning/laning.component';
import { MatchupsComponent } from './matchups/matchups.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TricksComponent } from './tricks/tricks.component';

@NgModule({
  imports: [
    CommonModule,
    GuidesRoutingModule,
    ItemsModule
  ],
  declarations: [
    GuidesComponent,
    RunesComponent,
    SpellsComponent, 
    LaningComponent,
    MatchupsComponent,
    LandingPageComponent,
    TricksComponent
  ]
})
export class GuidesModule { }
