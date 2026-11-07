export declare const helm: {
    readonly console: {
        readonly title: import("../..").TextEntry<"HELM">;
        readonly header: {
            readonly link: import("../..").TextEntry<"SHIPNET LINK // SB-OS 2.4 ·">;
            readonly clock: import("../..").TextEntry<"T+{clock}">;
        } & import("../../types").TextGroup;
        readonly chip: {
            readonly speed: import("../..").TextEntry<"spd">;
            readonly throttle: import("../..").TextEntry<"thr">;
            readonly heading: import("../..").TextEntry<"hdg">;
            readonly ordered: import("../..").TextEntry<"ord">;
            readonly mine: import("../..").TextEntry<"⚠ mine">;
            readonly hazard: import("../..").TextEntry<"haz">;
        } & import("../../types").TextGroup;
        readonly hull: import("../..").TextEntry<"hull">;
        readonly view: {
            readonly map: import("../..").TextEntry<"map">;
            readonly parascope: import("../..").TextEntry<"parascope">;
        } & import("../../types").TextGroup;
        readonly promote: {
            readonly scope: import("../..").TextEntry<"⧉ screen">;
            readonly chart: import("../..").TextEntry<"⧉ chart on screen">;
        } & import("../../types").TextGroup;
        readonly radiation: import("../..").TextEntry<"☢ high radiation — hull ablating">;
        readonly evasive: {
            readonly on: import("../..").TextEntry<"⤨ EVASIVE ON">;
            readonly off: import("../..").TextEntry<"Evasive">;
            readonly hint: import("../..").TextEntry<"harder to hit · louder">;
        } & import("../../types").TextGroup;
        readonly jump: {
            readonly engage: import("../..").TextEntry<"⭍ ENGAGE JUMP">;
            readonly idle: import("../..").TextEntry<"Jump drive">;
            readonly ready: import("../..").TextEntry<"spooled — punch it (core is heating)">;
            readonly locked: import("../..").TextEntry<"drive locked out — reroute power">;
            readonly waiting: import("../..").TextEntry<"engineering spools the charge">;
        } & import("../../types").TextGroup;
        readonly rail: {
            readonly label: import("../..").TextEntry<"⌁ rail">;
            readonly noSlugs: import("../..").TextEntry<"no slugs">;
            readonly armedScope: import("../..").TextEntry<"ARMED — helm fires from the view">;
            readonly armed: import("../..").TextEntry<"◉ ARMED — tap to fire">;
            readonly cycling: import("../..").TextEntry<"CYCLING {sec}s">;
            readonly pressArm: import("../..").TextEntry<"press to arm">;
            readonly pressArmSteer: import("../..").TextEntry<"press to arm · steer to aim">;
            readonly bears: import("../..").TextEntry<"rail bears on bow {bearing}° — steer to aim">;
        } & import("../../types").TextGroup;
        readonly ecm: {
            readonly on: import("../..").TextEntry<"≋ ECM ON">;
            readonly off: import("../..").TextEntry<"ECM">;
            readonly hintOn: import("../..").TextEntry<"draws power · loud">;
            readonly hintOff: import("../..").TextEntry<"scrambles homing">;
        } & import("../../types").TextGroup;
        readonly flare: {
            readonly label: import("../..").TextEntry<"✺ flare">;
            readonly hintReady: import("../..").TextEntry<"not torpedoes">;
            readonly hintSpent: import("../..").TextEntry<"spent">;
        } & import("../../types").TextGroup;
        readonly chart: {
            readonly label: import("../..").TextEntry<"⌖ chart">;
            readonly plotCourse: import("../..").TextEntry<"plot course">;
            readonly locked: import("../..").TextEntry<"LOCKED">;
        } & import("../../types").TextGroup;
        readonly throttle: {
            readonly label: import("../..").TextEntry<"throttle">;
            readonly order: {
                readonly allStop: import("../..").TextEntry<"ALL STOP">;
                readonly aheadThird: import("../..").TextEntry<"AHEAD 1/3">;
                readonly aheadTwoThirds: import("../..").TextEntry<"AHEAD 2/3">;
                readonly aheadFull: import("../..").TextEntry<"AHEAD FULL">;
            } & import("../../types").TextGroup;
            readonly detent: {
                readonly stop: import("../..").TextEntry<"STOP">;
                readonly third: import("../..").TextEntry<"1/3">;
                readonly twoThirds: import("../..").TextEntry<"2/3">;
                readonly full: import("../..").TextEntry<"FULL">;
            } & import("../../types").TextGroup;
        } & import("../../types").TextGroup;
        readonly engines: {
            readonly label: import("../..").TextEntry<"engines">;
            readonly offline: import("../..").TextEntry<"OFFLN">;
            readonly idle: import("../..").TextEntry<"idle">;
            readonly starved: import("../..").TextEntry<"⚠ power-starved — thrust degraded">;
        } & import("../../types").TextGroup;
        readonly caption: {
            readonly ordered: import("../..").TextEntry<"ord">;
            readonly bow: import("../..").TextEntry<"bow">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly compass: {
        readonly cardinal: {
            readonly north: import("../..").TextEntry<"N">;
            readonly east: import("../..").TextEntry<"E">;
            readonly south: import("../..").TextEntry<"S">;
            readonly west: import("../..").TextEntry<"W">;
        } & import("../../types").TextGroup;
        readonly heading: import("../..").TextEntry<"HDG">;
        readonly ordered: import("../..").TextEntry<"ORD">;
        readonly slew: import("../..").TextEntry<"{dir} {delta}° @ {rate}°/s {dir}">;
    } & import("../../types").TextGroup;
    readonly starMap: {
        readonly awaiting: import("../..").TextEntry<"AWAITING CHARTS">;
        readonly surveying: import("../..").TextEntry<"long-range survey in progress">;
        readonly debris: import("../..").TextEntry<"⚠ DEBRIS">;
        readonly dest: import("../..").TextEntry<"▸ DEST">;
        readonly header: {
            readonly title: import("../..").TextEntry<"NAV CHART // GALAXY">;
            readonly system: import("../..").TextEntry<"SYS: {name}">;
            readonly uncharted: import("../..").TextEntry<"UNCHARTED">;
            readonly legend: import("../..").TextEntry<"● charted · ◌ signal frontier · faint = beyond sensors">;
            readonly close: import("../..").TextEntry<"close chart">;
        } & import("../../types").TextGroup;
        readonly hint: import("../..").TextEntry<"tap a linked system to lock destination · tap again to release">;
        readonly footer: {
            readonly dest: import("../..").TextEntry<"dest">;
            readonly random: import("../..").TextEntry<"RANDOM LINKED">;
            readonly locked: import("../..").TextEntry<"LOCKED">;
            readonly jump: import("../..").TextEntry<"jump">;
            readonly clear: import("../..").TextEntry<"clear">;
            readonly engage: import("../..").TextEntry<"⭍ engage jump">;
            readonly driveLocked: import("../..").TextEntry<"⚠ drive locked out">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
