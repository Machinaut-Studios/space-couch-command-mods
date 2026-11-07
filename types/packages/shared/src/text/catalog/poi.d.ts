export declare const poi: {
    readonly action: {
        readonly mineral: {
            readonly label: import("..").TextEntry<"EXTRACT">;
            readonly blurb: import("..").TextEntry<"beam-cut the seam and haul it aboard">;
        };
        readonly relic: {
            readonly label: import("..").TextEntry<"RETRIEVE">;
            readonly blurb: import("..").TextEntry<"send a probe to lift the object">;
        };
        readonly hatch: {
            readonly label: import("..").TextEntry<"SEND PROBE">;
            readonly blurb: import("..").TextEntry<"put a probe through the opening">;
        };
        readonly signal: {
            readonly label: import("..").TextEntry<"DECODE">;
            readonly blurb: import("..").TextEntry<"run the pattern through the decoder">;
        };
        readonly organism: {
            readonly label: import("..").TextEntry<"SAMPLE">;
            readonly blurb: import("..").TextEntry<"take a remote biological sample">;
        };
        readonly core: {
            readonly label: import("..").TextEntry<"TAP">;
            readonly blurb: import("..").TextEntry<"siphon the cell before it destabilizes">;
        };
    } & import("../types").TextGroup;
    readonly campaign: {
        readonly sleeperPodRows: "CRYSTAL SLEEPER POD — ROW ON ROW";
        readonly sleeperPodPulse: "CRYSTAL SLEEPER POD — FAINT PULSE";
        readonly archive: "THE ARCHIVE — woven record";
        readonly severedRecord: "SEVERED RECORD — archive tail";
    } & import("../types").TextGroup;
    readonly log: {
        readonly surveyResolves: import("..").TextEntry<"Survey resolves {designator} — {label} ({action} available)">;
        readonly reviewAction: import("..").TextEntry<"REVIEW">;
    } & import("../types").TextGroup;
} & import("../types").TextGroup;
