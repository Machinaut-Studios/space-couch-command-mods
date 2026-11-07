export declare const engSciComms: {
    readonly station: import("../../..").TextEntry<"Operations">;
    readonly hull: import("../../..").TextEntry<"hull">;
    readonly outage: {
        readonly banner: import("../../..").TextEntry<"{systems} FORCED OFFLINE">;
        readonly systemFallback: import("../../..").TextEntry<"system">;
        readonly reroute: import("../../..").TextEntry<"⚡ Reroute power">;
    } & import("../../../types").TextGroup;
    readonly power: {
        readonly title: import("../../..").TextEntry<"power distribution · ops modules">;
        readonly salvageTitle: import("../../..").TextEntry<"salvage — auto-repairs spend it">;
        readonly salvageUnit: import("../../..").TextEntry<"· salvage">;
        readonly noSalvage: import("../../..").TextEntry<"⚠ no salvage — auto-repair stalled">;
        readonly output: import("../../..").TextEntry<"OUTPUT {output}u/s">;
        readonly over: import("../../..").TextEntry<"OVER {amount}">;
        readonly free: import("../../..").TextEntry<"FREE {amount}">;
        readonly coach: import("../../..").TextEntry<"Draw = {formula}. Drag a bar to set priority. {cut} cuts to 0 and remembers. Repairs are automatic ({pct}% rate); they spend salvage.">;
        readonly coachFormula: import("../../..").TextEntry<"demand × priority">;
        readonly benchCoach: import("../../..").TextEntry<"draw = demand × priority · ✂ cuts & remembers">;
    } & import("../../../types").TextGroup;
    readonly module: {
        readonly autoRepair: import("../../..").TextEntry<"auto-repair {pct}%">;
        readonly runsItself: import("../../..").TextEntry<"runs itself">;
        readonly autoVentVenting: import("../../..").TextEntry<"auto-vent — venting {sec}s">;
        readonly autoVentArmed: import("../../..").TextEntry<"auto-vent armed">;
        readonly outputHalved: import("../../..").TextEntry<"output halved">;
        readonly tripsAt: import("../../..").TextEntry<"trips at core {heat}">;
        readonly core: import("../../..").TextEntry<"core {pct}%">;
        readonly temp: import("../../..").TextEntry<"temp">;
    } & import("../../../types").TextGroup;
    readonly reactor: {
        readonly coreSource: import("../../..").TextEntry<"core source — feeds bus">;
        readonly bus: import("../../..").TextEntry<"bus">;
        readonly lockedOut: import("../../..").TextEntry<"⚠ LOCKED OUT">;
        readonly offline: import("../../..").TextEntry<"OFFLINE">;
        readonly output: import("../../..").TextEntry<"{output}u">;
    } & import("../../../types").TextGroup;
    readonly jump: {
        readonly title: import("../../..").TextEntry<"jump drive · deflector">;
        readonly spooling: import("../../..").TextEntry<"◉ Spooling">;
        readonly spool: import("../../..").TextEntry<"Spool jump">;
        readonly charge: import("../../..").TextEntry<"jump charge">;
        readonly charged: import("../../..").TextEntry<"✦ charged — the pilot can engage">;
        readonly starved: import("../../..").TextEntry<"⚠ not enough free power (needs {need}u) — deallocate a system">;
        readonly throttled: import("../../..").TextEntry<"drive throttled to {pct}% — spool is slower">;
        readonly draws: import("../../..").TextEntry<"draws {rate} u/s while spooling">;
        readonly off: import("../../..").TextEntry<"off — no power drawn">;
    } & import("../../../types").TextGroup;
    readonly shield: {
        readonly title: import("../../..").TextEntry<"Deflector — all arcs">;
        readonly chg: import("../../..").TextEntry<"chg">;
        readonly chargeTitle: import("../../..").TextEntry<"charge {cur}/{max}">;
        readonly allocLabel: import("../../..").TextEntry<"shield allocation — all arcs">;
        readonly caption: import("../../..").TextEntry<"one dial, four arcs; power spreads equally · allocation drives SHIELDS demand">;
    } & import("../../../types").TextGroup;
    readonly ping: {
        readonly title: import("../../..").TextEntry<"active ping — reveals the interior AND attracts it (LOUD)">;
        readonly noCarrier: import("../../..").TextEntry<"◌ no carrier">;
        readonly ready: import("../../..").TextEntry<"◉ ping">;
        readonly cooldown: import("../../..").TextEntry<"◌ ping {sec}s">;
    } & import("../../../types").TextGroup;
} & import("../../../types").TextGroup;
