import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ArticlesComponent } from './articles.component';
import { CdrComponent } from './cdr/cdr.component';
// import { ItemsComponent } from './items/items.component';


const articlesRoutes: Routes = [
  {path: '', component: ArticlesComponent, children: [
    // {path: 'items', component: ItemsComponent}
    {path: 'articles/cdr', component: CdrComponent},
    // {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    // {path: ':id', component: RecipeDetailComponent},
    // {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(articlesRoutes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {

}
