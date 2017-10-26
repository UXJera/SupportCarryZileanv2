import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsComponent } from './items.component';
import { ItemsRoutingModule } from './items-routing.module';
import { ItemsUtilityComponent } from './items-utility/items-utility.component';
import { ItemsDamageComponent } from './items-damage/items-damage.component';
import { ItemsTankComponent } from './items-tank/items-tank.component';

@NgModule({
  imports: [
    CommonModule,
    ItemsRoutingModule
  ],
  declarations: [
    ItemsComponent, 
    ItemsUtilityComponent,
    ItemsDamageComponent,
    ItemsTankComponent
  ]
})
export class ItemsModule { }
