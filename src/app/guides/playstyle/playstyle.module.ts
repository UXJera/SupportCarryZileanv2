import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaystyleComponent } from './playstyle.component';
import { PlaystyleAggressiveComponent } from './playstyle-aggressive/playstyle-aggressive.component';
import { PlaystyleReactiveComponent } from './playstyle-reactive/playstyle-reactive.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlaystyleComponent, PlaystyleAggressiveComponent, PlaystyleReactiveComponent]
})
export class PlaystyleModule { }
