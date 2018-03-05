import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';

import { ItemsUtilityComponent } from './items-utility/items-utility.component';
import { ItemsDamageComponent } from './items-damage/items-damage.component';
import { ItemsTankComponent } from './items-tank/items-tank.component';
import { ItemsHybridComponent } from './items-hybrid/items-hybrid.component';

import { ItemsUtilityElementComponent } from './items-utility/items-utility-element/items-utility-element.component';
import { ItemsDamageElementComponent } from './items-damage/items-damage-element/items-damage-element.component';
import { ItemsTankElementComponent } from './items-tank/items-tank-element/items-tank-element.component';
import { ItemsHybridElementComponent } from './items-hybrid/items-hybrid-element/items-hybrid-element.component';

import { RunesModule } from '../runes/runes.module';
import { RunesService } from '../runes/runes.service';



@NgModule({
  imports: [
    CommonModule,
    RunesModule
  ],
  declarations: [
    ItemsComponent,
    ItemsUtilityComponent,
    ItemsDamageComponent,
    ItemsTankComponent,
    ItemsUtilityElementComponent,
    ItemsDamageElementComponent,
    ItemsTankElementComponent,
    ItemsHybridComponent,
    ItemsHybridElementComponent
  ],
  exports: [
    ItemsUtilityElementComponent,
    ItemsDamageElementComponent,
    ItemsTankElementComponent
  ],
  providers: [RunesService]
})
export class ItemsModule { }
