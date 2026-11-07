export declare const solo: {
    readonly unit: {
        readonly sec: import("../..").TextEntry<"{n}s">;
        readonly dist: import("../..").TextEntry<"{n}u">;
    } & import("../../types").TextGroup;
    readonly detent: {
        readonly stop: "STOP";
        readonly third: import("../..").TextEntry<"1/3">;
        readonly twoThirds: import("../..").TextEntry<"2/3">;
        readonly full: "FULL";
    } & import("../../types").TextGroup;
    readonly throttleOrder: {
        readonly allStop: "ALL STOP";
        readonly ahead13: import("../..").TextEntry<"AHEAD 1/3">;
        readonly ahead23: import("../..").TextEntry<"AHEAD 2/3">;
        readonly aheadFull: "AHEAD FULL";
    } & import("../../types").TextGroup;
    readonly shipmaster: import("../..").TextEntry<"SHIPMASTER">;
    readonly chip: {
        readonly spd: import("../..").TextEntry<"spd">;
        readonly hdg: import("../..").TextEntry<"hdg">;
        readonly ord: import("../..").TextEntry<"ord">;
        readonly mine: import("../..").TextEntry<"⚠ mine">;
        readonly haz: import("../..").TextEntry<"haz">;
    } & import("../../types").TextGroup;
    readonly label: {
        readonly hull: import("../..").TextEntry<"hull">;
        readonly shield: import("../..").TextEntry<"shield">;
    } & import("../../types").TextGroup;
    readonly view: {
        readonly map: "map";
        readonly parascope: "parascope";
        readonly promote: import("../..").TextEntry<"⧉ screen">;
    } & import("../../types").TextGroup;
    readonly lock: {
        readonly rocketsArmed: import("../..").TextEntry<"ROCKETS ARMED — tap the map to fire">;
        readonly brgRng: import("../..").TextEntry<"BRG {brg}° · RNG {rng}u">;
        readonly closing: import("../..").TextEntry<"CLS {sign}{speed}u/s">;
        readonly none: import("../..").TextEntry<"○ NO LOCK — tap a contact">;
    } & import("../../types").TextGroup;
    readonly radiation: import("../..").TextEntry<"☢ high radiation — hull ablating">;
    readonly evasive: {
        readonly on: "⤨ EVASIVE ON";
        readonly off: "Evasive";
        readonly hint: import("../..").TextEntry<"harder to hit · louder">;
    } & import("../../types").TextGroup;
    readonly jump: {
        readonly engage: "⭍ ENGAGE JUMP";
        readonly spooling: "◉ Spooling";
        readonly spool: "Spool jump";
        readonly punch: import("../..").TextEntry<"spooled — punch it">;
        readonly locked: import("../..").TextEntry<"drive locked out">;
        readonly tapCharge: import("../..").TextEntry<"tap to charge the drive">;
    } & import("../../types").TextGroup;
    readonly flare: {
        readonly label: import("../..").TextEntry<"flare">;
        readonly ready: import("../..").TextEntry<"your point defense">;
        readonly expended: import("../..").TextEntry<"PD expended">;
    } & import("../../types").TextGroup;
    readonly ecm: {
        readonly on: "≋ ECM ON";
        readonly off: "ECM";
        readonly hintOn: import("../..").TextEntry<"draws power · loud">;
        readonly hintOff: import("../..").TextEntry<"scrambles homing">;
    } & import("../../types").TextGroup;
    readonly rail: {
        readonly label: import("../..").TextEntry<"⌁ rail">;
        readonly noSlugs: import("../..").TextEntry<"no slugs">;
        readonly armedView: import("../..").TextEntry<"ARMED — fire from the view">;
        readonly armedTap: import("../..").TextEntry<"◉ ARMED — tap to fire">;
        readonly cycling: import("../..").TextEntry<"CYC {sec}s">;
        readonly pressArm: import("../..").TextEntry<"press to arm">;
        readonly pressArmSteer: import("../..").TextEntry<"press to arm · steer to aim">;
    } & import("../../types").TextGroup;
    readonly chart: {
        readonly label: "⌖ chart";
        readonly plot: import("../..").TextEntry<"plot course">;
        readonly destFallback: import("../..").TextEntry<"LOCKED">;
    } & import("../../types").TextGroup;
    readonly throttle: {
        readonly label: "throttle";
        readonly engines: "engines";
        readonly offline: import("../..").TextEntry<"OFFLN">;
        readonly idle: import("../..").TextEntry<"idle">;
        readonly starved: import("../..").TextEntry<"⚠ power-starved — thrust degraded">;
    } & import("../../types").TextGroup;
    readonly heading: {
        readonly ord: import("../..").TextEntry<"ord">;
        readonly bow: import("../..").TextEntry<"bow">;
    } & import("../../types").TextGroup;
    readonly fire: {
        readonly title: "fire control";
        readonly beam: import("../..").TextEntry<"beam {range}u">;
        readonly torp: import("../..").TextEntry<"torp {n}">;
        readonly noise: import("../..").TextEntry<"noise {n}">;
        readonly heat: import("../..").TextEntry<"heat {n}">;
        readonly hot: import("../..").TextEntry<"HOT">;
        readonly far: import("../..").TextEntry<"FAR">;
        readonly go: import("../..").TextEntry<"FIRE">;
        readonly cannoneer: import("../..").TextEntry<"cannoneer">;
        readonly cannoneerTitle: import("../..").TextEntry<"delegated to a Cannoneer">;
        readonly manned: import("../..").TextEntry<"⇢ manned by a Cannoneer">;
        readonly noLockHint: import("../..").TextEntry<"no lock — tap a contact on the map">;
        readonly outOfRange: import("../..").TextEntry<"out of beam range ({dist}u) — close to {range}u">;
        readonly solution: import("../..").TextEntry<"◈ FIRING SOLUTION">;
        readonly solutionDetail: import("../..").TextEntry<"— brg {brg}° · rng {rng}">;
        readonly tapLoad: import("../..").TextEntry<"· tap to load">;
        readonly brg: import("../..").TextEntry<"brg">;
        readonly dly: import("../..").TextEntry<"dly">;
        readonly arms: import("../..").TextEntry<"arms ~{n}u">;
        readonly runTo: import("../..").TextEntry<"run to {what} ~{sec}s">;
        readonly runMark: import("../..").TextEntry<"mark">;
        readonly fish: import("../..").TextEntry<"fish {speed}u/s">;
        readonly armsNear: import("../..").TextEntry<"⚠ arms near own ship">;
    } & import("../../types").TextGroup;
    readonly weapon: {
        readonly phaser: "phaser";
    } & import("../../types").TextGroup;
    readonly tube: {
        readonly noise: import("../..").TextEntry<"noise">;
        readonly torpedo: "torpedo";
        readonly loadTorp: "load torp";
        readonly loadNoise: "load noise";
    } & import("../../types").TextGroup;
    readonly rack: {
        readonly missileTitleAt: import("../..").TextEntry<"fire missile at {target}">;
        readonly missileTitleNone: import("../..").TextEntry<"missiles fly to the lock — tap a map contact">;
        readonly noMissiles: "NO MISSILES";
        readonly missileNoLock: "MSL · NO LOCK";
        readonly missileFire: import("../..").TextEntry<"MSL ▸ {target}">;
        readonly rocketTitle: import("../..").TextEntry<"arm, then tap the map to fire a rocket at that bearing">;
        readonly noRockets: "NO ROCKETS";
        readonly mapToArm: import("../..").TextEntry<"MAP TO ARM">;
        readonly armed: import("../..").TextEntry<"◉ ARMED ×{n}">;
        readonly arm: import("../..").TextEntry<"ARM RKTS ×{n}">;
        readonly hint: import("../..").TextEntry<"rockets: arm, then tap the map to fire · missiles home on the lock">;
        readonly torps: import("../..").TextEntry<"torps">;
        readonly noiseStock: import("../..").TextEntry<"noise">;
        readonly msls: import("../..").TextEntry<"msls">;
        readonly rkts: import("../..").TextEntry<"rkts">;
    } & import("../../types").TextGroup;
    readonly target: {
        readonly title: "target data";
        readonly scan: import("../..").TextEntry<"scan {pct}%">;
        readonly subTarget: import("../..").TextEntry<"sub-target">;
        readonly shieldUp: import("../..").TextEntry<"shield up — drop it first">;
        readonly aim: import("../..").TextEntry<"aim ▸">;
        readonly aimHull: import("../..").TextEntry<"HULL">;
        readonly aimDestroyed: import("../..").TextEntry<"HULL — {part} destroyed">;
        readonly located: import("../..").TextEntry<"{n} located">;
        readonly scanReveals: import("../..").TextEntry<"scan reveals points">;
        readonly none: import("../..").TextEntry<"no lock — target data on lock">;
    } & import("../../types").TextGroup;
    readonly jumpStrip: {
        readonly outage: "forced outage — reroute power";
        readonly hailIncoming: "incoming hail — answer";
        readonly hailOpen: "channel open — hail";
        readonly probe: import("../..").TextEntry<"probe active — stick">;
    } & import("../../types").TextGroup;
    readonly power: {
        readonly title: import("../..").TextEntry<"systems · auto-officers">;
        readonly forcedOffline: import("../..").TextEntry<"{systems} FORCED OFFLINE">;
        readonly reroute: "⚡ Reroute";
        readonly salvageTitle: import("../..").TextEntry<"salvage — auto-repairs spend it">;
        readonly repChip: import("../..").TextEntry<"rep {pct}%">;
        readonly repTitle: import("../..").TextEntry<"auto-repair module — runs itself, spends salvage">;
        readonly ventingChip: import("../..").TextEntry<"venting {sec}s">;
        readonly vent: import("../..").TextEntry<"vent">;
        readonly ventingTitle: import("../..").TextEntry<"auto-vent — output halved">;
        readonly ventArmedTitle: import("../..").TextEntry<"auto-vent armed — trips at core {heat}">;
        readonly coreChip: import("../..").TextEntry<"core {pct}%">;
        readonly coreTitle: import("../..").TextEntry<"reactor core temperature">;
        readonly stalled: import("../..").TextEntry<"⚠ auto-repair stalled">;
        readonly output: import("../..").TextEntry<"OUTPUT {n}u/s">;
        readonly over: import("../..").TextEntry<"OVER {n}">;
        readonly free: import("../..").TextEntry<"FREE {n}">;
        readonly integrity: import("../..").TextEntry<"{system} — integrity {pct}%">;
        readonly bus: import("../..").TextEntry<"bus">;
        readonly lockedOut: import("../..").TextEntry<"⚠ LOCKED OUT">;
        readonly offline: "OFFLINE";
        readonly priorityLabel: import("../..").TextEntry<"{system} power priority">;
        readonly granted: import("../..").TextEntry<"granted {granted} of {demand}u demand · priority {pct}%">;
        readonly restoreTitle: import("../..").TextEntry<"restore power (previous setting)">;
        readonly cutTitle: import("../..").TextEntry<"cut power (priority 0)">;
        readonly breakerRestore: import("../..").TextEntry<"{system} breaker: restore">;
        readonly breakerCut: import("../..").TextEntry<"{system} breaker: cut">;
        readonly off: import("../..").TextEntry<"OFF">;
    } & import("../../types").TextGroup;
    readonly sysTag: {
        readonly reactor: import("../..").TextEntry<"RCT">;
        readonly engines: import("../..").TextEntry<"ENG">;
        readonly sensors: import("../..").TextEntry<"SNS">;
        readonly jumpDrive: import("../..").TextEntry<"JMP">;
        readonly shields: import("../..").TextEntry<"SHD">;
        readonly weapons: import("../..").TextEntry<"WPN">;
    } & import("../../types").TextGroup;
    readonly spool: {
        readonly on: import("../..").TextEntry<"◉ spool">;
        readonly off: import("../..").TextEntry<"spool">;
        readonly label: "jump";
        readonly charged: import("../..").TextEntry<"✦ charged — engage from the flight dock">;
        readonly starved: import("../..").TextEntry<"⚠ not enough free power (needs {n}u)">;
        readonly throttled: import("../..").TextEntry<"drive throttled to {pct}%">;
    } & import("../../types").TextGroup;
    readonly shield: {
        readonly tag: import("../..").TextEntry<"DFL">;
        readonly title: import("../..").TextEntry<"deflector — one dial, four arcs">;
        readonly chargeTitle: import("../..").TextEntry<"charge {charge}/{max}">;
        readonly allocation: import("../..").TextEntry<"shield allocation — all arcs">;
        readonly average: import("../..").TextEntry<"average charge">;
    } & import("../../types").TextGroup;
    readonly signals: {
        readonly probePilot: "probe pilot";
        readonly sensors: "sensors";
        readonly faceSweep: import("../..").TextEntry<"sweep">;
        readonly faceScan: import("../..").TextEntry<"scan">;
        readonly faceProbe: import("../..").TextEntry<"probe">;
        readonly surveys: import("../..").TextEntry<"◈ surveys ×{n}">;
        readonly closeSurvey: import("../..").TextEntry<"✕ close survey board">;
    } & import("../../types").TextGroup;
    readonly sweep: {
        readonly brg: import("../..").TextEntry<"BRG">;
        readonly rng: import("../..").TextEntry<"RNG">;
        readonly dly: import("../..").TextEntry<"DLY {sec}s">;
        readonly solutionLive: import("../..").TextEntry<"● SOLUTION LIVE — drag to aim">;
        readonly scanning: import("../..").TextEntry<"▸ SCAN {target} · {pct}%">;
        readonly outOfRange: import("../..").TextEntry<"⚠ OUT OF RANGE">;
        readonly passive: import("../..").TextEntry<"○ PASSIVE SWEEP — tap a return to scan">;
        readonly mode: import("../..").TextEntry<"mode">;
        readonly modePlot: import("../..").TextEntry<"◉ PLOT">;
        readonly modeScan: import("../..").TextEntry<"○ SCAN">;
    } & import("../../types").TextGroup;
    readonly scanStrip: {
        readonly stop: import("../..").TextEntry<"stop">;
        readonly passive: import("../..").TextEntry<"passive sweep · tap to scan">;
        readonly outOfRange: import("../..").TextEntry<"⚠ OUT OF SENSOR RANGE — close to {range}u ({dist}u now)">;
        readonly jumpSpool: import("../..").TextEntry<"⚠ jump spool detected — escape drive at {pct}%">;
    } & import("../../types").TextGroup;
    readonly ledger: {
        readonly label: "ledger";
        readonly title: import("../..").TextEntry<"diplomatic ledger — moved by how you answer hails">;
        readonly factionTitle: import("../..").TextEntry<"{faction}: {value}">;
        readonly faction: {
            readonly corsairs: "CORSAIRS";
            readonly syndicate: "SYNDICATE";
            readonly guild: "GUILD";
            readonly velshaar: "VEL'SHAAR";
        } & import("../../types").TextGroup;
        readonly stance: {
            readonly hostile: "hostile";
            readonly wary: "wary";
            readonly neutral: "neutral";
            readonly respected: "respected";
            readonly feared: "feared";
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
