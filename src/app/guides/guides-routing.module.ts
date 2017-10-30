import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { GuidesLandingComponent } from './guides-landing/guides-landing.component';

import { GuidesComponent } from './guides.component';

import { ItemsComponent } from './items/items.component';
import { RunesComponent } from './runes/runes.component';
import { SpellsComponent }  from './spells/spells.component';
import { PlaystyleComponent } from './playstyle/playstyle.component';
import { MatchupsComponent } from './matchups/matchups.component';
import { SkillOrderComponent } from './skill-order/skill-order.component';


const guidesRoutes: Routes = [
  {path: '', component: GuidesComponent, children: [
    {path: '', component: GuidesLandingComponent},
    {path: 'guides/items', component: ItemsComponent},
    {path: 'guides/runes', component: RunesComponent},
    {path: 'guides/spells', component: SpellsComponent},
    {path: 'guides/playstyle', component: PlaystyleComponent},
    {path: 'guides/matchups', component: MatchupsComponent},
    {path: 'guides/skill-order', component: SkillOrderComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(guidesRoutes)],
  exports: [RouterModule],
})
export class GuidesRoutingModule {

}
