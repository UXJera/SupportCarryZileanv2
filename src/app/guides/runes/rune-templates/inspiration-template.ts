import { Rune } from '../../rune.model';

inspirationShortcut =  './assets/images/runes/icons/inspiration/'

masteryArrayPrimary = [
  [ new Rune('Unsealed Spellbook', this.inspirationShortcut + 'inspiration-keystone-1.png',
    'While near the shop, you can exchange 1 Summoner Shard to replace a Summoner Spell with a different one. Your Summoner Spell Cooldowns are reduced by 25%.'),
    new Rune('Glacial Augment', this.inspirationShortcut + 'inspiration-keystone-2.png',
    'Basic attacking a champion slows them for 2s. Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 50%.'),
    new Rune('Kleptomancy', this.inspirationShortcut + 'inspiration-keystone-3.png',
    "After using an ability, your next attack on a champoin grants bonus gold. There's also a chance you'll also gain a consumable."),
  ],
  [
    new Rune('Hextech Flashtraption', this.inspirationShortcut + 'inspiration-slot-1-1.png',
    'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel for 2s to blink to a new location. Cannot be used in combat.'),
    new Rune('Biscuit Delivery', this.inspirationShortcut + 'inspiration-slot-1-2.png',
    'Gain a Biscuit every 3 mins, until 12 mins. Biscuits restore 15% of your missing health and mana, and also increase your mana cap by 40.'),
    new Rune('Perfect Timing', this.inspirationShortcut + 'inspiration-slot-1-3.png',
    "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6min. Reduces the cooldown of Guardian Angel, Zhonya's Hourglass, and Gargoyle Stoneplate by 15%."),
  ],
  [
    new Rune('Magical Footwear', this.inspirationShortcut + 'inspiration-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
    new Rune("Future's Market", this.inspirationShortcut + 'inspiration-slot-2-2.png',
    'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
    new Rune('Minion Dematerializer', this.inspirationShortcut + 'inspiration-slot-2-3.png',
    'While above 70% health, gain an adaptive bonus.'),
  ],
  [
    new Rune("Cosmic Insight", this.inspirationShortcut + 'inspiration-slot-3-1.png',
    '+5% CDR. +5% Max CDR. +5% Summoner Spell CD. +5% item CDR'),
    new Rune('Approach Velocity', this.inspirationShortcut + 'inspiration-slot-3-2.png',
    'Gain 25 MS and an adaptive bonus when in the river.'),
    new Rune('Celestial Body', this.inspirationShortcut + 'inspiration-slot-3-3.png',
    'Every 10 min gain an adaptive bonus.'),
  ],
];

masteryArraySecondary = [
  [
    new Rune('Hextech Flashtraption', this.inspirationShortcut + 'inspiration-slot-1-1.png',
    'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel for 2s to blink to a new location. Cannot be used in combat.'),
    new Rune('Biscuit Delivery', this.inspirationShortcut + 'inspiration-slot-1-2.png',
    'Gain a Biscuit every 3 mins, until 12 mins. Biscuits restore 15% of your missing health and mana, and also increase your mana cap by 40.'),
    new Rune('Perfect Timing', this.inspirationShortcut + 'inspiration-slot-1-3.png',
    "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6min. Reduces the cooldown of Guardian Angel, Zhonya's Hourglass, and Gargoyle Stoneplate by 15%."),
  ],
  [
    new Rune('Magical Footwear', this.inspirationShortcut + 'inspiration-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
    new Rune("Future's Market", this.inspirationShortcut + 'inspiration-slot-2-2.png',
    'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
    new Rune('Minion Dematerializer', this.inspirationShortcut + 'inspiration-slot-2-3.png',
    'While above 70% health, gain an adaptive bonus.'),
  ],
  [
    new Rune("Cosmic Insight", this.inspirationShortcut + 'inspiration-slot-3-1.png',
    '+5% CDR. +5% Max CDR. +5% Summoner Spell CD. +5% item CDR'),
    new Rune('Approach Velocity', this.inspirationShortcut + 'inspiration-slot-3-2.png',
    'Gain 25 MS and an adaptive bonus when in the river.'),
    new Rune('Celestial Body', this.inspirationShortcut + 'inspiration-slot-3-3.png',
    'Every 10 min gain an adaptive bonus.'),
  ],
];
