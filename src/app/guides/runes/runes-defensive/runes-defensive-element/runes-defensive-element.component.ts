import { Component, OnInit } from '@angular/core';

import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-defensive-element',
  templateUrl: './runes-defensive-element.component.html',
  styleUrls: ['./runes-defensive-element.component.scss']
})
export class RunesDefensiveElementComponent implements OnInit {

  constructor() { }

  toggled = false;
  onToggle() {
    this.toggled = !this.toggled;
  }

  images: Object = {
    detailed: '../assets/images/runes/defensive/defensive-detail-sd.jpg',
    brief: '../assets/images/runes/defensive/defensive-brief-sd.jpg',
  }

  imagesHD: Object = {
    detailed: '../assets/images/runes/defensive/defensive-detail-hd.jpg',
    brief: '../assets/images/runes/defensive/defensive-brief-hd.jpg'
  }

  toggleDescription = false;
  onToggleDescription() {
    this.toggleDescription = !this.toggleDescription;
    console.log('Toggled')
  }

  resolveShortcut =  './assets/images/runes/icons/resolve/'
  sorceryShortcut =  './assets/images/runes/icons/sorcery/'
  runePrimarySrc = './assets/images/runes/icons/resolve/resolve-main.png';
  runeSecondarySrc = './assets/images/runes/icons/sorcery/sorcery-main.png';
  masteryArrayPrimary = [
    [ new Rune('Grasp of the Undying', this.resolveShortcut + 'resolve-keystone-1.png',
      'Every 4s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.'),
      new Rune('Aftershock', this.resolveShortcut + 'resolve-keystone-2.png',
      'After immobilizing an enemy champion gain defenses and later deal a burst of adaptive damage around you.'),
      new Rune('Guardian', this.resolveShortcut + 'resolve-keystone-3.png',
      "Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage, you're both hasted and granted a shield.",true),
    ],
    [
      new Rune('Unflinching', this.resolveShortcut + 'resolve-slot-1-1.png',
      'After casting a Summoner Spell, gain Tenacity and Slow Resistance for a short duration. Additionally, gain Tenacity and Slow Resistance for each Summoner Spell on cooldown.'),
      new Rune('Demolish', this.resolveShortcut + 'resolve-slot-1-2.png',
      'Charge up a powerful attack against a tower while near it.'),
      new Rune('Font of Life', this.resolveShortcut + 'resolve-slot-1-3.png',
      "Imparing the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked",true),
    ],
    [
      new Rune('Iron Skin', this.resolveShortcut + 'resolve-slot-2-1.png',
      'Gain 5 Armor. Heals, incluing consumables, increase your Armor by 5% temporarily.',true),
      new Rune('Mirror Shell', this.resolveShortcut + 'resolve-slot-2-2.png',
      'Gain 5 Magic Resist. Heals, incluing consumables, increase your Magic Resist by 5% temporarily.',true),
      new Rune('Conditioning', this.resolveShortcut + 'resolve-slot-2-3.png',
      'After 10 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 5%.',true),
    ],
    [
      new Rune('Overgrowth', this.resolveShortcut + 'resolve-slot-3-1.png',
      'Gain additional permanent max health when minions or monsters die near you.'),
      new Rune('Revitalize', this.resolveShortcut + 'resolve-slot-3-2.png',
      'Heals and shields are 5% stronger and increased by an addiotional 10% on low health targets.'),
      new Rune('Second Wind', this.resolveShortcut + 'resolve-slot-3-3.png',
      'After taking damage from an enemy champion heal back some of your missing health over time.',true),
    ],
  ];




  masteryArraySecondary = [
    [
      new Rune('Nulifying Orb', this.sorceryShortcut + 'sorcery-slot-1-1.png',
      'When you take magic damage that would reduce your health below 30%, gain a shield that absorbs magic damage based on level for 4s.',true),
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
      'Your next ability hit sets champions on fire dealing 30-60 damage based on level after 1s.'),
      new Rune('Waterwalking', this.sorceryShortcut + 'sorcery-slot-3-2.png',
      'Gain 25 MS and an adaptive bonus when in the river.'),
      new Rune('Gathering Storm', this.sorceryShortcut + 'sorcery-slot-3-3.png',
      'Every 10 min gain an adaptive bonus.'),
    ],
  ];



  ngOnInit() {
  }

}
