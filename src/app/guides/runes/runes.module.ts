import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunesComponent } from './runes.component';
import { RunesUtilityComponent } from './runes-utility/runes-utility.component';
import { RunesOffensiveComponent } from './runes-offensive/runes-offensive.component';
import { RunesDefensiveComponent } from './runes-defensive/runes-defensive.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RunesComponent,
    RunesUtilityComponent,
    RunesOffensiveComponent,
    RunesDefensiveComponent]
})
export class RunesModule { }
