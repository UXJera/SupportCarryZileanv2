import { Rune } from '../../rune.model';

precisionShortcut =  './assets/images/runes/icons/precision/'

masteryArrayPrimary = [
  [ new Rune('Press the Attack', this.precisionShortcut + 'precision-keystone-1.png',
    'While near the shop, you can exchange 1 Summoner Shard to replace a Summoner Spell with a different one. Your Summoner Spell Cooldowns are reduced by 25%.'),
    new Rune('Lethal Tempo', this.precisionShortcut + 'precision-keystone-2.png',
    'Basic attacking a champion slows them for 2s. Slowing a champion with active items shoots a freeze ray through them, freezing the nearby ground for 5s, slowing all units inside by 50%.'),
    new Rune('Fleet Footwork', this.precisionShortcut + 'precision-keystone-3.png',
    "After using an ability, your next attack on a champoin grants bonus gold. There's also a chance you'll also gain a consumable."),
  ],
  [
    new Rune('Overheal', this.precisionShortcut + 'precision-slot-1-1.png',
    'While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel for 2s to blink to a new location. Cannot be used in combat.'),
    new Rune('Triumph', this.precisionShortcut + 'precision-slot-1-2.png',
    'Gain a Biscuit every 3 mins, until 12 mins. Biscuits restore 15% of your missing health and mana, and also increase your mana cap by 40.'),
    new Rune('Presence of Mind', this.precisionShortcut + 'precision-slot-1-3.png',
    "Start the game with a Commencing Stopwatch that transforms into a Stopwatch after 6min. Reduces the cooldown of Guardian Angel, Zhonya's Hourglass, and Gargoyle Stoneplate by 15%."),
  ],
  [
    new Rune('Legend: Alactriy', this.precisionShortcut + 'precision-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
    new Rune("Legend: Tenacity", this.precisionShortcut + 'precision-slot-2-2.png',
    'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
    new Rune('Legend: Bloodline', this.precisionShortcut + 'precision-slot-2-3.png',
    'While above 70% health, gain an adaptive bonus.'),
  ],
  [
    new Rune("Coup De Grace", this.precisionShortcut + 'precision-slot-3-1.png',
    '+5% CDR. +5% Max CDR. +5% Summoner Spell CD. +5% item CDR'),
    new Rune('Cut Down', this.precisionShortcut + 'precision-slot-3-2.png',
    'Gain 25 MS and an adaptive bonus when in the river.'),
    new Rune('Last Stand', this.precisionShortcut + 'precision-slot-3-3.png',
    'Every 10 min gain an adaptive bonus.'),
  ],
];

masteryArraySecondary = [
  [
    new Rune('Nulifying Orb', this.precisionShortcut + 'precision-slot-1-1.png',
    'When you take magic damage that would reduce your health below 30%, gain a shield that absorbs magic damage based on level for 4s.'),
    new Rune('Manaflow Band', this.precisionShortcut + 'precision-slot-1-2.png',
    'Every 60s, your next ability used has its mana cost refunded, and restores 8% of your missing mana.'),
    new Rune('The Ultimate Hat', this.precisionShortcut + 'precision-slot-1-3.png',
    "Your ultimate's cooldown is reduced by 5%. Each time you cast your ultimate, its cooldown is reduced by 2%, up to 10%."),
  ],
  [
    new Rune('Transcendence', this.precisionShortcut + 'precision-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
    new Rune('Celerity', this.precisionShortcut + 'precision-slot-2-2.png',
    'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
    new Rune('Absolute Focus', this.precisionShortcut + 'precision-slot-2-3.png',
    'While above 70% health, gain an adaptive bonus.'),
  ],
  [
    new Rune('Scorch', this.precisionShortcut + 'precision-slot-3-1.png',
    'Your next ability hit sets champions on fire dealing 30-60 damage based on level after 1s.'),
    new Rune('Waterwalking', this.precisionShortcut + 'precision-slot-3-2.png',
    'Gain 25 MS and an adaptive bonus when in the river.'),
    new Rune('Gathering Storm', this.precisionShortcut + 'precision-slot-3-3.png',
    'Every 10 min gain an adaptive bonus.'),
  ],
];
