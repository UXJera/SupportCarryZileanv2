import { NgModule } from '@angular/core';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';

import { ArticlesModule } from '../articles/articles.module';
import { GuidesModule } from '../guides/guides.module';
import { GameplayModule } from '../gameplay/gameplay.module';
import { VideoContentModule } from '../video-content/video-content.module';
import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    ArticlesModule,
    GuidesModule,
    SharedModule,
    GameplayModule,
    VideoContentModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
