import { Rune } from '../../rune.model';

precisionShortcut =  './assets/images/runes/icons/precision/'

runeArrayPrimary = [
  [ new Rune('Press the Attack', this.precisionShortcut + 'precision-keystone-1.png',
    'Hitting an enemy champion 3 consecutive times makes them vulnerable, dealing bonus damage and causing them to take more damage from all sources for 6s.'),
    new Rune('Lethal Tempo', this.precisionShortcut + 'precision-keystone-2.png',
    '1.5s after damaging a champion gain a large amount of attack speed. Lethal Tempo allows you to temporarily exceed the attack speed limit.'),
    new Rune('Fleet Footwork', this.precisionShortcut + 'precision-keystone-3.png',
    "Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased MS."),
  ],
  [
    new Rune('Overheal', this.precisionShortcut + 'precision-slot-1-1.png',
    'Excess healing on you becomes a shield.'),
    new Rune('Triumph', this.precisionShortcut + 'precision-slot-1-2.png',
    'Takedowns restore 15% of your missing health and grant an additional 25 gold.'),
    new Rune('Presence of Mind', this.precisionShortcut + 'precision-slot-1-3.png',
    "For 5s after gaining a level or takedown any mana you spend is fully restored."),
  ],
  [
    new Rune('Legend: Alactriy', this.precisionShortcut + 'precision-slot-2-1.png',
    'Takedowns on enemies grant permanent Attack Speed.'),
    new Rune("Legend: Tenacity", this.precisionShortcut + 'precision-slot-2-2.png',
    'Takedowns on enemies grant permanent Tenacity.'),
    new Rune('Legend: Bloodline', this.precisionShortcut + 'precision-slot-2-3.png',
    'Takedowns on enemies grant permanent Lifesteal'),
  ],
  [
    new Rune("Coup De Grace", this.precisionShortcut + 'precision-slot-3-1.png',
    'Deal more damage to low health enemy champions.'),
    new Rune('Cut Down', this.precisionShortcut + 'precision-slot-3-2.png',
    'Deal more damage to champions with more maximum health than you.'),
    new Rune('Last Stand', this.precisionShortcut + 'precision-slot-3-3.png',
    'Deal more damage to champions while you are low on health.'),
  ],
];

runeArraySecondary = [
  [
    new Rune('Overheal', this.precisionShortcut + 'precision-slot-1-1.png',
    'Excess healing on you becomes a shield.'),
    new Rune('Triumph', this.precisionShortcut + 'precision-slot-1-2.png',
    'Takedowns restore 15% of your missing health and grant an additional 25 gold.'),
    new Rune('Presence of Mind', this.precisionShortcut + 'precision-slot-1-3.png',
    "For 5s after gaining a level or takedown any mana you spend is fully restored."),
  ],
  [
    new Rune('Legend: Alactriy', this.precisionShortcut + 'precision-slot-2-1.png',
    'Takedowns on enemies grant permanent Attack Speed.'),
    new Rune("Legend: Tenacity", this.precisionShortcut + 'precision-slot-2-2.png',
    'Takedowns on enemies grant permanent Tenacity.'),
    new Rune('Legend: Bloodline', this.precisionShortcut + 'precision-slot-2-3.png',
    'Takedowns on enemies grant permanent Lifesteal'),
  ],
  [
    new Rune("Coup De Grace", this.precisionShortcut + 'precision-slot-3-1.png',
    'Deal more damage to low health enemy champions.'),
    new Rune('Cut Down', this.precisionShortcut + 'precision-slot-3-2.png',
    'Deal more damage to champions with more maximum health than you.'),
    new Rune('Last Stand', this.precisionShortcut + 'precision-slot-3-3.png',
    'Deal more damage to champions while you are low on health.'),
  ],
];
