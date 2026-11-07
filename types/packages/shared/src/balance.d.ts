export declare const balance: {
    readonly sim: {
        /** Authoritative simulation rate (spec §7: 20 Hz / 50 ms fixed timestep). */
        readonly tickRateHz: 20;
        readonly tickIntervalMs: 50;
    };
    /** Tactical play area in world units (top-down 2D, spec §1 Tier A). A vast
     * arena to explore; the cameras follow the ship rather than fit the whole map. */
    readonly world: {
        readonly width: 8000;
        readonly height: 5600;
        readonly safeRadius: 3400;
        readonly radiationDps: 2.5;
        readonly radiationRampPer1000: 2.5;
    };
    /** Camera (both maps follow the ship, centered, at a fixed default zoom). */
    readonly camera: {
        /** World units shown across the SHORTER screen axis (keeps the ship's
         * surroundings similarly scaled on the 16:9 TV and the portrait phone). */
        readonly followSpan: 1800;
    };
    readonly ship: {
        readonly maxHull: 100;
        readonly radius: 18;
        /** Top speed in world units/sec at full throttle. Slow + heavy: vast
         * distances, sluggish maneuvers (the enemy fighters are far nimbler).
         * Multiplied by the ship class's speedMul. */
        readonly maxSpeed: 50;
        /** How fast velocity approaches the throttle/heading target (per second).
         * Low → a heavy acceleration ramp and long coast — submarine-combat pacing:
         * orders take real seconds to be felt. ×class accelMul. */
        readonly accel: 0.55;
        /** Engine power demand multiplier while Helm's EVASIVE maneuver is on. */
        readonly evasiveEngineDemandMul: 1.6;
    };
    readonly shipClasses: {
        readonly wren: {
            readonly maxHull: 55;
            readonly reactorOutput: 70;
            readonly speedMul: 1.35;
            readonly accelMul: 1.5;
            readonly turnRateDeg: 130;
            readonly radius: 12;
            readonly beams: 1;
            readonly turrets: 0;
            readonly tubes: 1;
            readonly torpedoStock: 3;
            readonly noisemakerStock: 4;
            readonly missileStock: 4;
            readonly rocketStock: 8;
            readonly railStock: 2;
            readonly flareStock: 10;
        };
        readonly cutter: {
            readonly maxHull: 70;
            readonly reactorOutput: 80;
            readonly speedMul: 1.25;
            readonly accelMul: 1.4;
            readonly turnRateDeg: 110;
            readonly radius: 14;
            readonly beams: 1;
            readonly turrets: 0;
            readonly tubes: 2;
            readonly torpedoStock: 4;
            readonly noisemakerStock: 4;
            readonly missileStock: 4;
            readonly rocketStock: 8;
            readonly railStock: 2;
            readonly flareStock: 8;
        };
        readonly corvette: {
            readonly maxHull: 90;
            readonly reactorOutput: 90;
            readonly speedMul: 1.1;
            readonly accelMul: 1.2;
            readonly turnRateDeg: 90;
            readonly radius: 16;
            readonly beams: 1;
            readonly turrets: 0;
            readonly tubes: 2;
            readonly torpedoStock: 6;
            readonly noisemakerStock: 4;
            readonly missileStock: 6;
            readonly rocketStock: 10;
            readonly railStock: 3;
            readonly flareStock: 9;
        };
        readonly frigate: {
            readonly maxHull: 100;
            readonly reactorOutput: 100;
            readonly speedMul: 1;
            readonly accelMul: 1;
            readonly turnRateDeg: 70;
            readonly radius: 18;
            readonly beams: 2;
            readonly turrets: 1;
            readonly tubes: 2;
            readonly torpedoStock: 8;
            readonly noisemakerStock: 5;
            readonly missileStock: 8;
            readonly rocketStock: 12;
            readonly railStock: 4;
            readonly flareStock: 6;
        };
        readonly cruiser: {
            readonly maxHull: 120;
            readonly reactorOutput: 110;
            readonly speedMul: 0.9;
            readonly accelMul: 0.9;
            readonly turnRateDeg: 55;
            readonly radius: 20;
            readonly beams: 2;
            readonly turrets: 2;
            readonly tubes: 4;
            readonly torpedoStock: 10;
            readonly noisemakerStock: 6;
            readonly missileStock: 10;
            readonly rocketStock: 14;
            readonly railStock: 5;
            readonly flareStock: 7;
        };
        readonly dreadnought: {
            readonly maxHull: 150;
            readonly reactorOutput: 125;
            readonly speedMul: 0.75;
            readonly accelMul: 0.7;
            readonly turnRateDeg: 38;
            readonly radius: 24;
            readonly beams: 3;
            readonly turrets: 3;
            readonly tubes: 4;
            readonly torpedoStock: 12;
            readonly noisemakerStock: 8;
            readonly missileStock: 12;
            readonly rocketStock: 16;
            readonly railStock: 6;
            readonly flareStock: 8;
        };
    };
    readonly hazards: {
        readonly asteroidCount: 28;
        readonly asteroidMinRadius: 28;
        readonly asteroidMaxRadius: 70;
        /** Fraction of speed retained (and reversed) when bouncing off an asteroid. */
        readonly collisionRestitution: 0.35;
    };
    readonly collision: {
        readonly base: 4;
        readonly speedScale: 0.72;
        readonly ratioMin: 0.75;
        readonly ratioMax: 1.15;
        readonly massiveRatio: 2.6;
        readonly minClosingSpeed: 15;
        /** Seconds a rammed pair stays damage-immune (bounce/separation still
         * apply): grinding against a hull re-bills at this pace, never per-tick. */
        readonly pairCooldownSec: 0.5;
    };
    readonly power: {
        readonly reactorBase: 100;
        readonly overclockBonus: 20;
        readonly overclockHeatPerSec: 6;
        readonly jumpHoldHeatPerSec: 8;
        readonly heatCoolPerSec: 2;
        readonly heatCritical: 85;
        readonly beamReactorHeatPerShot: 6;
        readonly overclockSpeedMul: 2;
        readonly overclockBeamDamageMul: 2;
        readonly overclockShieldRegenMul: 2;
        readonly heatDamagePerSec: 2.5;
        readonly ventDuration: 5;
        readonly ventHeatPerSec: 20;
        readonly repairRatePerSec: 9;
        readonly hullRepairRateMul: 0.5;
        readonly repairPowerDraw: 15;
        readonly repairSalvagePerHp: 0.25;
        readonly lifeSupport: 10;
        readonly enginesMax: 20;
        readonly engineUnspoolPerSec: 0.3;
        readonly sensorsIdle: 5;
        readonly sensorsScan: 15;
        readonly shieldsMax: 40;
        readonly weaponsMax: 30;
        readonly gunsMax: 12;
        readonly jumpCharge: 30;
        readonly lifeStarveGraceSec: 4;
        readonly radShield: {
            readonly regenPerSec: 0.8;
            readonly offDrainPerSec: 4;
            readonly radiationDrainPerDps: 1.6;
        };
        readonly lifeStarveHullDrainPerSec: 1.5;
    };
    readonly difficulty: {
        /** Enemy DIRECT fire (beams) damage multiplier. */
        readonly enemyDamageMul: 2;
        /** Enemy ORDNANCE (torpedoes/missiles/rails they fire) damage multiplier —
         * applied at impact for enemy-owned projectiles. */
        readonly enemyOrdnanceMul: 2;
        /** Reactor heat added per point of damage the SHIELDS absorb — soaking a
         * barrage now pressures the thermal system (vent or bleed). */
        readonly shieldHeatPerAbsorbed: 0.45;
    };
    readonly combat: {
        readonly weaponCount: 2;
        readonly weaponDamage: 24;
        readonly chargeTimeSec: 2.4;
        readonly heatPerShot: 30;
        readonly heatCooldownPerSec: 14;
        readonly heatMax: 100;
        readonly maxWeaponRange: 720;
        readonly baseHitChance: 0.88;
        readonly minRangeFactor: 0.3;
        readonly evasionMultiplier: 0.5;
        readonly shieldMax: 200;
        readonly shieldRegenPerSec: 4.5;
        readonly scanRange: 900;
        readonly scanRatePerSec: 0.4;
        readonly scanRevealClass: 0.35;
        readonly subsystemRevealAt: readonly [0.55, 0.78, 1];
        readonly enemyShieldRegenPerSec: 3;
        readonly subsystemRuptureHull: 12;
    };
    readonly guns: {
        readonly range: 420;
        readonly damage: 7;
        readonly cooldownSec: 0.9;
        readonly heatPerShot: 6;
        readonly mannedDamageMul: 1.5;
        readonly baseHitChance: 0.75;
        readonly minRangeFactor: 0.5;
        readonly pdRange: 340;
        readonly pdHitChance: 0.45;
        readonly mannedTorpedoHitMul: 1.3;
    };
    readonly signature: {
        readonly base: 40;
        readonly throttleMax: 70;
        readonly overclock: 35;
        readonly evasive: 20;
    };
    readonly jump: {
        readonly chargeSec: 18;
        readonly transitSec: 2.5;
        readonly salvageBonus: 10;
    };
    readonly galaxy: {
        readonly systemCount: 22;
        readonly minSpacing: 0.12;
        readonly relaxIterations: 40;
        readonly edgeMargin: 0.06;
        readonly linkMin: 2;
        readonly linkMax: 3;
        readonly signalChance: 0.4;
        readonly wormholeFarFraction: 0.25;
        readonly surveyAnomaliesMin: 2;
        readonly surveyAnomaliesMax: 3;
    };
    readonly encounters: {
        readonly weights: {
            readonly PATROL: 3;
            readonly AMBUSH: 2;
            readonly ASTEROID_FIELD: 2;
            readonly DRIFT_FIELD: 2;
            readonly DERELICT: 0.7;
            readonly DISTRESS: 2;
            readonly MINEFIELD: 2;
            readonly FIRST_CONTACT: 2;
            readonly TRADER: 2;
        };
        readonly hunterEvery: 5;
        readonly maxEnemies: 4;
        readonly engageRange: 1500;
        readonly fleeEscapeRange: 2600;
        readonly ambushSpawnMul: 0.55;
        readonly spawnMulMin: 1.2;
        readonly spawnMulMax: 1.8;
        readonly rewardBase: 30;
        readonly rewardPerSector: 8;
        readonly rewardPerKill: 8;
        readonly hunterMul: {
            readonly hull: 1.6;
            readonly shield: 1.5;
            readonly damage: 1.3;
        };
        readonly hunterReward: 60;
        readonly derelictScanMul: 0.5;
        readonly derelictRadius: 44;
        readonly derelictReward: 45;
        readonly derelictRestock: 2;
        readonly trapChance: 0.35;
        readonly trapEnemies: 2;
        readonly freighterHull: 80;
        readonly freighterSignature: 60;
        readonly freighterReward: 55;
        readonly mineCount: 24;
        readonly mineRadius: 12;
        readonly mineHull: 10;
        readonly mineFieldRadiusMin: 140;
        readonly mineFieldRadiusMax: 1000;
        readonly mineLockRange: 160;
        readonly mineSpeed: 58;
        readonly mineTurnRateDeg: 200;
        readonly mineTriggerRange: 60;
        readonly mineDamage: 75;
        readonly mineVisibleRange: 620;
        readonly mineScanSec: 1;
        readonly merchantEveryCleared: 4;
        readonly merchantArriveDelaySec: 6;
        readonly asteroidFieldCount: 60;
    };
    readonly driftField: {
        readonly countMin: 10;
        readonly countMax: 16;
        readonly speedMin: 8;
        readonly speedMax: 20;
        readonly spinDegMin: 10;
        readonly spinDegMax: 45;
        readonly spawnDistMin: 500;
        readonly spawnDistMax: 1600;
    };
    readonly debrisStorm: {
        readonly hazardChance: 0.08;
        readonly bigCountMin: 12;
        readonly bigCountMax: 18;
        readonly bigRadiusMin: 30;
        readonly bigRadiusMax: 64;
        readonly smallCountMin: 20;
        readonly smallCountMax: 28;
        readonly smallRadiusMin: 8;
        readonly smallRadiusMax: 15;
        readonly smallHull: 18;
        readonly speedMin: 42;
        readonly speedMax: 88;
        readonly headingJitterDeg: 25;
        readonly spinDegMin: 20;
        readonly spinDegMax: 80;
        readonly spawnDistMin: 450;
        readonly spawnDistMax: 1700;
        readonly recycleDist: 2100;
        readonly impactDamageMul: 2.25;
        readonly outageOnBigHullHit: true;
        readonly anomalyId: "debris_heart";
        readonly completionBonus: 40;
        readonly targetCap: 5;
        readonly cupolaCorridorBonus: 8;
    };
    readonly ai: {
        /** Attack profile per enemy class: brawlers knife-fight at gun range,
         * snipers hold a torpedo standoff, support keeps its distance (the envoy
         * only fights when provoked — dormancy is the hail system's job). */
        readonly classProfiles: {
            readonly raptor: "brawler";
            readonly corsair: "sniper";
            readonly reaver: "brawler";
            readonly envoy: "support";
            readonly basilisk: "artillery";
            readonly swarm: "brawler";
            readonly collector: "sniper";
            readonly leviathan: "brawler";
            readonly chimera: "brawler";
        };
        readonly brawler: {
            readonly bandMin: 250;
            readonly bandMax: 450;
            readonly orbitSpeedMul: 0.55;
            readonly gunRunPeriodSec: 7;
            readonly gunRunFraction: 0.35;
            readonly gunRunSpeedMul: 0.85;
            readonly torpedoFinisherHullFrac: 0.5;
            readonly finisherBandMin: 500;
            readonly finisherBandMax: 700;
        };
        readonly sniper: {
            readonly bandMin: 1100;
            readonly bandMax: 1500;
            readonly driftSpeedMul: 0.3;
            readonly dryBandMin: 300;
            readonly dryBandMax: 480;
            readonly woundedCooldownMul: 0.5;
            readonly woundedHullFrac: 0.5;
        };
        readonly support: {
            readonly bandMinMul: 0.8;
            readonly bandMaxMul: 1;
            readonly driftSpeedMul: 0.25;
        };
        readonly artillery: {
            readonly bandMin: 1700;
            readonly bandMax: 2200;
            readonly backOffSpeedMul: 0.8;
            readonly driftSpeedMul: 0.2;
            readonly dryBandMin: 300;
            readonly dryBandMax: 460;
            readonly missileRangeMax: 2200;
            readonly missileVolleyMin: 2;
            readonly missileVolleyMax: 3;
            readonly missileCooldownSec: 6;
            readonly missileVolleySpacingSec: 0.45;
            readonly railRangeMax: 2400;
            readonly railCooldownSec: 14;
            readonly railBearingDeg: 4;
            readonly railTurnRateDeg: 22;
            readonly railSlugDamage: 80;
            readonly railFriendlyClearance: 60;
            readonly panicRange: 700;
            readonly encounterChance: 0.18;
            readonly minSector: 4;
        };
        readonly hunter: {
            readonly brawlBelowHullFrac: 0.5;
        };
        readonly torpedoMinLaunchRange: 450;
        readonly noisemakerCooldownSec: 8;
        readonly noisemakerDelaySec: 0.4;
        readonly escapeSpoolSec: 25;
        readonly fleeFenceLookaheadSec: 4;
        readonly fleeFenceMargin: 150;
        readonly fleeJinkRad: 0.35;
        readonly fleeJinkHz: 0.5;
        readonly fallbackEscapeRangeMul: 2;
        readonly schematicPad: 0.15;
        readonly schematicMinDist: 0.22;
    };
    readonly unlocks: {
        readonly reactor_plus: {
            readonly labelKey: "unlock.reactor_plus.label";
            readonly detailKey: "unlock.reactor_plus.detail";
            readonly cost: 150;
        };
        readonly hull_plating: {
            readonly labelKey: "unlock.hull_plating.label";
            readonly detailKey: "unlock.hull_plating.detail";
            readonly cost: 120;
        };
        readonly torpedo_reserve: {
            readonly labelKey: "unlock.torpedo_reserve.label";
            readonly detailKey: "unlock.torpedo_reserve.detail";
            readonly cost: 100;
        };
        readonly pd_suite: {
            readonly labelKey: "unlock.pd_suite.label";
            readonly detailKey: "unlock.pd_suite.detail";
            readonly cost: 180;
        };
        readonly deep_scanner: {
            readonly labelKey: "unlock.deep_scanner.label";
            readonly detailKey: "unlock.deep_scanner.detail";
            readonly cost: 130;
        };
    };
    readonly unlockEffects: {
        readonly reactorPlus: 10;
        readonly hullPlating: 20;
        readonly torpedoReserve: 4;
        readonly pdCooldownMul: 0.75;
        readonly scanRateMul: 1.3;
    };
    readonly hails: {
        readonly range: 1400;
        readonly pirateDemandChancePatrol: 0.4;
        readonly pirateDemandChanceAmbush: 0.3;
        readonly tributeBase: 30;
        readonly tributePerSector: 8;
        readonly demandExpirySec: 120;
        readonly bluffFleeChance: 0.5;
        readonly bluffFleeReward: 0.5;
        readonly surrenderAcceptHull: 0.25;
        readonly surrenderSubsystemHull: 0.6;
        readonly surrenderBounty: 25;
        readonly enemyOfferChance: 0.4;
        readonly fakeSurrenderChance: 0.15;
        readonly fakeSurrenderDamage: 18;
        readonly tauntIntelChance: 0.5;
        readonly weaponsColdCharge: 0.2;
        readonly fcGiftHull: 25;
        readonly fcGiftSalvage: 60;
        readonly fcTradeCost: 60;
        readonly fcTradeHull: 35;
        readonly fcDepartSalvage: 20;
        readonly fcForceRespectChance: 0.4;
        readonly fcForceTribute: 80;
        readonly fcIgnoreSec: 180;
        readonly scanUnlockLevel: 0.35;
        readonly traderTorpedoCost: 40;
        readonly traderTorpedoCount: 4;
        readonly traderProbeCost: 30;
        readonly traderProbeCount: 2;
        readonly traderMissileCost: 35;
        readonly traderMissileCount: 4;
        readonly traderRocketCost: 20;
        readonly traderRocketCount: 6;
        readonly traderRailCost: 60;
        readonly traderRailCount: 2;
        readonly traderHullCost: 35;
        readonly traderHullRepair: 20;
        readonly traderChartsPay: 20;
        readonly haggleChance: 0.5;
        readonly haggleDiscount: 0.25;
        readonly traderLingerSec: 300;
        readonly qshipChance: 0.2;
        readonly qshipEscorts: 2;
        readonly distressExpirySec: 100;
    };
    readonly jamming: {
        readonly minSector: 1;
        readonly firstCallSec: 45;
        readonly callEverySec: 180;
        readonly callJitter: 0.25;
        readonly callDuration: 22;
        readonly rangeMaxU: 7000;
        readonly hopTolerance: 0.06;
        readonly hopSecBase: 2;
        readonly hopSecMin: 0.35;
        readonly hopDriftChance: 0.3;
        readonly lockGainRate: 2.5;
        readonly lockDecayRate: 3.5;
        readonly reinforcementsBase: 1;
        readonly reinforcementsEverySectors: 3;
        readonly reinforcementsMax: 3;
    };
    readonly outages: {
        readonly shieldBlockThreshold: 0.5;
        readonly shieldBlockChance: 0.8;
        readonly minSector: 2;
        readonly everySecMin: 100;
        readonly everySecMax: 150;
        readonly chanceBase: 0.45;
        readonly chancePerSector: 0.04;
        readonly chanceMax: 0.8;
        readonly expireSec: 90;
        readonly restoreSec: 12;
        readonly decaySec: 60;
        readonly cols: 5;
        readonly rows: 4;
        readonly brokenChance: 0.16;
    };
    readonly anomalies: {
        readonly spawnChance: 0.6;
        readonly secondChance: 0.45;
        readonly probeSiteWeightMul: 0.35;
        readonly spawnDistMin: 900;
        readonly spawnDistMax: 1800;
        readonly planetRadiusMin: 60;
        readonly planetRadiusMax: 120;
        readonly wreckRadius: 46;
        readonly phenomenonRadius: 34;
        readonly planetScanMul: 0.35;
        readonly wreckScanMul: 0.5;
        readonly phenomenonScanMul: 0.7;
        readonly salvageSmall: 25;
        readonly salvageLarge: 60;
        readonly torpedoCache: 3;
        readonly ambushEnemies: 2;
        readonly flareDamage: 22;
        readonly bloomHull: 30;
        readonly questSalvage: 120;
        readonly probeCache: 1;
        readonly organismRadius: 30;
        readonly megaRadiusMin: 150;
        readonly megaRadiusMax: 210;
        readonly organismScanMul: 0.6;
        readonly megaScanMul: 0.3;
        readonly cometRadius: 26;
        readonly cometScanMul: 0.8;
        readonly cometDriftSpeed: 9;
        readonly hazards: {
            readonly gravityRadius: 800;
            readonly gravityPull: 32;
            readonly gravityDps: 3;
            readonly pulsePeriodSec: 10;
            readonly pulseRadius: 1500;
            readonly pulseDamage: 7;
            readonly shroudRadius: 700;
            readonly shroudSignatureMul: 0.45;
        };
        readonly skittishFleeSpeed: 65;
        readonly skittishFleeSec: 7;
    };
    readonly bosses: {
        readonly minSector: 6;
        readonly chance: 0.08;
        readonly spawnDistMul: 1.4;
        readonly weights: {
            readonly collector: 0.4;
            readonly leviathan: 0.35;
            readonly chimera: 0.25;
        };
        readonly collector: {
            readonly hackFirstSec: 10;
            readonly hackEverySec: 45;
            readonly bounty: 220;
            readonly bountyProbes: 1;
        };
        readonly leviathan: {
            readonly scanSalvage: 160;
            readonly broodOnWake: 3;
            readonly woundBroodAt: 0.5;
            readonly woundBrood: 2;
            readonly bounty: 200;
        };
        readonly chimera: {
            readonly bounty: 140;
        };
        readonly swarm: {
            readonly minSector: 3;
            readonly chance: 0.15;
            readonly countMin: 4;
            readonly countMax: 6;
        };
        readonly sentinels: {
            readonly showdownMin: 6;
            readonly showdownMax: 8;
            readonly primeMul: {
                readonly hull: 2.5;
                readonly shield: 1;
                readonly damage: 2;
            };
            readonly bounty: 180;
            readonly bountyProbes: 1;
        };
    };
    readonly pois: {
        readonly startingProbes: 2;
        readonly actionRangeMul: 1.5;
        readonly revealAt: 0.35;
        readonly surveyAt: 0.7;
        readonly salvageSmall: 20;
        readonly salvageLarge: 45;
        readonly salvageJackpot: 90;
        readonly tremorDamage: 18;
        readonly hullPatch: 22;
        readonly infestDps: 0.8;
        readonly infestSec: 20;
        readonly torpedoCache: 2;
        readonly coreReactorHeal: 40;
        readonly trapPingEnemies: 1;
        readonly curseDelaySec: 8;
        readonly cursedAmbushEnemies: 2;
        readonly awakeningMul: {
            readonly hull: 1.6;
            readonly shield: 1.5;
            readonly damage: 1.3;
        };
        readonly vaultSalvage: 150;
        readonly questProbes: 1;
    };
    readonly probe: {
        readonly grid: {
            readonly cols: 24;
            readonly rows: 16;
        };
        readonly landingSec: 3;
        readonly endCardSec: 6;
        readonly move: {
            readonly maxSpeedTiles: 2.6;
            readonly accelPerSec: 6;
            readonly turnRateDeg: 240;
            readonly radiusTiles: 0.35;
        };
        readonly vision: {
            readonly fovDeg: 75;
            readonly rangeTiles: 6.5;
            readonly ambientTiles: 1.6;
            readonly rayStepDeg: 2.5;
        };
        readonly noise: {
            readonly idle: 0.08;
            readonly moveMax: 0.55;
            readonly bump: 0.2;
            readonly ping: 1;
            readonly vent: 0.3;
            readonly decayPerSec: 0.9;
            readonly hearRadiusMaxTiles: 14;
        };
        readonly hull: {
            readonly max: 50;
            readonly arcDamage: 18;
            readonly arcPeriodSec: 1.6;
            readonly ventImpulseTiles: 4.5;
            readonly collapseDelaySec: 0.7;
        };
        readonly interact: {
            readonly radiusTiles: 0.9;
            readonly extractChannelSec: 2.5;
        };
        readonly loot: {
            readonly minorMin: 2;
            readonly minorMax: 4;
            readonly minorSalvage: 8;
            readonly terminalsMin: 1;
            readonly terminalsMax: 2;
        };
        readonly radar: {
            readonly sweepDegPerSec: 60;
            readonly echoFuzzDeg: 14;
            readonly echoFuzzRange01: 0.15;
            readonly pingCooldownSec: 18;
            readonly pingRevealTiles: 99;
        };
        readonly creature: {
            readonly baseChance: 0.35;
            readonly speedClasses: readonly [{
                readonly id: "fast";
                readonly mul: 1;
                readonly weight: 1;
            }, {
                readonly id: "medium";
                readonly mul: 0.5;
                readonly weight: 1;
            }, {
                readonly id: "slow";
                readonly mul: 0.25;
                readonly weight: 1;
            }];
            readonly phantomChance: 0.25;
            readonly arcNoiseBurst: 0.5;
            readonly killRadiusTiles: 0.55;
            readonly speeds: {
                readonly prowl: 1.2;
                readonly investigate: 2;
                readonly stalk: 2.4;
                readonly hunt: 3.2;
            };
            readonly stalkRingTiles: 5;
            readonly dormantWakeNoise: 0.25;
            readonly wakeAfterSec: 45;
            readonly aggro: {
                readonly noiseGain: 30;
                readonly pingGain: 35;
                readonly stalkPerSec: 4;
                readonly decayPerSec: 2;
                readonly huntAt: 100;
                readonly trapMul: 1.6;
            };
            readonly huntBreakSec: 5;
            readonly loseInterestSec: 12;
            readonly lingerSec: 4;
            readonly proximityTiers: readonly [8, 5, 3];
        };
        readonly gen: {
            readonly rooms: {
                readonly min: 6;
                readonly max: 9;
                readonly wMin: 3;
                readonly wMax: 7;
                readonly hMin: 3;
                readonly hMax: 5;
            };
            readonly caveFill: 0.45;
            readonly caveSmooth: 4;
            readonly loops: 2;
            readonly hazards: {
                readonly arcMin: 2;
                readonly arcMax: 4;
                readonly ventMin: 1;
                readonly ventMax: 3;
                readonly collapseMin: 2;
                readonly collapseMax: 5;
            };
            readonly maxAttempts: 8;
        };
    };
    readonly boot: {
        readonly durationSec: 72;
        readonly holdSec: 1.2;
    };
    readonly signals: {
        readonly derelictCreatureChance: 0.5;
        readonly derelictBeaconChance: 0.35;
        readonly voiceIntervalSec: readonly [readonly [12, 20], readonly [7, 12], readonly [4, 7]];
        readonly voiceVolume: readonly [0.22, 0.45, 0.85];
    };
    readonly void: {
        /** The null return is guaranteed on every arrival from this sector on,
         * until the crew scans it (campaign stage 0). The early game is a "normal"
         * roguelike run — pirates, anomalies, and the side quests (GHOST BEACON /
         * SLEEPER SEAM / WEAVER'S QUESTION / THE SENTINEL SIGNAL, all still
         * organically discoverable) — and the VOID discovery arc opens LATER, from
         * here: beats 1–3 unfold across ~sectors 10–12 (void → ark → archive). The
         * PRIORITY ONE orders still log at launch (the boot transmission); the null
         * return just doesn't appear until the crew is deep. */
        readonly contactFromSector: 10;
        /** Guardians stirred by the structure reveal: a small sentinel wave (the
         * existing swarm class — the sentinels ARE the Void's guardians), hot,
         * FIRST_CONTACT-containment honored like every hot spawn. */
        readonly guardianDrones: 2;
        /** Sleeper-pod TAP attempts before the pod reads spent. Each attempt pays
         * a distinct fail-forward lore beat (SLEEPER_POD_LORE) and NOTHING else —
         * the pods never open; unsolvable by design. */
        readonly podAttempts: 3;
    };
    readonly unmaking: {
        readonly autoSector: 14;
        readonly perJumpMin: 8;
        readonly perJumpMax: 12;
        readonly perMinute: 1.5;
        readonly huskChance: 0.35;
        readonly huskHullMul: 1.25;
        readonly packBonusAt: 50;
        readonly callRateMul: 0.75;
        readonly primeAt: 75;
        readonly arrivalWarnEverySec: 90;
        readonly evacChance: 0.3;
        readonly evacConvoyMin: 2;
        readonly evacConvoyMax: 3;
        readonly evacSpoolSecMin: 90;
        readonly evacSpoolSecMax: 120;
        readonly evacSalvage: 60;
        readonly evacValueMulAt100: 2;
        readonly evacRaiderFocus: 0.6;
    };
    readonly sigint: {
        readonly ttlSec: 24;
        readonly maxLive: 4;
        readonly callLeadSec: 15;
        readonly railWarnSec: 3;
        readonly huskChatterEverySec: 60;
        readonly convoyPleaEverySec: 35;
    };
    readonly rep: {
        readonly tributePaid: -8;
        readonly refuseWin: 5;
        readonly bluffFear: 12;
        readonly fearAt: 40;
        readonly fearScatterChance: 0.85;
        readonly killSurrendered: -15;
        readonly tributeBoldnessPer: 0.01;
        readonly demandBoldnessPer: 0.01;
        readonly offerScalePer: 0.01;
        readonly tradeHonest: 2;
        readonly tradeCapPerMeeting: 6;
        readonly chartsSold: 3;
        readonly qshipSurvived: 8;
        readonly guildDiscountAt: 25;
        readonly evacGuild: 10;
        readonly fcWarm: 10;
        readonly velshaarKinAt: 20;
    };
    readonly log: {
        readonly maxEntries: 30;
    };
    readonly enemyClasses: {
        readonly raptor: {
            readonly labelKey: "contact.class.raptor";
            readonly maxHull: 60;
            readonly shield: 30;
            readonly radius: 16;
            readonly maxSpeed: 58;
            readonly agility: 0.85;
            readonly damage: 7;
            readonly fireRangeMin: 200;
            readonly fireRangeMax: 540;
            readonly fireCooldownSec: 1.3;
            readonly approachRange: 360;
            readonly fleeHullFraction: 0.2;
            readonly yields: false;
            readonly subEngines: 28;
            readonly subShieldGen: 24;
            readonly subWeapons: 30;
            readonly subJump: 0;
            readonly signature: 100;
            readonly torpedoes: 0;
            readonly torpedoCooldownSec: 0;
            readonly torpedoRangeMin: 0;
            readonly torpedoRangeMax: 0;
            readonly noisemakers: 0;
            readonly missiles: 0;
            readonly rails: 0;
        };
        readonly corsair: {
            readonly labelKey: "contact.class.corsair";
            readonly maxHull: 48;
            readonly shield: 24;
            readonly radius: 14;
            readonly maxSpeed: 67;
            readonly agility: 1;
            readonly damage: 6;
            readonly fireRangeMin: 220;
            readonly fireRangeMax: 560;
            readonly fireCooldownSec: 1.1;
            readonly approachRange: 380;
            readonly fleeHullFraction: 0.25;
            readonly yields: true;
            readonly subEngines: 22;
            readonly subShieldGen: 20;
            readonly subWeapons: 26;
            readonly subJump: 20;
            readonly signature: 90;
            readonly torpedoes: 2;
            readonly torpedoCooldownSec: 16;
            readonly torpedoRangeMin: 400;
            readonly torpedoRangeMax: 1600;
            readonly noisemakers: 2;
            readonly missiles: 0;
            readonly rails: 0;
        };
        readonly reaver: {
            readonly labelKey: "contact.class.reaver";
            readonly maxHull: 72;
            readonly shield: 36;
            readonly radius: 18;
            readonly maxSpeed: 50;
            readonly agility: 0.7;
            readonly damage: 9;
            readonly fireRangeMin: 180;
            readonly fireRangeMax: 520;
            readonly fireCooldownSec: 1.5;
            readonly approachRange: 340;
            readonly fleeHullFraction: 0.18;
            readonly yields: true;
            readonly subEngines: 32;
            readonly subShieldGen: 28;
            readonly subWeapons: 34;
            readonly subJump: 26;
            readonly signature: 120;
            readonly torpedoes: 3;
            readonly torpedoCooldownSec: 14;
            readonly torpedoRangeMin: 400;
            readonly torpedoRangeMax: 1400;
            readonly noisemakers: 2;
            readonly missiles: 0;
            readonly rails: 0;
        };
        readonly envoy: {
            readonly labelKey: "contact.class.envoy";
            readonly maxHull: 150;
            readonly shield: 90;
            readonly radius: 26;
            readonly maxSpeed: 35;
            readonly agility: 0.5;
            readonly damage: 14;
            readonly fireRangeMin: 220;
            readonly fireRangeMax: 600;
            readonly fireCooldownSec: 1.6;
            readonly approachRange: 380;
            readonly fleeHullFraction: 0.1;
            readonly yields: false;
            readonly subEngines: 40;
            readonly subShieldGen: 36;
            readonly subWeapons: 40;
            readonly subJump: 30;
            readonly signature: 140;
            readonly torpedoes: 2;
            readonly torpedoCooldownSec: 15;
            readonly torpedoRangeMin: 400;
            readonly torpedoRangeMax: 1100;
            readonly noisemakers: 2;
            readonly missiles: 0;
            readonly rails: 0;
        };
        readonly basilisk: {
            readonly labelKey: "contact.class.basilisk";
            readonly maxHull: 80;
            readonly shield: 40;
            readonly radius: 22;
            readonly maxSpeed: 35;
            readonly agility: 0.45;
            readonly damage: 4;
            readonly fireRangeMin: 0;
            readonly fireRangeMax: 420;
            readonly fireCooldownSec: 2.2;
            readonly approachRange: 1900;
            readonly fleeHullFraction: 0.22;
            readonly yields: true;
            readonly subEngines: 30;
            readonly subShieldGen: 26;
            readonly subWeapons: 36;
            readonly subJump: 28;
            readonly signature: 130;
            readonly torpedoes: 4;
            readonly torpedoCooldownSec: 16;
            readonly torpedoRangeMin: 1100;
            readonly torpedoRangeMax: 1600;
            readonly noisemakers: 2;
            readonly missiles: 8;
            readonly rails: 3;
        };
        readonly swarm: {
            readonly labelKey: "contact.class.swarm";
            readonly maxHull: 18;
            readonly shield: 0;
            readonly radius: 8;
            readonly maxSpeed: 73;
            readonly agility: 1;
            readonly damage: 2;
            readonly fireRangeMin: 40;
            readonly fireRangeMax: 300;
            readonly fireCooldownSec: 0.7;
            readonly approachRange: 120;
            readonly fleeHullFraction: 0;
            readonly yields: false;
            readonly subEngines: 6;
            readonly subShieldGen: 5;
            readonly subWeapons: 6;
            readonly subJump: 0;
            readonly signature: 30;
            readonly torpedoes: 0;
            readonly torpedoCooldownSec: 0;
            readonly torpedoRangeMin: 0;
            readonly torpedoRangeMax: 0;
            readonly noisemakers: 0;
            readonly missiles: 0;
            readonly rails: 0;
        };
        readonly collector: {
            readonly labelKey: "contact.class.collector";
            readonly maxHull: 340;
            readonly shield: 170;
            readonly radius: 42;
            readonly maxSpeed: 21;
            readonly agility: 0.15;
            readonly damage: 10;
            readonly fireRangeMin: 0;
            readonly fireRangeMax: 700;
            readonly fireCooldownSec: 1.8;
            readonly approachRange: 1200;
            readonly fleeHullFraction: 0;
            readonly yields: false;
            readonly subEngines: 60;
            readonly subShieldGen: 55;
            readonly subWeapons: 60;
            readonly subJump: 45;
            readonly signature: 200;
            readonly torpedoes: 6;
            readonly torpedoCooldownSec: 12;
            readonly torpedoRangeMin: 500;
            readonly torpedoRangeMax: 1500;
            readonly noisemakers: 3;
            readonly missiles: 14;
            readonly rails: 0;
        };
        readonly leviathan: {
            readonly labelKey: "contact.class.leviathan";
            readonly maxHull: 420;
            readonly shield: 0;
            readonly radius: 48;
            readonly maxSpeed: 43;
            readonly agility: 0.35;
            readonly damage: 16;
            readonly fireRangeMin: 0;
            readonly fireRangeMax: 240;
            readonly fireCooldownSec: 2.4;
            readonly approachRange: 200;
            readonly fleeHullFraction: 0;
            readonly yields: false;
            readonly subEngines: 50;
            readonly subShieldGen: 40;
            readonly subWeapons: 55;
            readonly subJump: 0;
            readonly signature: 260;
            readonly torpedoes: 0;
            readonly torpedoCooldownSec: 0;
            readonly torpedoRangeMin: 0;
            readonly torpedoRangeMax: 0;
            readonly noisemakers: 0;
            readonly missiles: 0;
            readonly rails: 0;
        };
        readonly chimera: {
            readonly labelKey: "contact.class.chimera";
            readonly maxHull: 180;
            readonly shield: 90;
            readonly radius: 26;
            readonly maxSpeed: 48;
            readonly agility: 0.6;
            readonly damage: 11;
            readonly fireRangeMin: 120;
            readonly fireRangeMax: 560;
            readonly fireCooldownSec: 1.2;
            readonly approachRange: 300;
            readonly fleeHullFraction: 0.08;
            readonly yields: false;
            readonly subEngines: 40;
            readonly subShieldGen: 36;
            readonly subWeapons: 42;
            readonly subJump: 30;
            readonly signature: 150;
            readonly torpedoes: 4;
            readonly torpedoCooldownSec: 12;
            readonly torpedoRangeMin: 400;
            readonly torpedoRangeMax: 1400;
            readonly noisemakers: 2;
            readonly missiles: 0;
            readonly rails: 0;
        };
    };
    readonly torpedo: {
        readonly speed: 95;
        readonly turnRateDeg: 95;
        readonly lifetime: 32;
        readonly seekerRadius: 900;
        readonly seekerConeDeg: 360;
        readonly hitRadius: 30;
        readonly damage: 72;
        readonly activationDelayMin: 0;
        readonly activationDelayMax: 20;
        readonly activationDelaySafeMin: 3;
        readonly armAheadDistance: 120;
        readonly shipSignature: 100;
        readonly noisemakerSignature: 400;
        readonly noisemakerSpeed: 80;
        readonly noisemakerLifetime: 24;
        readonly tubeCount: 4;
        readonly tubeReloadTime: 8;
        readonly torpedoStock: 8;
        readonly noisemakerStock: 6;
        readonly currentDriftEnabled: false;
        readonly currentDrift: {
            readonly x: 0;
            readonly y: 0;
        };
    };
    readonly ordnance: {
        readonly missile: {
            readonly speed: 260;
            readonly damage: 14;
            readonly lifetime: 9;
            readonly cooldownSec: 0.35;
            readonly wildSec: 0.4;
            readonly wildOffsetDeg: 40;
            readonly wildJitterDegPerSec: 200;
            readonly turnRateDeg: 240;
            readonly hitRadius: 18;
            readonly lureRadius: 260;
            readonly noisemakerLurePerSec: 0.35;
            readonly flareLurePerSec: 0.9;
        };
        readonly rocket: {
            readonly speed: 300;
            readonly damage: 10;
            readonly lifetime: 4;
            readonly hitRadius: 28;
            readonly armDelaySec: 0.1;
            readonly flareFuseRadius: 80;
            readonly turnRateDeg: 45;
            readonly coneDeg: 30;
            readonly acquireRange: 500;
            readonly flareLureRadius: 260;
        };
        readonly rail: {
            readonly speed: 420;
            readonly damage: 120;
            readonly lifetime: 7;
            readonly cooldownSec: 6;
            readonly hitRadius: 20;
        };
    };
    readonly cupola: {
        readonly laser: {
            readonly damage: 6;
            readonly cooldownSec: 0.18;
            readonly range: 900;
            readonly heatPerShot: 7;
            readonly heatCoolPerSec: 22;
            readonly overheatAt: 100;
            readonly resumeAt: 55;
            readonly energyPerShot: 0.6;
        };
        readonly gatling: {
            readonly damage: 3;
            readonly shieldMul: 0.25;
            readonly burstRounds: 6;
            readonly cooldownSec: 0.5;
            readonly range: 520;
            readonly ammo: 600;
            readonly pdHitChance: 0.7;
            readonly heatPerBurst: 2;
        };
        readonly rocket: {
            readonly cooldownSec: 1.2;
            readonly ammo: 12;
            readonly armDelaySec: 0.2;
        };
        readonly beamCorridorU: 30;
        readonly pdRoundRadiusU: 10;
        readonly assistConeDeg: 7;
        readonly assistDegPerSec: 24;
        readonly assistIdleMul: 2.5;
    };
    readonly hybrid: {
        readonly autoJamBlocked: 0.25;
        readonly autoRepairRateMul: 0.25;
        readonly autoRepairMinSalvage: 1;
        readonly autoRepairEngageBelow: 0.8;
        readonly autoVentAtHeat: 90;
    };
    readonly countermeasures: {
        readonly flare: {
            readonly lifetime: 5;
            readonly speed: 28;
            readonly delaySec: 0.15;
            readonly ejectSpreadDeg: 60;
            readonly torpedoSignature: 200;
        };
        readonly ecm: {
            readonly radius: 700;
            readonly minSensorRatio: 0.4;
            readonly signatureAdd: 15;
            readonly jitterPerSec: 1.5;
            readonly jitterMaxDeg: 12;
            readonly drawU: 8;
        };
    };
};
export type Balance = typeof balance;
