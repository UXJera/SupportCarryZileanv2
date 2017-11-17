import { Rune } from '../../rune.model';

dominationShortcut =  './assets/images/runes/icons/domination/'

runeArrayPrimary = [
  [ new Rune('Electrocute', this.dominationShortcut + 'domination-keystone-1.png',
    'While near the shop, you can exchange 1 Summoner Shard to replace a Summoner Spell with a different one. Your Summoner Spell Cooldowns are reduced by 25%.'),
    new Rune('Predator', this.dominationShortcut + 'domination-keystone-2.png',
    'Basic attacking a champion slows them for 2s. Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 50%.'),
    new Rune('Dark Harvest', this.dominationShortcut + 'domination-keystone-3.png',
    "After using an ability, your next attack on a champoin grants bonus gold. There's also a chance you'll also gain a consumable."),
  ],
  [
    new Rune('Cheap Shot', this.dominationShortcut + 'domination-slot-1-1.png',
    'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel for 2s to blink to a new location. Cannot be used in combat.'),
    new Rune('Taste of Blood', this.dominationShortcut + 'domination-slot-1-2.png',
    'Gain a Biscuit every 3 mins, until 12 mins. Biscuits restore 15% of your missing health and mana, and also increase your mana cap by 40.'),
    new Rune('Sudden Impact', this.dominationShortcut + 'domination-slot-1-3.png',
    "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6min. Reduces the cooldown of Guardian Angel, Zhonya's Hourglass, and Gargoyle Stoneplate by 15%."),
  ],
  [
    new Rune('Zombie Ward', this.dominationShortcut + 'domination-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
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

runeArraySecondary = [
  [
    new Rune('Cheap Shot', this.dominationShortcut + 'domination-slot-1-1.png',
    'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel for 2s to blink to a new location. Cannot be used in combat.'),
    new Rune('Taste of Blood', this.dominationShortcut + 'domination-slot-1-2.png',
    'Gain a Biscuit every 3 mins, until 12 mins. Biscuits restore 15% of your missing health and mana, and also increase your mana cap by 40.'),
    new Rune('Sudden Impact', this.dominationShortcut + 'domination-slot-1-3.png',
    "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6min. Reduces the cooldown of Guardian Angel, Zhonya's Hourglass, and Gargoyle Stoneplate by 15%."),
  ],
  [
    new Rune('Zombie Ward', this.dominationShortcut + 'domination-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
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
