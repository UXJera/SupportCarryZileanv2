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

  inspirationShortcut =  './assets/images/runes/icons/inspiration/';
  resolveShortcut =  './assets/images/runes/icons/resolve/';

  runePrimarySrc = './assets/images/runes/icons/inspiration/inspiration-main.png';
  runeSecondarySrc = './assets/images/runes/icons/resolve/resolve-main.png';

  runeArrayPrimary = [
    [ new Rune('Unsealed Spellbook', this.inspirationShortcut + 'inspiration-keystone-1.png',
      'Get Summoner Shards and exchange them at the shop to change your Summoner Spells during game. Your Summoner Spells have reduced cooldown.'),
      new Rune('Glacial Augment', this.inspirationShortcut + 'inspiration-keystone-2.png',
      'Your first attack against an enemy champion slows them (per unit cooldown). Slowing champions with active items shoots a freeze ray at them, creating a lingering slow zone.'),
      new Rune('Kleptomancy', this.inspirationShortcut + 'inspiration-keystone-3.png',
      'Your first attack after using an ability grants gold and sometimes consumables.', true),
    ],
    [
      new Rune('Hextech Flashtraption', this.inspirationShortcut + 'inspiration-slot-1-1.png',
      'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel, then to blink to a new location.'),
      new Rune('Biscuit Delivery', this.inspirationShortcut + 'inspiration-slot-1-2.png',
      'Get a Biscuit every 3 mins, until 12 mins. Biscuits restore health and mana. Consuming a Biscuit permanently increases your max mana.', true),
      new Rune('Perfect Timing', this.inspirationShortcut + 'inspiration-slot-1-3.png',
      'Gain a free Stopwatch. Stopwatch has a one time use Stasis effect.'),
    ],
    [
      new Rune('Magical Footwear', this.inspirationShortcut + 'inspiration-slot-2-1.png',
      'You get free boots at 10 min but you cannot buy boots before then. Each takedown you get makes your boots come 30s sooner.', true),
      new Rune('Future\'s Market', this.inspirationShortcut + 'inspiration-slot-2-2.png',
      'You can enter debt to buy items.'),
      new Rune('Minion Dematerializer', this.inspirationShortcut + 'inspiration-slot-2-3.png',
      'Start the game with 6 Minion Dematerializers. Killing minions with the item gives permanent bonus damage vs. that minion type.'),
    ],
    [
      new Rune('Cosmic Insight', this.inspirationShortcut + 'inspiration-slot-3-1.png',
      '+5% CDR. +5% Max CDR. +5% Summoner Spell CD. +5% item CDR', true),
      new Rune('Approach Velocity', this.inspirationShortcut + 'inspiration-slot-3-2.png',
      'Bonus MS towards nearby ally champions that are movement impaired or to enemy champions that you impair.'),
      new Rune('Celestial Body', this.inspirationShortcut + 'inspiration-slot-3-3.png',
      '+100 Health permanently. -10% damage to champions and monsters until 10 min.'),
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
