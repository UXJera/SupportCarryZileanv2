import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Injectable()
export class RunesService {

  private runesUrl = './assets/json/runes.json';

  constructor(private http: Http) { }

  getData = (): Observable<Response> => {
    return this.http.get(this.runesUrl)
    .map(res => res.json());
  }

  public runeDescription = false;

  toggleRuneDescription() {
    return this.runeDescription = !this.runeDescription;
  }

  domination = {
    primaryImage: "./assets/images/runes/icons/domination/domination-main.png",
    name: "domination",
    keystone: [
        {
          name: "Electrocute",
          image: "./assets/images/runes/icons/domination/domination-keystone-1.png",
          description: "Hitting a champion with 3 separate attacks or abilities in 3s deals bonus adaptive damage.",
          highlightPrimary: false,
          comments: ""
        },
        {
          name: "Predator",
          image: "./assets/images/runes/icons/domination/domination-keystone-2.png",
          description: "Add an active effect to your boots that grants a large boost of MS and causes your next attack or ability to deal bonus adaptive damage.",
          highlightPrimary: true,
          comments: "Predator gives you a big boost of out-of-combat MS for 15 seconds. This is very useful for traversing between lanes or getting back to the fight earlier. The cooldown is affected by Ingenious Hunter, and can be reduced to around 45 seconds."
        },
        {
          name: "Dark Harvest",
          image: "./assets/images/runes/icons/domination/domination-keystone-3.png",
          description: "Champions, large minions, and large monsters drop soul essence on death. Touch souls to absorb them and deal bonus adaptive damage on your next attack based on total souls collected.",
          highlightPrimary: false,
          comments: ""
        }
      ],
      slot1: [
        {
          name: "Cheap Shot",
          image: "./assets/images/runes/icons/domination/domination-slot-1-1.png",
          description: "Deal bonus true damage to enemies with impaired movement or actions.",
          highlightPrimary: true,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Taste of Blood",
          image: "./assets/images/runes/icons/domination/domination-slot-1-2.png",
          description: "Heal when you damage an enemy champion.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Sudden Impact",
          image: "./assets/images/runes/icons/domination/domination-slot-1-3.png",
          description: "Gain a burst of Lethality and Magic Penetration after using a dash, leap, blink, teleport, or when leaving stealth.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot2: [
        {
          name: "Zombie Ward",
          image: "./assets/images/runes/icons/domination/domination-slot-2-1.png",
          description: "After killing a ward, a friendly Zombie Ward is raised in its place. When your wards expire, they also reanimate as Zombie Wards.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Zombie Ward is fantastic because it gives you free wards and punishes enemies for not checking ward locations."
        },
        {
          name: "Ghost Poro",
          image: "./assets/images/runes/icons/domination/domination-slot-2-2.png",
          description: "When you enter brush, a poro appears. It will stay behind and give you vision.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Eyeball Collection",
          image: "./assets/images/runes/icons/domination/domination-slot-2-3.png",
          description: "Collect eyeballs for champion and ward takedowns. Gain permanent AD or AP, adaptive for each eyeball plus bonus upon collection completion.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot3: [
        {
          name: "Ravenous Hunter",
          image: "./assets/images/runes/icons/domination/domination-slot-3-1.png",
          description: "Unique takedowns grant permanent healing from ability damage.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Ingenious Hunter",
          image: "./assets/images/runes/icons/domination/domination-slot-3-2.png",
          description: "Unique takedowns grant permanent Active Item CDR (including trinkets).",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "This talent is incredible if you are using multiple activated items in your build. This talent almost cuts their cooldown in half, which supercharges the value of these items. Items of choice include: <img class=\"image-inline-sm\" src=\"./assets/images/items/banner-of-command.png\" alt=\"Banner of Command Icon\"/> Banner of Command, <img class=\"image-inline-sm\" src=\"./assets/images/items/frost-queens-claim.png\" alt=\"Frost Queen's Claim Icon\"/> Frost Queen's Claim, <img class=\"image-inline-sm\" src=\"./assets/images/items/zzrot-portal.png\" alt=\"ZZ'Rot Portal Icon\"/> ZZ'Rot Portal, <img class=\"image-inline-sm\" src=\"./assets/images/items/redemption.png\" alt=\"Redemption Icon\"/> Redemption, <img class=\"image-inline-sm\" src=\"./assets/images/items/locket-of-the-iron-solari.png\" alt=\"Locket of the Iron Solari Icon\"/> Locket of the Iron Solari."
        },
        {
          name: "Relentless Hunter",
          image: "./assets/images/runes/icons/domination/domination-slot-3-3.png",
          description: "Unique takedowns grant permanent out of combat MS.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ]
    }

    sorcery = {
      primaryImage: "./assets/images/runes/icons/sorcery/sorcery-main.png",
      name: "sorcery",
      keystone: [
        {
          name: "Summon Aery",
          image: "./assets/images/runes/icons/sorcery/sorcery-keystone-1.png",
          description: "Your attack and abilities send Aery to a target, damaging enemies or shielding allies.",
          highlightPrimary: false,
          comments: "Summon Aery is a solid keystone for supports with poke and buffs. The extra damage early in lane does add up, and also the shield triggers when you use Time Warp on allies. This can be used to stop a small amount of damage to an ally or proc certain items like <img class=\"image-inline-sm\" src=\"./assets/images/items/athenes-unholy-grail.png\" alt=\"Athene's Unholy Grail Icon\"/> Athene's Unholy Grail or <img class=\"image-inline-sm\" src=\"./assets/images/items/ardent-censer.png\" alt=\"Ardent Censer Icon\"/> Ardent Censer."
        },
        {
          name: "Arcane Comet",
          image: "./assets/images/runes/icons/sorcery/sorcery-keystone-2.png",
          description: "Damaging a champion with an ability hurls a damaging comet at their location, or if Arcane Comet is on cooldown, reduces its remaining cooldown.",
          highlightPrimary: true,
          comments: "Arcane Comet is the rune of choice because it has a high probability of landing against CC'ed or slowed targets. This also forces players to continue running after the bomb has detonated, which is useful for zoning opponents away from their minions."
        },
        {
          name: "Phase Rush",
          image: "./assets/images/runes/icons/sorcery/sorcery-keystone-3.png",
          description: "Hitting an enemy champion with 3 separate attacks or abilities grants a burst of MS.",
          highlightPrimary: false,
          comments: ""
        }
      ],
      slot1: [
        {
          name: "Nullifying Orb",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-1-1.png",
          description: "Gain a magic damage shield when taken to low health by magic damage.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Manaflow Band",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-1-2.png",
          description: "Periodically your next ability used has its mana cost refunded and restores some missing mana.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Manaflow Band is incredible because it gives a free spell and returns a percentage of your empty mana every minute. This is crucial in lane where you don't have mana or mana regen items."
        },
        {
          name: "The Ultimate Hat",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-1-3.png",
          description: "Your ultimate's cooldown is reduced. Each time you cast your ultimate, its cooldown is further reduced.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot2: [
        {
          name: "Transcendence",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-2-1.png",
          description: "Gain 10% CDR when you reach level 10. Excess CDR becomes AP or AD, adaptive.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Transcendence is an all-star because it gives a free 10% CDR, and turns extra CDR into AP. This is great because it accelerates the pace toward 40% CDR, and adds value for exceeding the CDR cap of 40%."
        },
        {
          name: "Celerity",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-2-2.png",
          description: "Gain 3% increased MS. Gain extra AP or AD, adaptive based on your bonus MS.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Absolute Focus",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-2-3.png",
          description: "While above 70% health, gain extra adaptive damage.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot3: [
        {
          name: "Scorch",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-3-1.png",
          description: "Your first ability hit every 20s burns champions.",
          highlightPrimary: true,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Waterwalking",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-3-2.png",
          description: "Gain MS and AP or AD, adaptive in the river.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Gathering Storm",
          image: "./assets/images/runes/icons/sorcery/sorcery-slot-3-3.png",
          description: "Gain increasing amounts of AD or AP, adaptive over the course of the game.",
          highlightPrimary: true,
          highlightSecondary: false,
          comments: ""
        }
      ]
    }

    resolve = {
      primaryImage: "./assets/images/runes/icons/resolve/resolve-main.png",
      name: "resolve",
      keystone: [
        {
          name: "Grasp of the Undying",
          image: "./assets/images/runes/icons/resolve/resolve-keystone-1.png",
          description: "Every 4s your next attack on a champion deals bonus magic damage, heals you, and permanently increases your health.",
          highlightPrimary: false,
          comments: ""
        },
        {
          name: "Aftershock",
          image: "./assets/images/runes/icons/resolve/resolve-keystone-2.png",
          description: "After immobilizing an enemy champion gain defenses and later deal a burst of adaptive damage around you.",
          highlightPrimary: false,
          comments: ""
        },
        {
          name: "Guardian",
          image: "./assets/images/runes/icons/resolve/resolve-keystone-3.png",
          description: "Guard allies you cast spells on and those that are very nearby. If you or a guarded ally would take damage, you're both hasted and granted a shield.",
          highlightPrimary: true,
          comments: "Guardian is a simple keystone that provides a small shield to both you and your closest ally if you take damage. This also can be triggered when you speed boost an ally at low health. Many opponents underestimate the shield absorption and fail to execute on an all-in."
        }
      ],
      slot1: [
        {
          name: "Unflinching",
          image: "./assets/images/runes/icons/resolve/resolve-slot-1-1.png",
          description: "After casting a Summoner Spell, gain Tenacity and Slow Resistance for a short duration. Additionally, gain Tenacity and Slow Resistance for each Summoner Spell on cooldown.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Demolish",
          image: "./assets/images/runes/icons/resolve/resolve-slot-1-2.png",
          description: "Charge up a powerful attack against a tower while near it.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Font of Life",
          image: "./assets/images/runes/icons/resolve/resolve-slot-1-3.png",
          description: "Imparing the movement of an enemy champion marks them. Your allies heal when attacking champions you've marked.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Font of Life is the most practical of the three choices, and also provides an outlet for <img class=\"image-inline-sm\" src=\"./assets/images/items/ardent-censer.png\" alt=\"Ardent Censer Icon\"/> Ardent Censer (similar to Stoneborn Pact / Ardent Censer from Season 7)."
        }
      ],
      slot2: [
        {
          name: "Iron Skin",
          image: "./assets/images/runes/icons/resolve/resolve-slot-2-1.png",
          description: "Gain 5 Armor. Heals, including consumables, increase your Armor by 5% temporarily.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "In general, Iron Skin will give you the most value in the early laning phase because AD damage is more prevalent than AP. This is typically the best choice from this row."
        },
        {
          name: "Mirror Shell",
          image: "./assets/images/runes/icons/resolve/resolve-slot-2-2.png",
          description: "Gain 6 Magic Resist. Heals, incluidng consumables, increase your Magic Resist by 5% temporarily.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Mirror Shell is the MR equivalent to Iron Skin, and should only be taken against heavy AP poke lanes, such as <img class=\"image-inline-sm\" src=\"./assets/images/champions/karma.png\" alt=\"Karma Icon\"/> Karma and <img class=\"image-inline-sm\" src=\"./assets/images/champions/brand.png\" alt=\"Brand Icon\"/> Brand."
        },
        {
          name: "Conditioning",
          image: "./assets/images/runes/icons/resolve/resolve-slot-2-3.png",
          description: "After 10 min gain +8 Armor and +8 Magic Resist and increase your Armor and Magic Resist by 5%.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot3: [
        {
          name: "Overgrowth",
          image: "./assets/images/runes/icons/resolve/resolve-slot-3-1.png",
          description: "Gain additional permanent max health when minions or monsters die near you.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Revitalize",
          image: "./assets/images/runes/icons/resolve/resolve-slot-3-2.png",
          description: "Heals and shields are 5% stronger and increased by an additional 10% on low health targets.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Second Wind",
          image: "./assets/images/runes/icons/resolve/resolve-slot-3-3.png",
          description: "After taking damage from an enemy champion heal back some of your missing health over time.",
          highlightPrimary: true,
          highlightSecondary: false,
          comments: ""
        }
      ]
    }

    inspiration = {
      primaryImage: "./assets/images/runes/icons/inspiration/inspiration-main.png",
      name: "inspiration",
      keystone: [
        {
          name: "Unsealed Spellbook",
          image: "./assets/images/runes/icons/inspiration/inspiration-keystone-1.png",
          description: "Get Summoner Shards and exchange them at the shop to change your Summoner Spells during game. Your Summoner Spells have reduced cooldown.",
          highlightPrimary: false,
          comments: ""
        },
        {
          name: "Aftershock",
          image: "./assets/images/runes/icons/inspiration/inspiration-keystone-2.png",
          description: "Your first attack against an enemy champion slows them (per unit cooldown). Slowing champions with active items shoots a freeze ray at them, creating a lingering slow zone.",
          highlightPrimary: false,
          comments: ""
        },
        {
          name: "Kleptomancy",
          image: "./assets/images/runes/icons/inspiration/inspiration-keystone-3.png",
          description: "Your first attack after using an ability grants gold and sometimes consumables.",
          highlightPrimary: true,
          comments: ""
        }
      ],
      slot1: [
        {
          name: "Hextech Flashtraption",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-1-1.png",
          description: "While Flash is on Cooldown it is replaced with Hexflash. Hexflash: Channel, then to blink to a new location.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Biscuit Delivery",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-1-2.png",
          description: "Get a Biscuit every 3 mins, until 12 mins. Biscuits restore health and mana. Consuming a Biscuit permanently increases your max mana.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Having extra sustain in lane is very important, espcially when facing poke lanes. Remember that these restore a percentage of missing health and mana, they are also usable while other potions are healing."
        },
        {
          name: "Perfect Timing",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-1-3.png",
          description: "Gain a free Stopwatch. Stopwatch has a one time use Stasis effect.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot2: [
        {
          name: "Magical Footwear",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-2-1.png",
          description: "You get free boots at 10 min but you cannot buy boots before then. Each takedown you get makes your boots come 30s sooner.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: "In general, Iron Skin will give you the most value in the early laning phase because AD damage is more prevalent than AP. This is typically the best choice from this row."
        },
        {
          name: "Future's Market",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-2-2.png",
          description: "You can enter debt to buy items.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Future's Market allows you to go into debt to help finish items earlier. The downside is that you have to pay back 50g, so be careful not to go \"into debt\" too many times or by a small amount (under 25g)."
        },
        {
          name: "Minion Dematerializer",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-2-3.png",
          description: "Start the game with 6 Minion Dematerializers. Killing minions with the item gives permanent bonus damage vs. that minion type.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot3: [
        {
          name: "Cosmic Insight",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-3-1.png",
          description: "+5% CDR. +5% Max CDR. +5% Summoner Spell CD. +5% item CDR.",
          highlightPrimary: true,
          highlightSecondary: true,
          comments: "Adding an extra 5% CDR to everything is alright, but not as impactful as the early lane sustain from Biscuit Eater or the free gold from Magical Footwear. Only take this if you do not plan on taking Biscuit Eater."
        },
        {
          name: "Approach Velocity",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-3-2.png",
          description: "Bonus MS towards nearby ally champions that are movement impaired or to enemy champions that you impair.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Celestial Body",
          image: "./assets/images/runes/icons/inspiration/inspiration-slot-3-3.png",
          description: "+100 Health permanently. -10% damage to champions and monsters until 10 min.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ]
    }

    precision = {
      primaryImage: "./assets/images/runes/icons/precision/precision-main.png",
      name: "precision",
      keystone: [
        {
          name: "Press the Attack",
          image: "./assets/images/runes/icons/precision/precision-keystone-1.png",
          description: "Hitting an enemy champion 3 consecutive times makes them vulnerable, dealing bonus damage and causing them to take more damage from all sources for 6s.",
          highlightPrimary: false,
          comments: ""
        },
        {
          name: "Lethal Tempo",
          image: "./assets/images/runes/icons/precision/precision-keystone-2.png",
          description: "1.5s after damaging a champion gain a large amount of attack speed. Lethal Tempo allows you to temporarily exceed the attack speed limit.",
          highlightPrimary: false,
          comments: ""
        },
        {
          name: "Fleet Footwork",
          image: "./assets/images/runes/icons/precision/precision-keystone-3.png",
          description: "Attacking and moving builds Energy stacks. At 100 stacks, your next attack heals you and grants increased MS.",
          highlightPrimary: false,
          comments: ""
        }
      ],
      slot1: [
        {
          name: "Overheal",
          image: "./assets/images/runes/icons/precision/precision-slot-1-1.png",
          description: "Excess healing on you becomes a shield.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Triumph",
          image: "./assets/images/runes/icons/precision/precision-slot-1-2.png",
          description: "Takedowns restore 15% of your missing health and grant an additional 25 gold.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Presence of Mind",
          image: "./assets/images/runes/icons/precision/precision-slot-1-3.png",
          description: "For 5s after gaining a level or takedown any mana you spend is fully restored.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot2: [
        {
          name: "Legend: Alacrity",
          image: "./assets/images/runes/icons/precision/precision-slot-2-1.png",
          description: "Takedowns on enemies grant permanent Attack Speed.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: "In general, Iron Skin will give you the most value in the early laning phase because AD damage is more prevalent than AP. This is typically the best choice from this row."
        },
        {
          name: "Legend: Tenacity",
          image: "./assets/images/runes/icons/precision/precision-slot-2-2.png",
          description: "Takedowns on enemies grant permanent Tenacity.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Legend: Bloodline",
          image: "./assets/images/runes/icons/precision/precision-slot-2-3.png",
          description: "Takedowns on enemies grant permanent Lifesteal.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ],
      slot3: [
        {
          name: "Coup De Grace",
          image: "./assets/images/runes/icons/precision/precision-slot-3-1.png",
          description: "Deal more damage to low health enemy champions.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Cut Down",
          image: "./assets/images/runes/icons/precision/precision-slot-3-2.png",
          description: "Deal more damage to champions with more maximum health than you.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        },
        {
          name: "Last Stand",
          image: "./assets/images/runes/icons/precision/precision-slot-3-3.png",
          description: "Deal more damage to champions while you are low on health.",
          highlightPrimary: false,
          highlightSecondary: false,
          comments: ""
        }
      ]
    }

}
