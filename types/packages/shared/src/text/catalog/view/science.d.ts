export declare const science: {
    readonly idle: {
        readonly title: import("../..").TextEntry<"NO ACTIVE SCAN">;
        readonly hint: import("../..").TextEntry<"SCIENCE: SELECT A CONTACT TO SCAN">;
    } & import("../../types").TextGroup;
    readonly analysisCaption: import("../..").TextEntry<"ANALYSIS">;
    readonly targetPointsCaption: import("../..").TextEntry<"TARGET POINTS">;
    readonly vitals: {
        readonly hull: import("../..").TextEntry<"HULL {cur}/{max}">;
        readonly shield: import("../..").TextEntry<"SHIELD {cur}/{max}">;
    } & import("../../types").TextGroup;
    readonly spoolWarn: import("../..").TextEntry<"⚠ JUMP SPOOL DETECTED — ESCAPE DRIVE {pct}%">;
    readonly probesAboard: import("../..").TextEntry<"PROBES ABOARD {count}">;
    readonly classText: {
        readonly unresolved: import("../..").TextEntry<"UNRESOLVED RETURN">;
        readonly unknown: import("../..").TextEntry<"CLASS UNKNOWN — SCAN IN PROGRESS">;
    } & import("../../types").TextGroup;
    readonly typeWord: {
        readonly derelict: "DERELICT HULK";
        readonly mine: "PROXIMITY MINE";
        readonly friendly: "CIVILIAN FREIGHTER";
        readonly asteroid: "ASTEROID";
        readonly unknown: "UNKNOWN OBJECT";
    } & import("../../types").TextGroup;
    readonly subRow: {
        readonly online: import("../..").TextEntry<"◈ {designator}">;
        readonly offline: import("../..").TextEntry<"◈ {designator}  [OFFLINE]">;
        readonly empty: import("../..").TextEntry<"NO TARGET POINTS LOCATED — KEEP SCANNING">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
