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

  inspirationShortcut =  './assets/images/runes/icons/inspiration/'
  resolveShortcut =  './assets/images/runes/icons/resolve/'

  runePrimarySrc = './assets/images/runes/icons/inspiration/inspiration-main.png';
  runeSecondarySrc = './assets/images/runes/icons/resolve/resolve-main.png';

  runeArrayPrimary = [
    [ new Rune('Unsealed Spellbook', this.inspirationShortcut + 'inspiration-keystone-1.png',
      'While near the shop, you can exchange 1 Summoner Shard to replace a Summoner Spell with a different one. Your Summoner Spell Cooldowns are reduced by 25%.'),
      new Rune('Glacial Augment', this.inspirationShortcut + 'inspiration-keystone-2.png',
      'Basic attacking a champion slows them for 2s. Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 50%.'),
      new Rune('Kleptomancy', this.inspirationShortcut + 'inspiration-keystone-3.png',
      "After using an ability, your next attack on a champoin grants bonus gold. There's also a chance you'll also gain a consumable.",true),
    ],
    [
      new Rune('Hextech Flashtraption', this.inspirationShortcut + 'inspiration-slot-1-1.png',
      'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel for 2s to blink to a new location. Cannot be used in combat.'),
      new Rune('Biscuit Delivery', this.inspirationShortcut + 'inspiration-slot-1-2.png',
      'Gain a Biscuit every 3 mins, until 12 mins. Biscuits restore 15% of your missing health and mana, and also increase your mana cap by 40.',true),
      new Rune('Perfect Timing', this.inspirationShortcut + 'inspiration-slot-1-3.png',
      "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6min. Reduces the cooldown of Guardian Angel, Zhonya's Hourglass, and Gargoyle Stoneplate by 15%."),
    ],
    [
      new Rune('Magical Footwear', this.inspirationShortcut + 'inspiration-slot-2-1.png',
      'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.',true),
      new Rune("Future's Market", this.inspirationShortcut + 'inspiration-slot-2-2.png',
      'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
      new Rune('Minion Dematerializer', this.inspirationShortcut + 'inspiration-slot-2-3.png',
      'While above 70% health, gain an adaptive bonus.'),
    ],
    [
      new Rune("Cosmic Insight", this.inspirationShortcut + 'inspiration-slot-3-1.png',
      '+5% CDR. +5% Max CDR. +5% Summoner Spell CD. +5% item CDR',true),
      new Rune('Approach Velocity', this.inspirationShortcut + 'inspiration-slot-3-2.png',
      'Gain 25 MS and an adaptive bonus when in the river.'),
      new Rune('Celestial Body', this.inspirationShortcut + 'inspiration-slot-3-3.png',
      'Every 10 min gain an adaptive bonus.'),
    ],
  ];

  runeArraySecondary = [
    [
      new Rune('Unflinching', this.resolveShortcut + 'resolve-slot-1-1.png',
      'After casting a Summoner Spell, gain Tenacity and Slow Resistance for a short duration. Additionally, gain Tenacity and Slow Resistance for each Summoner Spell on cooldown.'),
      new Rune('Demolish', this.resolveShortcut + 'resolve-slot-1-2.png',
      'Charge up a powerful attack against a tower while near it.'),
      new Rune('Font of Life', this.resolveShortcut + 'resolve-slot-1-3.png',
      "Imparing the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked.",true),
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
      'After taking damage from an enemy champion heal back some of your missing health over time.'),
    ],
  ];

  ngOnInit() {
  }

}
