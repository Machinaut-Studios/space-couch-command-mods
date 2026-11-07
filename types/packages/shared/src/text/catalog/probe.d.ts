export declare const probe: {
    readonly bracket: {
        readonly loot: "SALVAGE POD";
        readonly prize: "CORE SAMPLE";
        readonly terminal: "TERMINAL";
        readonly terminalRead: import("..").TextEntry<"TERMINAL·READ">;
        readonly exitPad: "EXIT PAD";
        readonly arc: import("..").TextEntry<"ARC HAZARD">;
        readonly vent: import("..").TextEntry<"VENT">;
        readonly collapse: import("..").TextEntry<"COLLAPSING PLATE">;
    } & import("../types").TextGroup;
    readonly card: {
        readonly landing: {
            readonly acquiring: import("..").TextEntry<"TELEMETRY ACQUIRING{dots}">;
        } & import("../types").TextGroup;
        readonly lost: {
            readonly title: import("..").TextEntry<"SIGNAL LOST">;
            readonly noReason: import("..").TextEntry<"carrier dropped — no telemetry">;
        } & import("../types").TextGroup;
        readonly recovered: {
            readonly title: import("..").TextEntry<"PROBE RECOVERED">;
            readonly archived: import("..").TextEntry<"telemetry archived">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
    readonly endReason: {
        readonly caught: "contact lost — something found it";
        readonly aborted: "probe scuttled";
        readonly jump: "tether severed by jump transit";
        readonly wrecked: "hull integrity zero";
    } & import("../types").TextGroup;
    readonly hud: {
        readonly recovery: import("..").TextEntry<"RECOVERY {carried}/{total}">;
        readonly recoveryPrize: import("..").TextEntry<"RECOVERY {carried}/{total} · ✦ CORE SAMPLE SECURED">;
        readonly noise: import("..").TextEntry<"NOISE">;
        readonly hull: import("..").TextEntry<"HULL">;
        readonly extraction: import("..").TextEntry<"EXTRACTION CHANNEL ▸ {pct}%">;
    } & import("../types").TextGroup;
    readonly radar: {
        readonly contact: import("..").TextEntry<"CONTACT">;
        readonly contactLost: import("..").TextEntry<"CONTACT LOST">;
        readonly pingReady: import("..").TextEntry<"PING READY">;
        readonly extracting: import("..").TextEntry<"EXTRACTION IN PROGRESS">;
    } & import("../types").TextGroup;
    readonly standby: {
        readonly view: {
            readonly title: import("..").TextEntry<"NO PROBE TELEMETRY">;
            readonly hint: import("..").TextEntry<"launch from a survey return">;
        } & import("../types").TextGroup;
        readonly radar: {
            readonly title: import("..").TextEntry<"SWEEP OFFLINE">;
            readonly hint: import("..").TextEntry<"no probe on the wire">;
        } & import("../types").TextGroup;
    } & import("../types").TextGroup;
} & import("../types").TextGroup;
