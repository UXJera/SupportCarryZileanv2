import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpellsComponent } from './spells.component';
import { SpellsQComponent } from './spells-q/spells-q.component';
import { SpellsWComponent } from './spells-w/spells-w.component';
import { SpellsEComponent } from './spells-e/spells-e.component';
import { SpellsRComponent } from './spells-r/spells-r.component';
import { SpellsPComponent } from './spells-p/spells-p.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SpellsComponent,
    SpellsQComponent,
    SpellsWComponent,
    SpellsEComponent,
    SpellsRComponent,
    SpellsPComponent]
})
export class SpellsModule { }
