import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ItemsComponent } from './items.component';

import { ItemsUtilityComponent } from './items-utility/items-utility.component';
import { ItemsDamageComponent } from './items-damage/items-damage.component';
import { ItemsTankComponent } from './items-tank/items-tank.component';
import { ItemsHybridComponent } from './items-hybrid/items-hybrid.component';

const itemsRoutes: Routes = [
  {path: '', component: ItemsComponent, children: [
    {path: '', component: ItemsComponent},
    {path: 'guides/items/utility', component: ItemsUtilityComponent},
    {path: 'guides/items/tank', component: ItemsTankComponent},
    {path: 'guides/items/hybrid', component: ItemsHybridComponent},
    {path: 'guides/items/damage', component: ItemsDamageComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(itemsRoutes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {

}
