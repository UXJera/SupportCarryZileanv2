import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesComponent } from './articles.component';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CdrComponent } from './cdr/cdr.component';


@NgModule({
  imports: [
    CommonModule,
    ArticlesRoutingModule,
  ],
  declarations: [ArticlesComponent, CdrComponent]
})
export class ArticlesModule { }
