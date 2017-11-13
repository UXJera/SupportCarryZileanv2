import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsUtilityComponent } from './items-utility/items-utility.component';
import { ItemsDamageComponent } from './items-damage/items-damage.component';
import { ItemsTankComponent } from './items-tank/items-tank.component';
import { ItemsUtilityElementComponent } from './items-utility/items-utility-element/items-utility-element.component';
import { ItemsDamageElementComponent } from './items-damage/items-damage-element/items-damage-element.component';
import { ItemsTankElementComponent } from './items-tank/items-tank-element/items-tank-element.component';

@NgModule({
  imports: [
    CommonModule,
    //ItemsRoutingModule
  ],
  declarations: [
    ItemsComponent,
    ItemsUtilityComponent,
    ItemsDamageComponent,
    ItemsTankComponent,
    ItemsUtilityElementComponent,
    ItemsDamageElementComponent,
    ItemsTankElementComponent
  ],
  exports: [
    ItemsUtilityElementComponent,
    ItemsDamageElementComponent,
    ItemsTankElementComponent
  ]
})
export class ItemsModule { }
