import { Component, OnInit } from '@angular/core';
import { RunesService } from '../../runes.service';

import { Rune } from '../../rune.model';

@Component({
  selector: 'app-runes-offensive-element',
  templateUrl: './runes-offensive-element.component.html',
  styleUrls: ['./runes-offensive-element.component.scss']
})
export class RunesOffensiveElementComponent implements OnInit {

  constructor(private runesService: RunesService) { }

  toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }


  primaryRune = 'sorcery';
  secondaryRune = 'inspiration';

  sorceryShortcut =  './assets/images/runes/icons/sorcery/';
  inspirationShortcut =  './assets/images/runes/icons/inspiration/';

  runePrimarySrc = './assets/images/runes/icons/' + this.primaryRune + '/' + this.primaryRune + '-main.png';
  runeSecondarySrc = './assets/images/runes/icons/' + this.secondaryRune + '/' + this.secondaryRune + '-main.png';

  runeArrayPrimary = [
    [ new Rune('Summon Aery', this.sorceryShortcut + 'sorcery-keystone-1.png',
      'Your attack and abilities send Aery to a target, damaging enemies or shielding allies.', true),
      new Rune('Arcane Comet', this.sorceryShortcut + 'sorcery-keystone-2.png',
      'Damaging a champion with an ability hurls a damaging comet at their location, or if Arcane Comet is on cooldown, recudes its remaining cooldown.'),
      new Rune('Phase Rush', this.sorceryShortcut + 'sorcery-keystone-3.png',
      'Hitting an enemy champion with 3 separate attacks or abilities grants a burst of MS.'),
    ],
    [
      new Rune('Nulifying Orb', this.sorceryShortcut + 'sorcery-slot-1-1.png',
      'When you take magic damage that would reduce your health below 30%, gain a shield that absorbs magic damage based on level for 4s.'),
      new Rune('Manaflow Band', this.sorceryShortcut + 'sorcery-slot-1-2.png',
      'Every 60s, your next ability used has its mana cost refunded, and restores 8% of your missing mana.', true),
      new Rune('The Ultimate Hat', this.sorceryShortcut + 'sorcery-slot-1-3.png',
      'Your ultimate\'s cooldown is reduced by 5%. Each time you cast your ultimate, its cooldown is reduced by 2%, up to 10%.'),
    ],
    [
      new Rune('Transcendence', this.sorceryShortcut + 'sorcery-slot-2-1.png',
      'Gain 10% CDR when you reach level 10. Each percent of CDR exceeding the CDR limit is converted to an adaptive bonus.', true),
      new Rune('Celerity', this.sorceryShortcut + 'sorcery-slot-2-2.png',
      'Gain 4% increased MS and add 8% of your bonus MS as an adaptive bonus.'),
      new Rune('Absolute Focus', this.sorceryShortcut + 'sorcery-slot-2-3.png',
      'While above 70% health, gain an adaptive bonus.'),
    ],
    [
      new Rune('Scorch', this.sorceryShortcut + 'sorcery-slot-3-1.png',
      'Your next ability hit sets champions on fire dealing 30-60 damage based on level after 1s.', true),
      new Rune('Waterwalking', this.sorceryShortcut + 'sorcery-slot-3-2.png',
      'Gain 25 MS and an adaptive bonus when in the river.'),
      new Rune('Gathering Storm', this.sorceryShortcut + 'sorcery-slot-3-3.png',
      'Every 10 min gain an adaptive bonus.', true),
    ],
  ];

  runeArraySecondary = [
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
      'You get free boots at 10 min but you cannot buy boots before then. Each takedown you get makes your boots come 30s sooner.'),
      new Rune('Future\'s Market', this.inspirationShortcut + 'inspiration-slot-2-2.png',
      'You can enter debt to buy items.', true),
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

  ngOnInit() {
  }

}
