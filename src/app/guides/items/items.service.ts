import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemsService implements OnInit {

  /***** ITEMS UPDATED IN PATCH 8.6 *****/

  imageFolder = './assets/images/items/';

  itemLib = {

    abyssalMask: {
      name: 'Abyssal Mask',
      itemCode: 3001,
      link: 'http://leagueoflegends.wikia.com/wiki/Abyssal_Mask',
      img: this.imageFolder + 'abyssal-mask.png',
      price: 2900,
      stats: [
        '+10% cooldown reduction',
        '+350 health',
        '+55 magic resistance',
        '+300 mana'
      ],
      passive: [
        'UNIQUE – ETERNITY: Restore mana equal to 15% of damage taken from champions. Restore health equal to 20% of mana spent, up to 25 health per cast, while toggle abilities can heal for up to 25 per second.',
        'UNIQUE AURA: Nearby enemy champions take 15% more magic damage (325 range).'
      ],
      active: []
    },

    adaptiveHelm: {
      name: 'Adaptive Helm',
      itemCode: 3194,
      link: 'http://leagueoflegends.wikia.com/wiki/Adaptive_Helm',
      img: this.imageFolder + 'adaptive-helm.png',
      price: 2800,
      stats: [
        '+10% cooldown reduction',
        '+350 health',
        '+100% base health regeneration',
        '+55 magic resistance'
      ],
      passive: [
        'UNIQUE: Taking magic damage from a spell or effect reduces all subsequent magic damage taken from that spell or effect by 20% for 4 seconds. Multiple sources of magic damage can have this effect active at any one time and the duration is tracked separately per source.'
      ],
      active: []
    },

    aegisOfTheLegion: {
      name: 'Aegis of the Legion',
      itemCode: 3105,
      link: 'http://leagueoflegends.wikia.com/wiki/Aegis_of_the_Legion',
      img: this.imageFolder + 'aegis-of-the-legion.png',
      price: 1100,
      stats: [
        '+30 armor',
        '+30 magic resistance'
      ],
      passive: [],
      active: []
    },

    aetherWisp: {
      name: 'Aether Wisp',
      itemCode: 3113,
      link: 'http://leagueoflegends.wikia.com/wiki/Aether_Wisp',
      img: this.imageFolder + 'aether-wisp.png',
      price: 850,
      stats: [
        '+30 ability power'
      ],
      passive: [
        'UNIQUE: +5% movement speed'
      ],
      active: []
    },

    ancientCoin: {
      name: 'Ancient Coin',
      itemCode: 3301,
      link: 'http://leagueoflegends.wikia.com/wiki/Ancient_Coin',
      img: this.imageFolder + 'ancient-coin.png',
      price: 350,
      stats: [
        '+5% cooldown reduction',
        '+Gold 2 per 10 seconds',
        '+5 movement speed'
      ],
      passive: [
        'UNIQUE – FAVOR: Nearby enemy minions, killed by any ally other than you, will sometimes drop a coin that can be picked up to either grant Gold 25 or restore 6% missing mana (minimum 10). Cannon minions will drop a coin as long as you don\'t kill them.',
,
      ],
      active: []
    },

    archangelsStaff: {
      name: 'Archangel\'s Staff',
      itemCode: 3003,
      link: 'http://leagueoflegends.wikia.com/wiki/Archangel\'s_Staff',
      img: this.imageFolder + 'archangels-staff.png',
      price: 3200,
      stats: [
        '+50 ability power',
        '+10% cooldown reduction',
        '+650 mana'
      ],
      passive: [
        'UNIQUE – HASTE: Grants an additional 10% cooldown reduction.',
        'UNIQUE – AWE: Grants bonus ability power equal to 3% maximum mana. Refunds 25% of mana spent.',
        'UNIQUE – MANA CHARGE: Grants a charge every 4 seconds, up to 3 charges. Each mana expenditure consumes a charge and grants +8 mana, up to a maximum of 750 mana.',
        'Transforms into Seraph\'s Embrace at +750 mana.'
      ],
      active: []
    },

    ardentCenser: {
      name: 'Ardent Censer',
      itemCode: 3504,
      link: 'http://leagueoflegends.wikia.com/wiki/Ardent_Censer',
      img: this.imageFolder + 'ardent-censer.png',
      price: 2300,
      stats: [
          '+60 ability power',
          '+10% cooldown reduction',
          '+Unique: 10% heal and shield power',
          '+50% base mana regeneration'
        ],
      passive: [
        'UNIQUE: Heals and shields on allied champions (excluding yourself) enhance you and them with FRENZY for 6 seconds.',
        'FRENZY: Grants +10% - 30% (based on target\'s level) attack speed and 5 - 20 (based on target\'s level) bonus on-hit magic damage.'
      ],
      active: []

    },

    athenesUnholyGrail: {
      name: 'Athene\'s Unholy Grail',
      itemCode: 3174,
      link: 'http://leagueoflegends.wikia.com/wiki/Athene\'s_Unholy_Grail',
      img: this.imageFolder + 'athenes-unholy-grail.png',
      price: 2100,
      stats: [
        '+30 ability power',
        '+10% cooldown reduction',
        '+30 magic resistance',
        '+100% base mana regeneration'
      ],
      passive: [
        'UNIQUE: Gain 25% of the premitigation damage dealt to champions as Blood Charges, up to 100 - 250 (based on level). Healing or shielding another ally consumes charges equal to 100% of the heal or shield, to heal them, up to the original effect amount.',
        'UNIQUE – DISSONANCE: Gain +5 ability power for every additional 25% base mana regeneration. Disables HARMONY on your other items.'
      ],
      active: []
    },

    bannerOfCommand: {
      name: 'Banner of Command',
      itemCode: 3060,
      link: 'http://leagueoflegends.wikia.com/wiki/Banner_of_Command',
      img: this.imageFolder + 'banner-of-command.png',
      price: 2200,
      stats: [
        '+60 armor',
        '+10% cooldown reduction',
        '+125% base health regeneration',
        '+30 magic resistance'
      ],
      passive: [
        'UNIQUE – POINT RUNNER: Builds up to 20% bonus movement speed over 2 seconds while near turrets, fallen turrets and Void Gates.'
      ],
      active: [
        'UNIQUE – PROMOTE: Greatly increases the power of a lane minion and grants it immunity to magic damage (120 second cooldown) (1200 range).'
      ]
    },

    bansheesVeil: {
      name: 'Banshee\'s Veil',
      itemCode: 3102,
      link: 'http://leagueoflegends.wikia.com/wiki/Banshee\'s_Veil',
      img: this.imageFolder + 'banshees-veil.png',
      price: 3000,
      stats: [
        '+70 ability power',
        '+10% cooldown reduction',
        '+60 magic resistance'
      ],
      passive: [
        'UNIQUE: Grants a Spell Shield spell shield that blocks the next enemy ability. This shield refreshes after no damage is taken from enemy champions for 40 seconds.'
      ],
      active: []
    },

    boots: {
      name: 'Boots of Speed',
      itemCode: 1001,
      link: 'http://leagueoflegends.wikia.com/wiki/Boots_of_Speed',
      img: this.imageFolder + 'boots.png',
      price: 300,
      stats: [
      ],
      passive: [
        'UNIQUE – ENHANCED MOVEMENT: +25 flat movement speed'
      ],
      active: []
    },

    bootsOfLucidity: {
      name: 'Ionian Boots of Lucidity',
      itemCode: 3158,
      link: 'http://leagueoflegends.wikia.com/wiki/Ionian_Boots_of_Lucidity',
      img: this.imageFolder + 'boots-of-lucidity.png',
      price: 900,
      stats: [
        'UNIQUE: +10% cooldown reduction'
      ],
      passive: [
        'UNIQUE – ENHANCED MOVEMENT: +45 flat movement speed',
        'UNIQUE: Reduces summoner spell cooldowns by 10%.'
      ],
      active: []
    },

    bootsOfMobility: {
      name: 'Boots of Mobility',
      itemCode: 3117,
      link: 'http://leagueoflegends.wikia.com/wiki/Boots_of_Mobility',
      img: this.imageFolder + 'boots-of-mobility.png',
      price: 900,
      stats: [],
      passive: [
        'UNIQUE – ENHANCED MOVEMENT: +25 flat movement speed',
        'Increases to +115 flat movement speed when out-of-combat. Receiving damage, dealing damage or debuffing units will put you in-combat, disabling this passive for 5 seconds.'
      ],
      active: []
    },

    bootsOfSwiftness: {
      name: 'Boots of Swiftness',
      itemCode: 3009,
      link: 'http://leagueoflegends.wikia.com/wiki/Boots_of_Swiftness',
      img: this.imageFolder + 'sweeper.png',
      price: 900,
      stats: [],
      passive: [
        'UNIQUE – ENHANCED MOVEMENT: +55 flat movement speed',
        'UNIQUE – SLOW RESIST: Reduces the effectiveness of slows by 25%.'
      ],
      active: []
    },

    chaliceOfHarmony: {
      name: 'Chalice of Harmony',
      itemCode: 3028,
      link: 'http://leagueoflegends.wikia.com/wiki/Chalice',
      img: this.imageFolder + 'chalice-of-harmony.png',
      price: 800,
      stats: [
        '+30 magic resistance',
        '+50% base mana regeneration'
      ],
      passive: [
        'UNIQUE – HARMONY: Gain +25% base health regeneration for every additional 25% base mana regeneration.'
      ],
      active: []
    },

    controlWard: {
      name: 'Control Ward',
      itemCode: 2055,
      link: 'http://leagueoflegends.wikia.com/wiki/Control_Ward',
      img: this.imageFolder + 'control-ward.png',
      price: 75,
      stats: [],
      passive: [],
      active: []
    },

    crystalBracer: {
      name: 'Crystalline Bracer',
      itemCode: 3801,
      link: 'http://leagueoflegends.wikia.com/wiki/Crystalline_Bracer',
      img: this.imageFolder + 'crystal-bracer.png',
      price: 650,
      stats: [
        '+200 health',
        '+50% base health regeneration'
      ],
      passive: [],
      active: []
    },

    eyeOfAscention: {
      name: 'Eye of Ascention',
      itemCode: 3069,
      link: 'http://leagueoflegends.wikia.com/wiki/Eye_of_Ascension',
      img: this.imageFolder + 'eye-of-ascention.png',
      price: 0,
      stats: [
        '+10% cooldown reduction',
        '+2 Gold per 10 seconds',
        '+200 health',
        '+125% base health regeneration',
        '+10 movement speed'
      ],
      passive: [
        'UNIQUE – FAVOR: Nearby enemy minions, killed by any ally other than you, will sometimes drop a coin that can be picked up to either grant 45 Gold or restore 6% missing mana (minimum 10). Cannon minions will drop a coin as long as you don\'t kill them.',

      ],
    },

    eyeOfTheWatchers: {
      name: 'Eye of the Watchers',
      itemCode: 3069,
      link: 'http://leagueoflegends.wikia.com/wiki/Remnant_of_the_Watchers',
      img: this.imageFolder + 'eye-of-the-watchers.png',
      price: 0,
      stats: [
        '+35 ability power',
        '+10% cooldown reduction',
        '+2 Gold per 10 seconds',
        '+200 health',
        '+50% base mana regeneration',
      ],
      passive: [
        'UNIQUE – TRIBUTE: Grants a charge every 10 seconds, up to 3 charges. Damaging spells and attacks against champions and buildings consume a charge, up to one per attack or cast. Consuming a charge deals them 18 bonus magic damage and grants 20 Gold.',

      ],
    },


    faerieCharm: {
      name: 'Faerie Charm',
      itemCode: 1004,
      link: 'http://leagueoflegends.wikia.com/wiki/Faerie_Charm',
      img: this.imageFolder + 'faerie-charm.png',
      price: 125,
      stats: ['+25% base mana regeneration'],
      passive: [],
      active: []
    },

    fiendishCodex: {
      name: 'Fiendish Codex',
      itemCode: 3108,
      link: 'http://leagueoflegends.wikia.com/wiki/Fiendish_Codex',
      img: this.imageFolder + 'fiendish-codex.png',
      price: 900,
      stats: [
        '+30 ability power',
        'UNIQUE: +10% cooldown reduction'
      ],
      passive: [],
      active: []
    },

    forbiddenIdol: {
      name: 'Forbidden Idol',
      itemCode: 3114,
      link: 'http://leagueoflegends.wikia.com/wiki/Forbidden_Idol',
      img: this.imageFolder + 'forbidden-idol.png',
      price: 800,
      stats: [
        'UNIQUE: +10% cooldown reduction',
        'UNIQUE: +8% heal and shield power',
        '+50% base mana regeneration'
      ],
      passive: [],
      active: []
    },

    frostfang: {
      name: 'Frostfang',
      itemCode: 3098,
      link: 'http://leagueoflegends.wikia.com/wiki/Frostfang',
      img: this.imageFolder + 'frostfang.png',
      price: 850,
      stats: [
        '+20 ability power',
        '+10% cooldown reduction',
        '+Gold 2 per 10 seconds',
        '+50% base mana regeneration'
      ],
      passive: [
        'UNIQUE – TRIBUTE: Grants a charge every 10 seconds, up to 3 charges. Damaging spells and attacks against champions and buildings consume a charge, up to one per attack or cast. Consuming a charge deals them 18 bonus magic damage and grants Gold 20. Killing a minion or non-epic monster pauses Tribute generation for 12 seconds per unit slain.',

      ],
      active: []
    },

    glacialShroud: {
      name: 'Glacial Shroud',
      itemCode: 3024,
      link: 'http://leagueoflegends.wikia.com/wiki/Glacial_Shroud',
      img: this.imageFolder + 'glacial-shroud.png',
      price: 900,
      stats: [
        '+20 armor',
        'UNIQUE: +10% cooldown reduction',
        '+250 mana'
      ],
      passive: [],
      active: []
    },

    healthPot: {
      name: 'Health Potion',
      itemCode: 2003,
      link: 'http://leagueoflegends.wikia.com/wiki/Health_Potion',
      img: this.imageFolder + 'health-pot.png',
      price: 50,
      stats: ['Regenerates 5 health every half-second for 15 seconds, restoring a total of 150 health.'],
      passive: [],
      active: []
    },

    hextechGlp: {
      name: 'Hextech GLP-800',
      itemCode: 3030,
      link: 'http://leagueoflegends.wikia.com/wiki/Glp',
      img: this.imageFolder + 'hextech-glp.png',
      price: 2800,
      stats: [
        '+80 ability power',
        '+10% cooldown reduction',
        '+500 mana'
      ],
      passive: [],
      active: [
        'UNIQUE – FROST BOLT: After a small delay, fires a spray of five icy bolts in a cone, which each bolt dealing 100 - 200 (based on level) (+ 20% AP) magic damage and Slow icon slowing by 65%, decaying over 1 second, to the first units hit (40 second cooldown, shared with other Hextech items).'
      ]
    },

    icebornGauntlet: {
      name: 'Iceborn Gauntlet',
      itemCode: 3025,
      link: 'http://leagueoflegends.wikia.com/wiki/Iceborn_Gauntlet',
      img: this.imageFolder + 'iceborn-gauntlet.png',
      price: 2700,
      stats: [
        '+65 armor',
        '+20% cooldown reduction',
        '+500 mana'
      ],
      passive: [
        'UNIQUE – SPELLBLADE: After using an ability, your next basic attack within 10 seconds deals (100% base AD) on-hit bonus damage (1.5 second cooldown).',
        'UNIQUE – ICY ZONE: Triggering Spellblade also deals (100% base AD) physical damage to enemies surrounding the target and creates a icy zone for 2 seconds, which slows enemies within by 30%. The zone has a radius of 180 (+ 55% bonus armor) units.'
      ],
      active: []
    },

    knightsVow: {
      name: 'Knight\'s Vow',
      itemCode: 3109,
      link: 'http://leagueoflegends.wikia.com/wiki/Knight\'s_Vow',
      img: this.imageFolder + 'knights-vow.png',
      price: 2200,
      stats: [
        '+40 armor',
        '+10% cooldown reduction',
        '+250 health'
      ],
      passive: [
        'UNIQUE: If your Partner is nearby, gain 20 armor, and 15% bonus movement speed while moving toward them.',
        'UNIQUE: While within a 1000 range of your Partner, heal for 12% of the damage your Partner deals to champions and redirect 12% of the damage your Partner takes from champions (after reductions) to you as true damage. Both effects are reduced to 6% if the item holder is ranged.'
      ],
      active: ['UNIQUE: Designate an allied champion as your Partner (90 second cooldown).']
    },

    largeRod: {
      name: 'Needlessly Large Rod',
      itemCode: 1058,
      link: 'http://leagueoflegends.wikia.com/wiki/Needlessly_Large_Rod',
      img: this.imageFolder + 'large-rod.png',
      price: 1250,
      stats: ['+60 ability power'],
      passive: [],
      active: []
    },

    liandrisTorment: {
      name: 'Liandri\'s Torment',
      itemCode: 3151,
      link: 'http://leagueoflegends.wikia.com/wiki/Liandry\'s_Torment',
      img: this.imageFolder + 'liandris-torment.png',
      price: 3100,
      stats: [
        '+80 ability power',
        '+300 health'
      ],
      passive: [
        'UNIQUE – MADNESS: Deal 2% increased damage for each second in combat with champions, up to a maximum of 10%.',
        'UNIQUE – TORMENT: Dealing spell damage applies a damage-over-time effect that deals bonus magic damage equal to 1% of target\'s maximum health per second for 3 seconds. This bonus damage is doubled to 2% of target\'s maximum health against slowed or immobilized units, and capped at 100 damage per second against monsters.'
      ],
      active: []
    },

    locketOfTheIronSolari: {
      name: 'Locket of the Iron Solari',
      itemCode: 3190,
      link: 'http://leagueoflegends.wikia.com/wiki/Locket_of_the_Iron_Solari',
      img: this.imageFolder + 'locket-of-the-iron-solari.png',
      price: 2200,
      stats: [
        '+30 armor',
        '+60 magic resistance'
      ],
      passive: [],
      active: [
        'UNIQUE: Grants a decaying shield to nearby allied champions and yourself for up to 2.5 seconds, absorbing up to 60 - 434 (based on highest level between target and caster) (+ 2% - 36% (based on level) of caster\'s bonus health) damage (90 second cooldown) (600 range).']
    },

    lostChapter: {
      name: 'Locket of the Iron Solari',
      itemCode: 3802,
      link: 'http://leagueoflegends.wikia.com/wiki/Lost_Chapter',
      img: this.imageFolder + 'lost-chapter.png',
      price: 1100,
      stats: [
        '+25 ability power',
        '+300 mana'
      ],
      passive: [
        'UNIQUE – HASTE: Grants an additional 10% cooldown reduction.',
        'UNIQUE: Upon leveling, restores 20% of your maximum mana over 3 seconds.'
      ],
      active: []
    },

    ludensEcho: {
      name: 'Luden\'s Echo',
      itemCode: 3285,
      link: 'http://leagueoflegends.wikia.com/wiki/Luden%27s_Echo',
      img: this.imageFolder + 'ludens-echo.png',
      price: 3300,
      stats: [
        '+90 ability power',
        '+10% cooldown reduction',
        '+500 mana'
      ],
      passive: [
        'UNIQUE – HASTE: Grants an additional 10% cooldown reduction.',
        'UNIQUE – ECHO: Gains charges upon moving or casting. At 100 charges, the next instance of ability damage you deal will expend all charges to deal 100 (+ 10% AP) bonus magic damage to the first enemy hit and summon up to 3 lesser bolts that target nearby enemies, prioritizing enemies damaged by the ability and champions over minions.'
      ],
      active: []
    },

    mercuryTreads: {
      name: 'Mercery\'s Treads',
      itemCode: 3111,
      link: 'http://leagueoflegends.wikia.com/wiki/Mercury\'s_Treads',
      img: this.imageFolder + 'mercury-treads.png',
      price: 1100,
      stats: [
        '+25 magic resistance'
      ],
      passive: [
        'UNIQUE – ENHANCED MOVEMENT: +45 flat movement speed',
        'UNIQUE – TENACITY: Reduces the duration of all crowd control effects by 30% (except for Suppression, Stasis, and Displacements).'
      ],
      active: []
    },

    mikaelsCrucible: {
      name: 'Mikael\'s Crucible',
      itemCode: 3222,
      link: 'http://leagueoflegends.wikia.com/wiki/Mikael\'s_Crucible',
      img: this.imageFolder + 'mikaels-crucible.png',
      price: 2100,
      stats: [
        '+10% cooldown reduction',
        'UNIQUE: +20% heal and shield power',
        '+40 magic resistance',
        '+100% base mana regeneration'
      ],
      passive: [
        'UNIQUE – HARMONY: Gain +25% base health regeneration for every additional 25% base mana regeneration.'
      ],
      active: ['UNIQUE: Instantly removes all stuns, roots, taunts, fears, charms, silences and slows on an allied champion, as well as granting 2 seconds of slow immunity. Successfully cleansing an effect will also grant the target 40% bonus movement speed for 2 seconds (120 second cooldown) (750 range).']
    },

    morellonomicon: {
      name: 'Morellonomicon',
      itemCode: 3165,
      link: 'http://leagueoflegends.wikia.com/wiki/Morellonomicon',
      img: this.imageFolder + 'morellonomicon.png',
      price: 3000,
      stats: [
        '+80 ability power',
        '+300 health'
      ],
      passive: [
        'UNIQUE – TOUCH OF DEATH: +15 magic penetration.',
        'UNIQUE – CURSED STRIKE: Dealing magic damage to an enemy champion inflicts them with Grievous Wounds icon Grievous Wounds for 3 seconds.'
      ],
      active: []
    },

    ninjaTabi: {
      name: 'Ninja Tabi',
      itemCode: 3047,
      link: 'http://leagueoflegends.wikia.com/wiki/Ninja_Tabi',
      img: this.imageFolder + 'ninja-tabi.png',
      price: 1100,
      stats: [
        '+30 armor'
      ],
      passive: [
        'UNIQUE: Reduces incoming damage from all basic attacks by 10% (excluding turret shots). Does not reduce damage of on-hit effects, it does however reduce damage of basic attack modifiers.'
      ],
      active: []
    },

    nomadsMedallion: {
      name: 'Nomad\'s Medallion',
      itemCode: 3047,
      link: 'http://leagueoflegends.wikia.com/wiki/Nomad\'s_Medallion',
      img: this.imageFolder + 'nomads-medallion.png',
      price: 850,
      stats: [
        '+10% cooldown reduction',
        '+Gold 2 per 10 seconds',
        '+50% base health regeneration',
        '+10 movement speed'
      ],
      passive: [
        'UNIQUE – FAVOR: Nearby enemy minions, killed by any ally other than you, will sometimes drop a coin that can be picked up to either grant 45 Gold or restore 6% missing mana (minimum 10). Cannon minions will drop a coin as long as you don\'t kill them.',

      ],
      active: []
    },

    oblivionOrb: {
      name: 'Oblivion Orb',
      itemCode: 3916,
      link: 'http://leagueoflegends.wikia.com/wiki/Oblivion_Orb',
      img: this.imageFolder + 'oblivion-orb.png',
      price: 1500,
      stats: [
        '+25 ability power',
        '+200 health'
      ],
      passive: [
        'UNIQUE – TOUCH OF DEATH: +15 magic penetration.'
      ],
      active: []
    },

    rabadonsDeathcap: {
      name: 'Rabadon\'s Deathcap',
      itemCode: 3089,
      link: 'http://leagueoflegends.wikia.com/wiki/Rabadon\'s_Deathcap',
      img: this.imageFolder + 'rabadons-deathcap.png',
      price: 3600,
      stats: [
        '+120 ability power'
      ],
      passive: [
        'UNIQUE: +40% ability power.'
      ],
      active: []
    },

    redemption: {
      name: 'Redemption',
      itemCode: 3107,
      link: 'http://leagueoflegends.wikia.com/wiki/Redemption',
      img: this.imageFolder + 'redemption.png',
      price: 2100,
      stats: [
        '+10% cooldown reduction',
        'UNIQUE: +10% heal and shield power',
        '+200 health',
        '+50% base health regeneration',
        '+150% base mana regeneration'
      ],
      passive: [],
      active: [
        'UNIQUE: You reveal the target area within 5500 for ~3 seconds. After a 2.5 second delay, a beam of light strikes the ground. Allies within the area are healed for 30 - 370 (based on target\'s level), which is increased by 3 × your Heal Power, while enemy champions take 10% of maximum health true damage and enemy minions take 250 true damage (120 second cooldown). Can be used while dead.'
      ]
    },

    refillablePotion: {
      name: 'Refillable Potion',
      itemCode: 2031,
      link: 'http://leagueoflegends.wikia.com/wiki/Refillable_Potion',
      img: this.imageFolder + 'refill-potion.png',
      price: 150,
      stats: [
        'Regenerates 5.21 health every half-second for 12 seconds, restoring a total of 125 health.'
      ],
      passive: ['Holds up to 2 charges that refill upon visiting the store.'],
      active: []
    },

    remnantOfTheAscended: {
      name: 'Remnant of the Ascended',
      itemCode: 3069,
      link: 'http://leagueoflegends.wikia.com/wiki/Remnant_of_the_Ascended',
      img: this.imageFolder + 'remnant-of-the-ascended.png',
      price: 1500,
      stats: [
        '+10% cooldown reduction',
        '+2 Gold per 10 seconds',
        '+200 health',
        '+125% base health regeneration',
        '+10 movement speed'
      ],
      passive: [
        'UNIQUE – FAVOR: Nearby enemy minions, killed by any ally other than you, will sometimes drop a coin that can be picked up to either grant 45 Gold or restore 6% missing mana (minimum 10). Cannon minions will drop a coin as long as you don\'t kill them.',

      ],
      active: []
    },

    remnantOfTheWatchers: {
      name: 'Remnant of the Watchers',
      itemCode: 3092,
      link: 'http://leagueoflegends.wikia.com/wiki/Remnant_of_the_Watchers',
      img: this.imageFolder + 'remnant-of-the-watchers.png',
      price: 1800,
      stats: [
        '+35 ability power',
        '+10% cooldown reduction',
        '+2 Gold per 10 seconds',
        '+200 health',
        '+50% base mana regeneration',
      ],
      passive: [
        'UNIQUE – TRIBUTE: Grants a charge every 10 seconds, up to 3 charges. Damaging spells and attacks against champions and buildings consume a charge, up to one per attack or cast. Consuming a charge deals them 18 bonus magic damage and grants 20 Gold.',

      ],
      active: []
    },

    righteousGlory: {
      name: 'Righteous Glory',
      itemCode: 3800,
      link: 'http://leagueoflegends.wikia.com/wiki/Righteous_Glory',
      img: this.imageFolder + 'righteous-glory.png',
      price: 2650,
      stats: [
        '+30 armor',
        '+10% cooldown reduction',
        '+400 health',
        '+100% base health regeneration',
        '+300 mana',
      ],
      passive: [],
      active: [
        'UNIQUE: For 4 seconds, grants 75% bonus movement speed when moving towards enemies. After the duration or when an enemy champion is within close proximity, you emit a shockwave, slowing nearby enemy champions by 75% for 2 seconds (90 second cooldown).'
      ]
    },

    rodOfAges: {
      name: 'Rod of Ages',
      itemCode: 3027,
      link: 'http://leagueoflegends.wikia.com/wiki/Rod_of_Ages',
      img: this.imageFolder + 'rod-of-ages.png',
      price: 2700,
      stats: [
        '+60 ability power',
        '+300 health',
        '+300 mana',
      ],
      passive: [
        'This item gains 20 health, 10 mana and 4 ability power every minute, up to 10 times, for a maximum of 200 health, 100 mana and 40 ability power.',
        'UNIQUE – ETERNITY: Restore mana equal to 15% of damage taken from champions. Restore health equal to 20% of mana spent, up to 25 health per cast, while toggle abilities can heal for up to 25 per second.',
      ],
      active: []
    },

    rylaisCrystalScepter: {
      name: 'Rylai\'s Crystal Scepter',
      itemCode: 3116,
      link: 'http://leagueoflegends.wikia.com/wiki/Rylai\'s_Crystal_Scepter',
      img: this.imageFolder + 'rylais.png',
      price: 2600,
      stats: [
        '+85 ability power',
        '+300 health',
      ],
      passive: [
        'UNIQUE – ICY: Damaging abilities and pet attacks slow affected units by 20% for 1 second.',
      ],
      active: []
    },

    seraphsEmbrace: {
      name: 'Seraph\'s Embrace',
      itemCode: 3040,
      link: 'http://leagueoflegends.wikia.com/wiki/Seraph\'s_Embrace',
      img: this.imageFolder + 'seraphs-embrace.png',
      price: 3200,
      stats: [
        '+50 ability power',
        '+10% cooldown reduction',
        '+1400 mana',
      ],
      passive: [
        'UNIQUE – HASTE: Grants an additional 10% cooldown reduction.',
        'UNIQUE – AWE: Grants bonus ability power equal to 3% maximum mana. Refunds 25% of mana spent.'
      ],
      active: ['UNIQUE – MANA SHIELD: Drains 15% of your current mana to shield yourself for an equal amount plus 150 for 2 seconds (120 second cooldown).']
    },

    shurelyasReverie: {
      name: 'Shurelya\'s Reverie',
      itemCode: 3069,
      link: 'http://leagueoflegends.wikia.com/wiki/Sorcerer\'s_Shoes',
      img: this.imageFolder + 'sorcerers-shoes.png',
      price: 1100,
      stats: [
        '+40 ability power',
        'UNIQUE: +10% cooldown reduction',
        '+200 health',
      ],
      passive: ['UNIQUE: +8% movement speed.'],
      active: ['UNIQUE: Grants yourself and nearby allies 40% bonus movement speed for 3 seconds (60 second cooldown).']
    },

    sorcerersShoes: {
      name: 'Sorcerer\'s Shoes',
      itemCode: 3020,
      link: 'http://leagueoflegends.wikia.com/wiki/Sorcerer\'s_Shoes',
      img: this.imageFolder + 'sorcerers-shoes.png',
      price: 1100,
      stats: ['+18 magic penetration'],
      passive: ['UNIQUE – ENHANCED MOVEMENT: +45 flat movement speed'],
      active: []
    },

    spellbinder: {
      name: 'Spellbinder',
      itemCode: 3907,
      link: 'http://leagueoflegends.wikia.com/wiki/Spellbinder',
      img: this.imageFolder + 'spellbinder.png',
      price: 2800,
      stats: [
        '+100 ability power',
        '+10% movement speed'
      ],
      passive: [
        'UNIQUE – SPELLSTEAL: Gains a charge each time a nearby enemy or allied champion, including yourself, uses an ability, up to a maximum of 100 charges.'
      ],
      active: [
        'UNIQUE – SPELLBURST: Grants 1 - 100 (based on charges) ability power for 4 seconds, and 0.3% - 30% (based on charges) bonus movement speed decaying over 4 seconds (60 second cooldown).'
      ]
    },

    spellthiefsEdge: {
      name: 'Spellthief\'s Edge',
      itemCode: 3303,
      link: 'http://leagueoflegends.wikia.com/wiki/Spellthief\'s_Edge',
      img: this.imageFolder + 'spellthiefs-edge.png',
      price: 350,
      stats: [
        '+10 ability power',
        '+2 Gold per 10 seconds',
        '+25% base mana regeneration'
      ],
      passive: [
        'UNIQUE – TRIBUTE: Grants a charge every 10 seconds, up to 3 charges. Damaging spells and attacks against champions and buildings consume a charge, up to one per attack or cast. Consuming a charge deals them 13 bonus magic damage and grants 10 Gold. Killing a minion or non-epic monster pauses Tribute generation for 12 seconds per unit slain.',
      ],
      active: []
    },

    sweeper: {
      name: 'Oracle Alteration',
      itemCode: 3303,
      link: 'http://leagueoflegends.wikia.com/wiki/Oracle_Alteration',
      img: this.imageFolder + 'sweeper.png',
      price: 0,
      stats: [],
      passive: [],
      active: [
        'Summons a Sweeper Drone that escorts you for the next 10 seconds (76 - 60 (based on level) second cooldown). The drone has a 660 / 690 / 720 / 750-unit detection radius.'
      ]
    },

    tearOfTheGoddess: {
      name: 'Tear of the Goddess',
      itemCode: 3070,
      link: 'http://leagueoflegends.wikia.com/wiki/Tear',
      img: this.imageFolder + 'tear.png',
      price: 750,
      stats: ['+250 mana'],
      passive: [
        'UNIQUE – AWE: Refunds 15% of mana spent.',
        'UNIQUE – MANA CHARGE: Grants a charge every 4 seconds, up to 3 charges. Each mana expenditure consumes a charge and grants +4 mana, up to a maximum of 750 mana.'
      ],
      active: []
    },

    trinketWard: {
      name: 'Warding Totem',
      itemCode: 3340,
      link: 'http://leagueoflegends.wikia.com/wiki/Warding_Totem',
      img: this.imageFolder + 'trinket-ward.png',
      price: 0,
      stats: [],
      passive: [],
      active: [
        'Consume a charge to place an invisible Totem Ward at the target location (600 range), which reveals the surrounding area for 60 - 120 (based on level) seconds. Stores one charge every 180 - 90 (based on level) seconds, up to 2 maximum charges.'
      ]
    },

    twinShadows: {
      name: 'Twin Shadows',
      itemCode: 3905,
      link: 'http://leagueoflegends.wikia.com/wiki/Twin_Shadows',
      img: this.imageFolder + 'twin-shadows.png',
      price: 2400,
      stats: [
        '+60 ability power',
        '+10% cooldown reduction',
        '+7% movement speed'
      ],
      passive: [],
      active: [
        'UNIQUE – SPECTRAL PURSUIT: Summons 2 ghosts for 6 seconds that seek out nearby enemy champions (4000 range). Ghosts, on contact, reveal and slow enemy champion by 40% for 2 - 5 (based on distance traveled) seconds (90 second cooldown).'
      ]
    },

    voidStaff: {
      name: 'Void Staff',
      itemCode: 3135,
      link: 'http://leagueoflegends.wikia.com/wiki/Void_Staff',
      img: this.imageFolder + 'void-staff.png',
      price: 2650,
      stats: [
        '+70 ability power'
      ],
      passive: [
        'UNIQUE: Magic damage ignores 40% of the target\'s magic resistance; applies before magic penetration.'
      ],
      active: []
    },

    zekesConvergence: {
      name: 'Zeke\'s Convergence',
      itemCode: 3050,
      link: 'http://leagueoflegends.wikia.com/wiki/Zeke\'s_Convergence',
      img: this.imageFolder + 'zekes.png',
      price: 2250,
      stats: [
        '+60 armor',
        '+10% cooldown reduction',
        '+30 magic resistance',
        '+250 mana'
      ],
      passive: [
        'UNIQUE: Casting your ultimate near your Conduit grant you both bonus effects for 10 seconds. You are surrounded with a FROST storm which slows enemies within it by 20%, and your Conduit\'s basic attacks burn their target with FIRE dealing 50% bonus magic damage over 2 seconds (45 second cooldown).',
        'UNIQUE – FROSTFIRE COVENANT: If an enemy is both struck by FROST and FIRE, your FROST storm ignites and becomes FROSTFIRE. A FROSTFIRE storm, deals 40 magic damage per second and slows by 40% instead for 3 seconds.'
      ],
      active: ['UNIQUE – CONDUIT: Designate an allied champion as your Conduit (0.5 second cooldown).']
    },

    zhonyasHourglass: {
      name: 'Zeke\'s Convergence',
      itemCode: 3157,
      link: 'http://leagueoflegends.wikia.com/wiki/Zhonya\'s_Hourglass',
      img: this.imageFolder + 'zhonyas-hourglass.png',
      price: 2900,
      stats: [
        '+70 ability power',
        '+45 armor',
        '+10% cooldown reduction'
      ],
      passive: [
        'UNIQUE – STASIS: Put yourself in stasis for 2.5 seconds, rendering yourself untargetable and invulnerable for the duration, but also unable to move, attack, cast spells, or use items during this time (120 second cooldown).'
      ],
      active: []
    },

    zzrotPortal: {
      name: 'Zz\'Rot Portal',
      itemCode: 3512,
      link: 'http://leagueoflegends.wikia.com/wiki/Zz\'Rot_Portal',
      img: this.imageFolder + 'zhonyas-hourglass.png',
      price: 2700,
      stats: [
        '+55 armor',
        '+125% base health regeneration',
        '+55 magic resistance'
      ],
      passive: [
        'UNIQUE – POINT RUNNER: Builds up to 20% bonus movement speed over 2 seconds while near turrets, fallen turrets and Void Gates.'
      ],
      active: [
        'UNIQUE: Spawns a Void Gate at target location for 120 seconds. Every 4 seconds the gate makes a Voidspawn that travels down the nearest lane and decays over time. Voidspawn explodes when attacking structures. Voidspawn ignore champions and void targets. The first and every fourth voidspawn gain 15% of your maximum health as damage (120 second cooldown).'
      ]
    },

  }

  constructor() { }

  ngOnInit() {
  }

}
