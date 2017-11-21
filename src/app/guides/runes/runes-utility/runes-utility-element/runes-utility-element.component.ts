import { Component, OnInit } from '@angular/core';
import { Rune } from '../../rune.model';
@Component({
  selector: 'app-runes-utility-element',
  templateUrl: './runes-utility-element.component.html',
  styleUrls: ['./runes-utility-element.component.scss']
})
export class RunesUtilityElementComponent implements OnInit {

  constructor() { }

  toggleDescription = false;
  onToggleDescription() {
    this.toggleDescription = !this.toggleDescription;
  }

  sorceryShortcut =  './assets/images/runes/icons/sorcery/'
  resolveShortcut =  './assets/images/runes/icons/resolve/';

  runePrimarySrc = './assets/images/runes/icons/sorcery/sorcery-main.png';
  runeSecondarySrc = './assets/images/runes/icons/resolve/resolve-main.png';

  runeArrayPrimary = [
    [ new Rune('Summon Aery', this.sorceryShortcut + 'sorcery-keystone-1.png',
      'Your attack and abilities send Aery to a target, damaging enemies or shielding allies.', true),
      new Rune('Arcane Comet', this.sorceryShortcut + 'sorcery-keystone-2.png',
      'Damaging a champion with an ability hurls a damaging comet at their location, or if Arcane Comet is on cooldown, reduces its remaining cooldown.'),
      new Rune('Phase Rush', this.sorceryShortcut + 'sorcery-keystone-3.png',
      'Hitting an enemy champion with 3 separate attacks or abilities grants a burst of MS.'),
    ],
    [
      new Rune('Nullifying Orb', this.sorceryShortcut + 'sorcery-slot-1-1.png',
      'Gain a magic damage shield when taken to low health by magic damage.'),
      new Rune('Manaflow Band', this.sorceryShortcut + 'sorcery-slot-1-2.png',
      'Periodically your next ability used has its mana cost refunded and restores some missing mana.', true),
      new Rune('The Ultimate Hat', this.sorceryShortcut + 'sorcery-slot-1-3.png',
      'Your ultimate\'s cooldown is reduced. Each time you cast your ultimate, its cooldown is further reduced.', true),
    ],
    [
      new Rune('Transcendence', this.sorceryShortcut + 'sorcery-slot-2-1.png',
      'Gain 10% CDR when you reach level 10. Excess CDR becomes AP or AD, adaptive.', true),
      new Rune('Celerity', this.sorceryShortcut + 'sorcery-slot-2-2.png',
      'Gain 4% increased MS. Gain extra AP or AD, adaptive based on your bonus MS.'),
      new Rune('Absolute Focus', this.sorceryShortcut + 'sorcery-slot-2-3.png',
      'While above 70% health, gain extra adaptive damage.'),
    ],
    [
      new Rune('Scorch', this.sorceryShortcut + 'sorcery-slot-3-1.png',
      'Your first ability hit every 20s burns champions.', true),
      new Rune('Waterwalking', this.sorceryShortcut + 'sorcery-slot-3-2.png',
      'Gain SMS and AP or AD, adaptive in the river.'),
      new Rune('Gathering Storm', this.sorceryShortcut + 'sorcery-slot-3-3.png',
      'Gain increasing amounts of AD or AP, adaptive over the course of the game.', true),
    ],
  ];

  runeArraySecondary = [
    [
      new Rune('Unflinching', this.resolveShortcut + 'resolve-slot-1-1.png',
      'After casting a Summoner Spell, gain Tenacity and Slow Resistance for a short duration. Additionally, gain Tenacity and Slow Resistance for each Summoner Spell on cooldown.'),
      new Rune('Demolish', this.resolveShortcut + 'resolve-slot-1-2.png',
      'Charge up a powerful attack against a tower while near it.'),
      new Rune('Font of Life', this.resolveShortcut + 'resolve-slot-1-3.png',
      'Imparing the movement of an enemy champion marks them. Your allies heal when attacking champions you\'ve marked.', true),
    ],
    [
      new Rune('Iron Skin', this.resolveShortcut + 'resolve-slot-2-1.png',
      'Gain 5 Armor. Heals, incluing consumables, increase your Armor by 5% temporarily.', true),
      new Rune('Mirror Shell', this.resolveShortcut + 'resolve-slot-2-2.png',
      'Gain 5 Magic Resist. Heals, incluing consumables, increase your Magic Resist by 5% temporarily.', true),
      new Rune('Conditioning', this.resolveShortcut + 'resolve-slot-2-3.png',
      'After 10 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 5%.', true),
    ],
    [
      new Rune('Overgrowth', this.resolveShortcut + 'resolve-slot-3-1.png',
      'Gain additional permanent max health when minions or monsters die near you.'),
      new Rune('Revitalize', this.resolveShortcut + 'resolve-slot-3-2.png',
      'Heals and shields are 5% stronger and increased by an addiotional 10% on low health targets.'),
      new Rune('Second Wind', this.resolveShortcut + 'resolve-slot-3-3.png',
      'After taking damage from an enemy champion heal back some of your missing health over time.'),
    ],
  ];

  ngOnInit() {
  }

}
