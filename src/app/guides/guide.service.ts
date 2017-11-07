import { Injectable } from '@angular/core';

import { Guide } from './guide.model';

@Injectable()
export class GuideService {



  private itemGuides: Guide[];

  //componentSelected;

  onSelect(value) {
    for (let items of this.itemGuides) {
      items.selected = false;
    }
    let componentSelected = value.index;
    value.selected = true;
    return componentSelected;
  }

  constructor() { }

}
