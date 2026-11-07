export declare const tactical: {
    readonly arc: {
        readonly fore: import("../..").TextEntry<"fore">;
        readonly aft: import("../..").TextEntry<"aft">;
        readonly port: import("../..").TextEntry<"port">;
        readonly stbd: import("../..").TextEntry<"stbd">;
    };
    readonly weapon: {
        readonly phaser: "phaser";
    } & import("../../types").TextGroup;
    readonly scopePanel: {
        readonly title: import("../..").TextEntry<"targeting scope">;
        readonly titleArmed: import("../..").TextEntry<"targeting scope · weapons free">;
        readonly armedBanner: import("../..").TextEntry<"ROCKETS ARMED — tap to fire">;
    };
    readonly chip: {
        readonly target: import("../..").TextEntry<"● {designator}">;
        readonly targetClass: import("../..").TextEntry<"● {designator} · {shipClass}">;
        readonly bearingRange: import("../..").TextEntry<"BRG {brg}° · RNG {rng}u">;
        readonly closing: import("../..").TextEntry<"CLS {rate}u/s">;
        readonly noLockArmed: import("../..").TextEntry<"○ NO LOCK — taps fire rockets">;
        readonly noLock: import("../..").TextEntry<"○ NO TARGET LOCK — tap a contact">;
    };
    readonly ranges: {
        readonly gun: import("../..").TextEntry<"gun {n}u">;
        readonly beam: import("../..").TextEntry<"beam {n}u">;
        readonly seeker: import("../..").TextEntry<"seeker {n}u">;
    };
    readonly threat: {
        readonly title: import("../..").TextEntry<"threat board">;
        readonly empty: import("../..").TextEntry<"— no hostiles on the board —">;
        readonly colId: import("../..").TextEntry<"id">;
        readonly colClass: import("../..").TextEntry<"class">;
        readonly colRng: import("../..").TextEntry<"rng">;
        readonly colBrg: import("../..").TextEntry<"brg">;
        readonly unidentified: import("../..").TextEntry<"unidentified">;
        readonly mineLocked: import("../..").TextEntry<"mine · locked">;
        readonly mine: import("../..").TextEntry<"mine">;
        readonly debris: import("../..").TextEntry<"debris">;
    };
    readonly target: {
        readonly title: import("../..").TextEntry<"target data">;
        readonly scan: import("../..").TextEntry<"scan {pct}%">;
        readonly shield: import("../..").TextEntry<"shield">;
        readonly hull: import("../..").TextEntry<"hull">;
        readonly subTarget: import("../..").TextEntry<"sub-target">;
        readonly shieldUp: import("../..").TextEntry<"shield up — drop it first">;
        readonly aim: import("../..").TextEntry<"aim ▸">;
        readonly aimHull: import("../..").TextEntry<"HULL">;
        readonly hullDestroyed: import("../..").TextEntry<"HULL — {designator} destroyed">;
        readonly pointsLocated: import("../..").TextEntry<{
            readonly one: "{count} point located";
            readonly other: "{count} points located";
        }>;
        readonly noPoints: import("../..").TextEntry<"no target points located — have Science scan it">;
        readonly noLock: import("../..").TextEntry<"no target lock — tap a contact on the scope">;
    };
    readonly deflector: {
        readonly title: import("../..").TextEntry<"deflector status">;
        readonly allocation: import("../..").TextEntry<"arc power allocation → engineering">;
    };
    readonly ordnance: {
        readonly title: import("../..").TextEntry<"ordnance">;
        readonly torpedoes: import("../..").TextEntry<"torpedoes">;
        readonly noisemakers: import("../..").TextEntry<"noisemakers">;
        readonly missiles: import("../..").TextEntry<"missiles">;
        readonly rockets: import("../..").TextEntry<"rockets">;
        readonly railgun: import("../..").TextEntry<"railgun → helm">;
        readonly railLine: import("../..").TextEntry<"RAIL {stock} · {status}">;
    };
    readonly rail: {
        readonly cycling: import("../..").TextEntry<"CYCLING {sec}s">;
        readonly ready: import("../..").TextEntry<"READY">;
        readonly cyclingLc: import("../..").TextEntry<"cycling {sec}s">;
        readonly readyLc: import("../..").TextEntry<"ready">;
    };
    readonly launchers: {
        readonly title: import("../..").TextEntry<"launchers">;
        readonly stripMissiles: import("../..").TextEntry<"missiles {n}">;
        readonly stripRail: import("../..").TextEntry<"rail {n} · {status}">;
        readonly missileRack: import("../..").TextEntry<"missile rack">;
        readonly homing: import("../..").TextEntry<"homing · spam to volley">;
        readonly noMissiles: import("../..").TextEntry<"NO MISSILES">;
        readonly noLock: import("../..").TextEntry<"NO LOCK">;
        readonly fireMissile: import("../..").TextEntry<"FIRE MISSILE ▸ {designator}">;
        readonly missilesExpended: import("../..").TextEntry<"missile rack expended">;
        readonly missileNeedsLock: import("../..").TextEntry<"missiles fly to the current lock: tap a contact first">;
        readonly rocketPod: import("../..").TextEntry<"rocket pod">;
        readonly looseTracking: import("../..").TextEntry<"loose-tracking · tap scope">;
        readonly noRockets: import("../..").TextEntry<"NO ROCKETS">;
        readonly armedDisarm: import("../..").TextEntry<"◉ ARMED ×{n} — DISARM">;
        readonly armRockets: import("../..").TextEntry<"ARM ROCKETS ×{n}">;
        readonly podExpended: import("../..").TextEntry<"rocket pod expended">;
        readonly armedHint: import("../..").TextEntry<"taps on the scope fire at that bearing; disarm to restore tap-to-lock">;
        readonly idleHint: import("../..").TextEntry<"while armed, taps on the targeting scope fire instead of locking">;
    };
    readonly beams: {
        readonly title: import("../..").TextEntry<"beam banks">;
        readonly chargeHeat: import("../..").TextEntry<"charge · heat">;
        readonly range: import("../..").TextEntry<"range {n}u">;
        readonly heat: import("../..").TextEntry<"heat {n}">;
        readonly cannoneer: import("../..").TextEntry<"cannoneer">;
        readonly hot: import("../..").TextEntry<"HOT">;
        readonly far: import("../..").TextEntry<"FAR">;
        readonly fire: import("../..").TextEntry<"FIRE">;
        readonly delegatedNote: import("../..").TextEntry<"phaser banks marked {mark} are manned by a Cannoneer">;
        readonly outOfRange: import("../..").TextEntry<"target out of beam range ({dist}u) — close to {range}u">;
    };
    readonly turrets: {
        readonly pdToCupola: import("../..").TextEntry<"point defense → cupola gunner">;
        readonly hold: import("../..").TextEntry<"HOLD">;
        readonly pd: import("../..").TextEntry<"PD">;
        readonly holdSheds: import("../..").TextEntry<"HOLD sheds gun power">;
        readonly title: import("../..").TextEntry<"gun turrets">;
        readonly pdAuto: import("../..").TextEntry<"pd auto · power">;
        readonly pdRange: import("../..").TextEntry<"pd {n}u">;
        readonly heat: import("../..").TextEntry<"heat {n}">;
        readonly rdy: import("../..").TextEntry<"rdy {sec}s">;
        readonly offline: import("../..").TextEntry<"offline">;
        readonly ready: import("../..").TextEntry<"ready">;
        readonly holdNote: import("../..").TextEntry<"HOLD sheds gun power. Auto-PD supersedes it (torpedoes uninterceptable).">;
    };
    readonly torpedo: {
        readonly title: import("../..").TextEntry<"torpedo room">;
        readonly magazine: import("../..").TextEntry<"magazine">;
        readonly magTorpedoes: import("../..").TextEntry<"torpedoes {n}">;
        readonly magNoisemakers: import("../..").TextEntry<"noisemakers {n}">;
        readonly solutionTitle: import("../..").TextEntry<"◈ FIRING SOLUTION">;
        readonly solutionReadout: import("../..").TextEntry<"— brg {brg}° · rng {rng}">;
        readonly solutionTap: import("../..").TextEntry<"· tap to load">;
        readonly bearing: import("../..").TextEntry<"bearing">;
        readonly estRunTarget: import("../..").TextEntry<"est. run to {designator}: ~{sec}s">;
        readonly estRunMark: import("../..").TextEntry<"est. run to mark: ~{sec}s">;
        readonly fishSpeed: import("../..").TextEntry<"fish speed {n}u/s">;
        readonly armDelay: import("../..").TextEntry<"arm delay">;
        readonly armsOut: import("../..").TextEntry<"arms ~{n}u out">;
        readonly noIff: import("../..").TextEntry<"⚠ may arm near own ship (no IFF)">;
        readonly noise: import("../..").TextEntry<"noise">;
        readonly torpedo: import("../..").TextEntry<"torpedo">;
        readonly fire: import("../..").TextEntry<"FIRE">;
        readonly loadTorp: import("../..").TextEntry<"load torp">;
        readonly loadNoise: import("../..").TextEntry<"load noise">;
        readonly inFlight: import("../..").TextEntry<"in flight">;
    };
    readonly flight: {
        readonly missile: import("../..").TextEntry<"MISSILE">;
        readonly rocket: import("../..").TextEntry<"ROCKET">;
        readonly rail: import("../..").TextEntry<"RAIL">;
        readonly noise: import("../..").TextEntry<"NOISE">;
        readonly flare: import("../..").TextEntry<"FLARE">;
        readonly torp: import("../..").TextEntry<"TORP">;
        readonly chasingLock: import("../..").TextEntry<"chasing lock">;
        readonly fizzled: import("../..").TextEntry<"fizzled">;
        readonly wild: import("../..").TextEntry<"wild">;
        readonly looseTracking: import("../..").TextEntry<"loose-tracking">;
        readonly running: import("../..").TextEntry<"running">;
        readonly luring: import("../..").TextEntry<"luring">;
        readonly decoying: import("../..").TextEntry<"decoying">;
        readonly lock: import("../..").TextEntry<"● LOCK">;
        readonly seeking: import("../..").TextEntry<"seeking">;
        readonly active: import("../..").TextEntry<"active">;
        readonly arm: import("../..").TextEntry<"arm {sec}s">;
    };
    readonly unit: {
        readonly sec: import("../..").TextEntry<"{n}s">;
    };
    readonly header: {
        readonly hull: import("../..").TextEntry<"hull">;
    };
    readonly scopeCanvas: {
        readonly ringGun: import("../..").TextEntry<"GUN">;
        readonly ringBeam: import("../..").TextEntry<"BEAM">;
        readonly ringSeeker: import("../..").TextEntry<"SKR">;
        readonly arm: import("../..").TextEntry<"ARM">;
        readonly rangeButton: import("../..").TextEntry<"rng">;
    } & import("../../types").TextGroup;
    readonly schematic: {
        readonly mineCasing: import("../..").TextEntry<"MINE CASING — HULL SHOTS ONLY">;
        readonly aimHull: import("../..").TextEntry<"AIM: HULL">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
