export declare const sim: {
    readonly power: {
        readonly reactorCritical: import("..").TextEntry<"REACTOR CRITICAL — core temperature past the red line">;
        readonly heatVented: import("..").TextEntry<"Heat vented — output restored">;
        readonly reactorRecovered: import("..").TextEntry<"Reactor core back below the red line">;
    } & import("../types").TextGroup;
    readonly mines: {
        readonly detonation: import("..").TextEntry<"Mine detonation — hull integrity {pct}%">;
        readonly lock: import("..").TextEntry<"Mine lock — {designator} inbound!">;
    } & import("../types").TextGroup;
    readonly eng: {
        readonly venting: import("..").TextEntry<"Venting plasma — output halved for {sec}s">;
    } & import("../types").TextGroup;
    readonly screen: {
        readonly setByName: import("..").TextEntry<"{name}">;
    } & import("../types").TextGroup;
} & import("../types").TextGroup;
