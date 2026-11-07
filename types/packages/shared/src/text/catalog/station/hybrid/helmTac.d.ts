export declare const helmTac: {
    readonly seconds: import("../../..").TextEntry<"{sec}s">;
    readonly title: import("../../..").TextEntry<"PILOT-GUNNER">;
    readonly detent: {
        readonly stop: import("../../..").TextEntry<"STOP">;
        readonly third: import("../../..").TextEntry<"1/3">;
        readonly twoThirds: import("../../..").TextEntry<"2/3">;
        readonly full: import("../../..").TextEntry<"FULL">;
    } & import("../../../types").TextGroup;
    readonly order: {
        readonly allStop: import("../../..").TextEntry<"ALL STOP">;
        readonly ahead13: import("../../..").TextEntry<"AHEAD 1/3">;
        readonly ahead23: import("../../..").TextEntry<"AHEAD 2/3">;
        readonly aheadFull: import("../../..").TextEntry<"AHEAD FULL">;
    } & import("../../../types").TextGroup;
    readonly chip: {
        readonly spd: import("../../..").TextEntry<"spd">;
        readonly hdg: import("../../..").TextEntry<"hdg">;
        readonly ord: import("../../..").TextEntry<"ord">;
        readonly mine: import("../../..").TextEntry<"⚠ mine">;
        readonly haz: import("../../..").TextEntry<"haz">;
        readonly hull: import("../../..").TextEntry<"hull">;
    } & import("../../../types").TextGroup;
    readonly view: {
        readonly map: import("../../..").TextEntry<"map">;
        readonly parascope: import("../../..").TextEntry<"parascope">;
        readonly screen: import("../../..").TextEntry<"⧉ screen">;
    } & import("../../../types").TextGroup;
    readonly lock: {
        readonly rocketsArmed: import("../../..").TextEntry<"ROCKETS ARMED — tap the map to fire">;
        readonly brgRng: import("../../..").TextEntry<"BRG {brg}° · RNG {rng}u">;
        readonly closing: import("../../..").TextEntry<"CLS {sign}{rate}u/s">;
        readonly none: import("../../..").TextEntry<"○ NO LOCK — tap a contact">;
        readonly radiation: import("../../..").TextEntry<"☢ high radiation — hull ablating">;
    } & import("../../../types").TextGroup;
    readonly evasive: {
        readonly on: import("../../..").TextEntry<"⤨ EVASIVE ON">;
        readonly off: import("../../..").TextEntry<"Evasive">;
        readonly hint: import("../../..").TextEntry<"harder to hit · louder">;
    } & import("../../../types").TextGroup;
    readonly jump: {
        readonly engage: import("../../..").TextEntry<"⭍ ENGAGE JUMP">;
        readonly label: import("../../..").TextEntry<"Jump drive">;
        readonly spooled: import("../../..").TextEntry<"spooled — punch it">;
        readonly locked: import("../../..").TextEntry<"drive locked out">;
        readonly opsSpools: import("../../..").TextEntry<"ops spools the charge">;
    } & import("../../../types").TextGroup;
    readonly flare: {
        readonly label: import("../../..").TextEntry<"✺ flare">;
        readonly pointDefense: import("../../..").TextEntry<"your point defense">;
        readonly expended: import("../../..").TextEntry<"PD expended">;
    } & import("../../../types").TextGroup;
    readonly ecm: {
        readonly on: import("../../..").TextEntry<"≋ ECM ON">;
        readonly off: import("../../..").TextEntry<"ECM">;
        readonly drawsPower: import("../../..").TextEntry<"draws power · loud">;
        readonly scrambles: import("../../..").TextEntry<"scrambles homing">;
    } & import("../../../types").TextGroup;
    readonly rail: {
        readonly label: import("../../..").TextEntry<"⌁ rail">;
        readonly noSlugs: import("../../..").TextEntry<"no slugs">;
        readonly armedView: import("../../..").TextEntry<"ARMED — helm fires from the view">;
        readonly armedTap: import("../../..").TextEntry<"◉ ARMED — tap to fire">;
        readonly cycle: import("../../..").TextEntry<"CYC {sec}s">;
        readonly pressToArm: import("../../..").TextEntry<"press to arm">;
        readonly pressToArmSteer: import("../../..").TextEntry<"press to arm · steer to aim">;
    } & import("../../../types").TextGroup;
    readonly chart: {
        readonly label: import("../../..").TextEntry<"⌖ chart">;
        readonly plot: import("../../..").TextEntry<"plot course">;
        readonly locked: import("../../..").TextEntry<"LOCKED">;
    } & import("../../../types").TextGroup;
    readonly throttle: {
        readonly label: import("../../..").TextEntry<"throttle">;
        readonly engines: import("../../..").TextEntry<"engines">;
        readonly offline: import("../../..").TextEntry<"OFFLN">;
        readonly idle: import("../../..").TextEntry<"idle">;
        readonly starved: import("../../..").TextEntry<"⚠ power-starved — thrust degraded">;
    } & import("../../../types").TextGroup;
    readonly dial: {
        readonly ord: import("../../..").TextEntry<"ord">;
        readonly bow: import("../../..").TextEntry<"· bow">;
    } & import("../../../types").TextGroup;
    readonly beam: {
        readonly title: import("../../..").TextEntry<"beam banks">;
        readonly chargeHeat: import("../../..").TextEntry<"charge · heat">;
        readonly range: import("../../..").TextEntry<"range {n}u">;
        readonly heat: import("../../..").TextEntry<"heat {n}">;
        readonly delegatedTitle: import("../../..").TextEntry<"delegated to a Cannoneer">;
        readonly cannoneer: import("../../..").TextEntry<"cannoneer">;
        readonly hot: import("../../..").TextEntry<"HOT">;
        readonly far: import("../../..").TextEntry<"FAR">;
        readonly fire: import("../../..").TextEntry<"FIRE">;
        readonly manned: import("../../..").TextEntry<"⇢ manned by a Cannoneer">;
        readonly noLock: import("../../..").TextEntry<"no lock — tap a contact on the map">;
        readonly outOfRange: import("../../..").TextEntry<"target out of beam range ({dist}u) — close to {range}u">;
    } & import("../../../types").TextGroup;
    readonly torpedo: {
        readonly title: import("../../..").TextEntry<"torpedo room">;
        readonly magazine: import("../../..").TextEntry<"magazine">;
        readonly torpedoes: import("../../..").TextEntry<"torpedoes {n}">;
        readonly noisemakers: import("../../..").TextEntry<"noisemakers {n}">;
        readonly solutionTitle: import("../../..").TextEntry<"◈ FIRING SOLUTION">;
        readonly solutionReadout: import("../../..").TextEntry<"— brg {brg}° · rng {rng}">;
        readonly tapToLoad: import("../../..").TextEntry<"· tap to load">;
        readonly bearing: import("../../..").TextEntry<"bearing">;
        readonly runTo: import("../../..").TextEntry<"est. run to {who}: ~{sec}s">;
        readonly mark: import("../../..").TextEntry<"mark">;
        readonly fishSpeed: import("../../..").TextEntry<"fish speed {n}u/s">;
        readonly noRockets: import("../../..").TextEntry<"NO ROCKETS">;
        readonly mapToArm: import("../../..").TextEntry<"MAP TO ARM">;
        readonly armedDisarm: import("../../..").TextEntry<"◉ ARMED ×{n} — DISARM">;
        readonly armRockets: import("../../..").TextEntry<"ARM ROCKETS ×{n}">;
        readonly looseTracking: import("../../..").TextEntry<"loose-tracking">;
        readonly tapMapToFire: import("../../..").TextEntry<"tap map to fire">;
        readonly armDelay: import("../../..").TextEntry<"arm delay">;
        readonly arms: import("../../..").TextEntry<"arms ~{n}u out">;
        readonly unsafe: import("../../..").TextEntry<"⚠ may arm near own ship (no IFF)">;
        readonly noise: import("../../..").TextEntry<"noise">;
        readonly torp: import("../../..").TextEntry<"torpedo">;
        readonly fire: import("../../..").TextEntry<"FIRE">;
        readonly loadTorp: import("../../..").TextEntry<"load torp">;
        readonly loadNoise: import("../../..").TextEntry<"load noise">;
    } & import("../../../types").TextGroup;
    readonly ordnance: {
        readonly title: import("../../..").TextEntry<"ordnance">;
        readonly torpedoes: import("../../..").TextEntry<"torpedoes">;
        readonly noisemakers: import("../../..").TextEntry<"noisemakers">;
        readonly missiles: import("../../..").TextEntry<"missiles">;
        readonly rockets: import("../../..").TextEntry<"rockets">;
        readonly missileRack: import("../../..").TextEntry<"missile rack">;
        readonly homing: import("../../..").TextEntry<"homing · spam to volley">;
        readonly noMissiles: import("../../..").TextEntry<"NO MISSILES">;
        readonly noLock: import("../../..").TextEntry<"NO LOCK">;
        readonly fireMissile: import("../../..").TextEntry<"FIRE MISSILE ▸ {designator}">;
        readonly expended: import("../../..").TextEntry<"missile rack expended">;
        readonly fliesToLock: import("../../..").TextEntry<"missiles fly to the lock — tap a map contact">;
    } & import("../../../types").TextGroup;
    readonly target: {
        readonly title: import("../../..").TextEntry<"target data">;
        readonly scan: import("../../..").TextEntry<"scan {pct}%">;
        readonly shield: import("../../..").TextEntry<"shield">;
        readonly hull: import("../../..").TextEntry<"hull">;
        readonly subTarget: import("../../..").TextEntry<"sub-target">;
        readonly shieldUp: import("../../..").TextEntry<"shield up — drop it first">;
        readonly aim: import("../../..").TextEntry<"aim ▸">;
        readonly aimHull: import("../../..").TextEntry<"HULL">;
        readonly aimHullDestroyed: import("../../..").TextEntry<"HULL — {designator} destroyed">;
        readonly points: import("../../..").TextEntry<{
            readonly one: "{count} point located";
            readonly other: "{count} points located";
        }>;
        readonly noPoints: import("../../..").TextEntry<"no target points located. Science's scan reveals them.">;
    } & import("../../../types").TextGroup;
} & import("../../../types").TextGroup;
