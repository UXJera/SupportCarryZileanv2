import { Rune } from '../../rune.model';

sorceryShortcut =  './assets/images/runes/icons/sorcery/'

masteryArrayPrimary = [
  [ new Rune('Summon Aery', this.sorceryShortcut + 'sorcery-keystone-1.png',
    'Your attack and abilities send Aery to a target, damaging enemies or shielding allies.'),
    new Rune('Arcane Comet', this.sorceryShortcut + 'sorcery-keystone-2.png',
    'Damaging a champion with an ability hurls a damaging comet at their location, or if Arcane Comet is on cooldown, recudes its remaining cooldown.'),
    new Rune('Phase Rush', this.sorceryShortcut + 'sorcery-keystone-3.png',
    "Hitting an enemy champion with 3 separate attacks or abilities grants a burst of MS."),
  ],
  [
    new Rune('Nulifying Orb', this.sorceryShortcut + 'sorcery-slot-1-1.png',
    'When you take magic damage that would reduce your health below 30%, gain a shield that absorbs magic damage based on level for 4s.'),
    new Rune('Manaflow Band', this.sorceryShortcut + 'sorcery-slot-1-2.png',
    'Every 60s, your next ability used has its mana cost refunded, and restores 8% of your missing mana.'),
    new Rune('The Ultimate Hat', this.sorceryShortcut + 'sorcery-slot-1-3.png',
    "Your ultimate's cooldown is reduced by 5%. Each time you cast your ultimate, its cooldown is reduced by 2%, up to 10%."),
  ],
  [
    new Rune('Transcendence', this.sorceryShortcut + 'sorcery-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
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

masteryArraySecondary = [
  [
    new Rune('Nulifying Orb', this.sorceryShortcut + 'sorcery-slot-1-1.png',
    'When you take magic damage that would reduce your health below 30%, gain a shield that absorbs magic damage based on level for 4s.'),
    new Rune('Manaflow Band', this.sorceryShortcut + 'sorcery-slot-1-2.png',
    'Every 60s, your next ability used has its mana cost refunded, and restores 8% of your missing mana.'),
    new Rune('The Ultimate Hat', this.sorceryShortcut + 'sorcery-slot-1-3.png',
    "Your ultimate's cooldown is reduced by 5%. Each time you cast your ultimate, its cooldown is reduced by 2%, up to 10%."),
  ],
  [
    new Rune('Transcendence', this.sorceryShortcut + 'sorcery-slot-2-1.png',
    'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.'),
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
