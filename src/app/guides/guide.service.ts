import { Injectable } from '@angular/core';

import { Guide } from './guide.model';

@Injectable()
export class GuideService {



  private itemGuides: Guide[];

  componentSelected;

  onSelect(value) {
    for (const items of this.itemGuides) {
      items.selected = false;
    }
    const componentSelected = value.index;
    value.selected = true;
    return componentSelected;
  }

  constructor() { }

}
