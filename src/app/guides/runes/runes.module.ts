import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunesComponent } from './runes.component';
import { RunesUtilityComponent } from './runes-utility/runes-utility.component';
import { RunesOffensiveComponent } from './runes-offensive/runes-offensive.component';
import { RunesDefensiveComponent } from './runes-defensive/runes-defensive.component';
import { RunesUtilityElementComponent } from './runes-utility/runes-utility-element/runes-utility-element.component';
import { RunesOffensiveElementComponent } from './runes-offensive/runes-offensive-element/runes-offensive-element.component';
import { RunesDefensiveElementComponent } from './runes-defensive/runes-defensive-element/runes-defensive-element.component';

import { RunesService } from './runes.service';
import { RunesSplitPushComponent } from './runes-split-push/runes-split-push.component';
import { RunesSplitPushElementComponent } from './runes-split-push/runes-split-push-element/runes-split-push-element.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RunesComponent,
    RunesUtilityComponent,
    RunesOffensiveComponent,
    RunesDefensiveComponent,
    RunesUtilityElementComponent,
    RunesOffensiveElementComponent,
    RunesDefensiveElementComponent,
    RunesSplitPushComponent,
    RunesSplitPushElementComponent],
  exports: [
    RunesUtilityElementComponent,
    RunesOffensiveElementComponent,
    RunesDefensiveElementComponent
  ],
  providers: [
    RunesService
  ]
})
export class RunesModule { }
