export declare const stages: {
    readonly comms: {
        readonly idle: {
            readonly title: import("../..").TextEntry<"CHANNEL MONITOR">;
            readonly sub: import("../..").TextEntry<"— NO ACTIVE TRANSMISSION —">;
            readonly none: import("../..").TextEntry<"NO TRAFFIC LOGGED">;
            readonly last: import("../..").TextEntry<"LAST TRANSMISSION: {contact}">;
        } & import("../../types").TextGroup;
        readonly live: {
            readonly label: import("../..").TextEntry<"LIVE TRANSMISSION">;
            readonly unknownContact: import("../..").TextEntry<"UNKNOWN CONTACT">;
            readonly contactFaction: import("../..").TextEntry<"{speaker} — {faction}">;
            readonly receiving: import("../..").TextEntry<"◍ RECEIVING TRANSMISSION…">;
            readonly respCaption: import("../..").TextEntry<"RESPONSE OPTIONS — COMMS IS RESPONDING…">;
            readonly endTransmission: import("../..").TextEntry<"◈ END TRANSMISSION">;
            readonly expiryCaption: import("../..").TextEntry<"RESPONSE WINDOW">;
            readonly expirySecs: import("../..").TextEntry<"{secs}s">;
        } & import("../../types").TextGroup;
        readonly signal: {
            readonly title: import("../..").TextEntry<"{label} — {designator}">;
            readonly unknownSignal: import("../..").TextEntry<"UNKNOWN SIGNAL">;
            readonly sub: import("../..").TextEntry<"PASSIVE MONITOR — RECEIVE ONLY · NO RETURN CHANNEL">;
            readonly listening: import("../..").TextEntry<"· · · LISTENING">;
            readonly carrierBurst: import("../..").TextEntry<"◍ CARRIER BURST">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly chart: {
        readonly caption: import("../..").TextEntry<"NAV CHART // GALAXY">;
        readonly sysTitle: import("../..").TextEntry<"SYS: {name}">;
        readonly legend: import("../..").TextEntry<"● CHARTED · ◌ SIGNAL FRONTIER · FAINT = BEYOND SENSORS">;
        readonly dest: import("../..").TextEntry<"DEST ▸ {name}">;
        readonly destRandom: import("../..").TextEntry<"RANDOM LINKED">;
        readonly destLocked: import("../..").TextEntry<"LOCKED">;
        readonly uncharted: import("../..").TextEntry<"UNCHARTED">;
        readonly destTag: import("../..").TextEntry<"▸ DEST">;
        readonly debris: import("../..").TextEntry<"⚠ DEBRIS">;
        readonly idle: {
            readonly title: import("../..").TextEntry<"AWAITING CHARTS">;
            readonly sub: import("../..").TextEntry<"LONG-RANGE SURVEY IN PROGRESS">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly helm: {
        readonly heading: import("../..").TextEntry<"HEADING">;
        readonly evasive: import("../..").TextEntry<"EVASIVE">;
        readonly throttle: import("../..").TextEntry<"THROTTLE">;
        readonly jumpCharge: import("../..").TextEntry<"JUMP CHARGE">;
        readonly jumpReady: import("../..").TextEntry<"READY">;
        readonly jumpEngage: import("../..").TextEntry<"JUMP CHARGE — HELM: ENGAGE">;
        readonly jumpSpooling: import("../..").TextEntry<"JUMP CHARGE — SPOOLING">;
        readonly hazards: {
            readonly caption: import("../..").TextEntry<"NEAREST HAZARDS">;
            readonly captionLock: import("../..").TextEntry<"NEAREST HAZARDS — MINE LOCK">;
            readonly captionNone: import("../..").TextEntry<"NEAREST HAZARDS — NONE">;
            readonly asteroid: import("../..").TextEntry<"AST   {designator} {dist}u">;
            readonly mine: import("../..").TextEntry<"MINE  {name} {dist}u">;
            readonly mineLock: import("../..").TextEntry<"MINE  {name} {dist}u ◀ LOCK">;
            readonly unknownMine: import("../..").TextEntry<"unknown">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly eng: {
        readonly headline: import("../..").TextEntry<"REACTOR {out} u/s · DEMAND {demand} u/s">;
        readonly overclock: import("../..").TextEntry<"⚠ OVERCLOCK">;
        readonly colSystem: import("../..").TextEntry<"SYSTEM">;
        readonly colIntegrity: import("../..").TextEntry<"INTEGRITY">;
        readonly colPower: import("../..").TextEntry<"POWER ALLOC / DEMAND">;
        readonly system: {
            readonly reactor: "REACTOR";
            readonly engines: "ENGINES";
            readonly jumpDrive: "JUMP DRIVE";
            readonly lifeSupport: "LIFE SUPPORT";
            readonly sensors: "SENSORS";
            readonly weapons: "WEAPONS";
            readonly shields: "SHIELDS";
        } & import("../../types").TextGroup;
        readonly rowOffline: import("../..").TextEntry<"{system}  [OFFLINE]">;
        readonly power: import("../..").TextEntry<"{alloc}/{dem} u/s">;
        readonly idle: import("../..").TextEntry<"idle">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
