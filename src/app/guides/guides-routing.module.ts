import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { GuidesComponent } from './guides.component';
import { ItemsComponent } from './items/items.component';
import { RunesComponent } from './runes/runes.component';
import { SpellsComponent }  from './spells/spells.component';
import { LaningComponent } from './laning/laning.component';
import { MatchupsComponent } from './matchups/matchups.component';


const guidesRoutes: Routes = [
  {path: '', component: GuidesComponent, children: [
    {path: '', component: LandingPageComponent},
    {path: 'guides/items', component: ItemsComponent},
    //{path: 'guides/items', loadChildren: './guides/items/items.module#ItemsModule'},
    {path: 'guides/runes', component: RunesComponent},
    {path: 'guides/spells', component: SpellsComponent},
    {path: 'guides/playstyle', component: LaningComponent},
    {path: 'guides/matchups', component: MatchupsComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(guidesRoutes)],
  exports: [RouterModule],
})
export class GuidesRoutingModule {

}
