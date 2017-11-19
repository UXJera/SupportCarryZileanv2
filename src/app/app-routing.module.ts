import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {HomeComponent} from './core/home/home.component';
import {GameplayComponent} from './gameplay/gameplay.component';
import {AboutComponent} from './core/about/about.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'guides', loadChildren: './guides/guides.module#GuidesModule'},
  {path: 'articles', loadChildren: './articles/articles.module#ArticlesModule'},
  {path: 'gameplay', component: GameplayComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {}
