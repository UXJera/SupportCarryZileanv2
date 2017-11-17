import { Component, OnInit } from '@angular/core';

import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-offensive-element',
  templateUrl: './runes-offensive-element.component.html',
  styleUrls: ['./runes-offensive-element.component.scss']
})
export class RunesOffensiveElementComponent implements OnInit {

  constructor() { }
  toggled = false;

  images: Object = {
    detailed: '../assets/images/runes/offensive/offensive-detail-sd.jpg',
    brief: '../assets/images/runes/offensive/offensive-brief-sd.jpg',
  }

  imagesHD: Object = {
    detailed: '../assets/images/runes/offensive/offensive-detail-hd.jpg',
    brief: '../assets/images/runes/offensive/offensive-brief-hd.jpg'
  }

  onToggle() {
    this.toggled = !this.toggled;
  }

  toggleDescription = false;
  onToggleDescription() {
    this.toggleDescription = !this.toggleDescription;
    console.log('Toggled')
  }

  runePrimarySrc = './assets/images/runes/icons/sorcery/sorcery-main.png';
  runeSecondarySrc = './assets/images/runes/icons/domination/domination-main.png';
  sorceryShortcut =  './assets/images/runes/icons/sorcery/'
  dominationShortcut =  './assets/images/runes/icons/domination/'

  masteryArrayPrimary = [
    [ new Rune('Summon Aery', this.sorceryShortcut + 'sorcery-keystone-1.png',
      'Your attack and abilities send Aery to a target, damaging enemies or shielding allies.',true),
      new Rune('Arcane Comet', this.sorceryShortcut + 'sorcery-keystone-2.png',
      'Damaging a champion with an ability hurls a damaging comet at their location, or if Arcane Comet is on cooldown, recudes its remaining cooldown.'),
      new Rune('Phase Rush', this.sorceryShortcut + 'sorcery-keystone-3.png',
      "Hitting an enemy champion with 3 separate attacks or abilities grants a burst of MS."),
    ],
    [
      new Rune('Nulifying Orb', this.sorceryShortcut + 'sorcery-slot-1-1.png',
      'When you take magic damage that would reduce your health below 30%, gain a shield that absorbs magic damage based on level for 4s.'),
      new Rune('Manaflow Band', this.sorceryShortcut + 'sorcery-slot-1-2.png',
      'Every 60s, your next ability used has its mana cost refunded, and restores 8% of your missing mana.',true),
      new Rune('The Ultimate Hat', this.sorceryShortcut + 'sorcery-slot-1-3.png',
      "Your ultimate's cooldown is reduced by 5%. Each time you cast your ultimate, its cooldown is reduced by 2%, up to 10%.",true),
    ],
    [
      new Rune('Transcendence', this.sorceryShortcut + 'sorcery-slot-2-1.png',
      'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.',true),
      new Rune('Celerity', this.sorceryShortcut + 'sorcery-slot-2-2.png',
      'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
      new Rune('Absolute Focus', this.sorceryShortcut + 'sorcery-slot-2-3.png',
      'While above 70% health, gain an adaptive bonus.'),
    ],
    [
      new Rune('Scorch', this.sorceryShortcut + 'sorcery-slot-3-1.png',
      'Your next ability hit sets champions on fire dealing 30-60 damage based on level after 1s.',true),
      new Rune('Waterwalking', this.sorceryShortcut + 'sorcery-slot-3-2.png',
      'Gain 25 MS and an adaptive bonus when in the river.'),
      new Rune('Gathering Storm', this.sorceryShortcut + 'sorcery-slot-3-3.png',
      'Every 10 min gain an adaptive bonus.',true),
    ],
  ];

  masteryArraySecondary = [
    [
      new Rune('Cheap Shot', this.dominationShortcut + 'domination-slot-1-1.png',
      'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel for 2s to blink to a new location. Cannot be used in combat.',true),
      new Rune('Taste of Blood', this.dominationShortcut + 'domination-slot-1-2.png',
      'Gain a Biscuit every 3 mins, until 12 mins. Biscuits restore 15% of your missing health and mana, and also increase your mana cap by 40.'),
      new Rune('Sudden Impact', this.dominationShortcut + 'domination-slot-1-3.png',
      "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6min. Reduces the cooldown of Guardian Angel, Zhonya's Hourglass, and Gargoyle Stoneplate by 15%."),
    ],
    [
      new Rune('Zombie Ward', this.dominationShortcut + 'domination-slot-2-1.png',
      'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.',true),
      new Rune("Ghost Poro", this.dominationShortcut + 'domination-slot-2-2.png',
      'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
      new Rune('Eyeball Collection', this.dominationShortcut + 'domination-slot-2-3.png',
      'While above 70% health, gain an adaptive bonus.'),
    ],
    [
      new Rune("Ravenous Hunter", this.dominationShortcut + 'domination-slot-3-1.png',
      '+5% CDR. +5% Max CDR. +5% Summoner Spell CD. +5% item CDR'),
      new Rune('Ingenions Hunter', this.dominationShortcut + 'domination-slot-3-2.png',
      'Gain 25 MS and an adaptive bonus when in the river.'),
      new Rune('Relentless Hunter', this.dominationShortcut + 'domination-slot-3-3.png',
      'Every 10 min gain an adaptive bonus.'),
    ],
  ];

  ngOnInit() {
  }

}
