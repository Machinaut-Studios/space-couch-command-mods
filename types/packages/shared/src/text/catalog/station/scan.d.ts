export declare const scan: {
    readonly glass: {
        readonly noPower: import("../..").TextEntry<"NO POWER TO SENSORS">;
        readonly noPowerHint: import("../..").TextEntry<"route power to SENSORS to light the dish">;
        readonly noReturn: import("../..").TextEntry<"NO RETURN ON SCOPE">;
        readonly noReturnHint: import("../..").TextEntry<"sweep a contact to put it on the glass">;
        readonly spentPoint: import("../..").TextEntry<"{label} ✓">;
    } & import("../../types").TextGroup;
    readonly status: {
        readonly target: import("../..").TextEntry<"TGT {name}">;
        readonly targetClassed: import("../..").TextEntry<"{designator} · {shipClass}">;
        readonly targetAnomaly: import("../..").TextEntry<"{designator} · {anomaly}">;
        readonly unresolvedReturn: import("../..").TextEntry<"UNRESOLVED RETURN">;
        readonly spin: import("../..").TextEntry<"SPIN {deg}°">;
        readonly res: import("../..").TextEntry<"RES {pct}%">;
    } & import("../../types").TextGroup;
    readonly analysis: import("../..").TextEntry<"analysis">;
    readonly poi: {
        readonly unresolvedPoint: import("../..").TextEntry<"UNRESOLVED POINT">;
        readonly spent: import("../..").TextEntry<"already actioned — the point is spent">;
        readonly resolving: import("../..").TextEntry<"still resolving — keep the deep scan on it to survey this point">;
        readonly noProbes: import("../..").TextEntry<"⚠ no probes aboard — merchants sell them">;
        readonly probesAboard: import("../..").TextEntry<"probes aboard: {count}">;
        readonly outOfRange: import("../..").TextEntry<"⚠ out of action range — close to ~{range}u ({distance}u now)">;
        readonly actioned: import("../..").TextEntry<"✓ actioned">;
        readonly surveyToUnlock: import("../..").TextEntry<"survey to unlock">;
        readonly oneProbe: import("../..").TextEntry<"· 1 probe">;
        readonly pointsOfInterest: import("../..").TextEntry<{
            readonly one: "{count} point of interest on the glass — tap a marker to review its action";
            readonly other: "{count} points of interest on the glass — tap a marker to review its action";
        }>;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
