import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaningComponent } from './laning.component';
import { LaningAggressiveComponent } from './laning-aggressive/laning-aggressive.component';
import { LaningReactiveComponent } from './laning-reactive/laning-reactive.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LaningComponent,
    LaningAggressiveComponent,
    LaningReactiveComponent
  ]
})
export class LaningModule { }
