import { Component, OnInit } from '@angular/core';
import { Rune } from '../../rune.model';
import {RunesService} from '../../runes.service';


@Component({
  selector: 'app-runes-split-push-element',
  templateUrl: './runes-split-push-element.component.html',
  styleUrls: ['./runes-split-push-element.component.scss']
})
export class RunesSplitPushElementComponent implements OnInit {

  constructor(private runesService: RunesService) { }

  toggleDescription = false;

  onToggleDescription() {
    return this.toggleDescription = this.runesService.toggleRuneDescription();
  }

  primarySkill = 'domination';
  secondarySkill = 'sorcery';

  sorceryShortcut =  './assets/images/runes/icons/sorcery/'
  dominationShortcut =  './assets/images/runes/icons/domination/';

  runePrimarySrc = './assets/images/runes/icons/domination/domination-main.png';
  runeSecondarySrc = './assets/images/runes/icons/sorcery/sorcery-main.png';

  runeArrayPrimary = [
    [ new Rune('Electrocute', this.dominationShortcut + 'domination-keystone-1.png',
      'Hitting a champion with 3 separate attacks or abilities in 3s deals bonus adaptive damage.'),
      new Rune('Predator', this.dominationShortcut + 'domination-keystone-2.png',
      'Add an active effect to your boots that grants a large boost of MS and causes your next attack or ability to deal bonus adaptive damage.', true),
      new Rune('Dark Harvest', this.dominationShortcut + 'domination-keystone-3.png',
      'Champions, large minions, and large monsters drop soul essence on death. Touch souls to absorb them and deal bonus adaptive damage on your next attack based on total souls collected.'),
    ],
    [
      new Rune('Cheap Shot', this.dominationShortcut + 'domination-slot-1-1.png',
      'Deal bonus true damage to enemies with impaired movement or actions.', true),
      new Rune('Taste of Blood', this.dominationShortcut + 'domination-slot-1-2.png',
      'Heal when you damage an enemy champion.'),
      new Rune('Sudden Impact', this.dominationShortcut + 'domination-slot-1-3.png',
      'Gain a burst of Lethality and Magic Penetration after using a dash, leap, blink, teleport, or when leaving stealth.'),
    ],
    [
      new Rune('Zombie Ward', this.dominationShortcut + 'domination-slot-2-1.png',
      'After killing a ward, a friendly Zombie Ward is raised in its place. When your wards expire, they also reanimate as Zombie Wards.', true),
      new Rune('Ghost Poro', this.dominationShortcut + 'domination-slot-2-2.png',
      'When you enter brush, a poro appears. It will stay behind and give you vision.'),
      new Rune('Eyeball Collection', this.dominationShortcut + 'domination-slot-2-3.png',
      'Collect eyeballs for champion and ward takedowns. Gain permanent AD or AP, adaptive for each eyeball plus bonus upon collection completion.'),
    ],
    [
      new Rune('Ravenous Hunter', this.dominationShortcut + 'domination-slot-3-1.png',
      'Unique takedowns grant permanent healing from ability damage.'),
      new Rune('Ingenious Hunter', this.dominationShortcut + 'domination-slot-3-2.png',
      'Unique takedowns grant permanent Active Item CDR (including trinkets).', true),
      new Rune('Relentless Hunter', this.dominationShortcut + 'domination-slot-3-3.png',
      'Unique takedowns grant permanent out of combat MS.'),
    ],
  ];

  runeArraySecondary = [
    [
      new Rune('Nullifying Orb', this.sorceryShortcut + 'sorcery-slot-1-1.png',
      'Gain a magic damage shield when taken to low health by magic damage.'),
      new Rune('Manaflow Band', this.sorceryShortcut + 'sorcery-slot-1-2.png',
      'Periodically your next ability used has its mana cost refunded and restores some missing mana.', true),
      new Rune('The Ultimate Hat', this.sorceryShortcut + 'sorcery-slot-1-3.png',
      'Your ultimate\'s cooldown is reduced. Each time you cast your ultimate, its cooldown is further reduced.'),
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
      'Your first ability hit every 20s burns champions.'),
      new Rune('Waterwalking', this.sorceryShortcut + 'sorcery-slot-3-2.png',
      'Gain SMS and AP or AD, adaptive in the river.'),
      new Rune('Gathering Storm', this.sorceryShortcut + 'sorcery-slot-3-3.png',
      'Gain increasing amounts of AD or AP, adaptive over the course of the game.'),
    ],
  ];

  ngOnInit() {
  }

}
