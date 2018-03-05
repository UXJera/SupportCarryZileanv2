import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemsService implements OnInit {


  imageFolder = './assets/images/items/';

  itemLib = {

    archangelsStaff: {
      name: 'Archangel\'s Staff',
      image: this.imageFolder + 'archangels-staff.png',
      price: '3600',


    },

    ardentCenser: {
      name: 'Ardent Censer',
      itemCode: 3504,
      image: this.imageFolder + 'ardent-censer.png',
      price: 2300,
      stats: [
          '60 Ability Power',
          '10% Cooldown Reduction',
          'Unique: 10% Heal and Shield Power',
          '50% Base Mana Regeneration'
        ],
      passive: [
        'Unique: Heals and shields on allied champions (excluding yourself) enhance you and them with FRENZY for 6 seconds.',
        'FRENZY: Grants +10% - 30% (based on target\'s level) attack speed and 5 - 20 (based on target\'s level) bonus on-hit magic damage.'
      ]
    }

  }

  constructor() { }

  ngOnInit() {
  }

}
