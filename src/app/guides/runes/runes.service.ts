import { Injectable } from '@angular/core';

@Injectable()
export class RunesService {

  constructor() { }

  runeDescription = false;
  discussion1 = false;

  toggleRuneDescription() {
    console.log("Toggled set to: " + !this.runeDescription);
    return this.runeDescription = !this.runeDescription;
  }

  toggleDiscussion1() {
    console.log("Toggled set to: " + !this.discussion1);
    return this.discussion1 = !this.discussion1;
  }
}
