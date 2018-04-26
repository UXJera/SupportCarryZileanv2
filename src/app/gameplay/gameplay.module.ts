import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { GameplayComponent } from './gameplay.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
  ],
  declarations: [GameplayComponent],
  providers: [GameplayComponent]
})
export class GameplayModule { }
