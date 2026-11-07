export declare const sci: {
    readonly sweep: {
        readonly title: import("../../..").TextEntry<"sensor sweep">;
        readonly titlePlot: import("../../..").TextEntry<"sensor sweep · plot">;
        readonly brg: import("../../..").TextEntry<"BRG">;
        readonly rng: import("../../..").TextEntry<"RNG">;
        readonly dly: import("../../..").TextEntry<"DLY">;
        readonly solutionLive: import("../../..").TextEntry<"● SOLUTION LIVE — drag to aim">;
        readonly scanLine: import("../../..").TextEntry<"▸ SCAN {designator} · {pct}%">;
        readonly noPower: import("../../..").TextEntry<"⚠ NO POWER TO SENSORS">;
        readonly outOfRange: import("../../..").TextEntry<"⚠ OUT OF RANGE">;
        readonly passive: import("../../..").TextEntry<"○ PASSIVE SWEEP — tap a return to scan">;
        readonly mode: import("../../..").TextEntry<"mode">;
        readonly modePlot: import("../../..").TextEntry<"◉ PLOT">;
        readonly modeScan: import("../../..").TextEntry<"○ SCAN">;
    } & import("../../../types").TextGroup;
    readonly active: {
        readonly title: import("../../..").TextEntry<"active scan">;
        readonly derelict: import("../../..").TextEntry<"Scanning {designator} — derelict hulk">;
        readonly classified: import("../../..").TextEntry<"Scanning {designator} — {shipClass}">;
        readonly anomaly: import("../../..").TextEntry<"Scanning {designator} — {what}">;
        readonly unknown: import("../../..").TextEntry<"Scanning {designator} (unknown)">;
        readonly unresolved: import("../../..").TextEntry<"unresolved return">;
        readonly stop: import("../../..").TextEntry<"stop">;
        readonly sensorsDead: import("../../..").TextEntry<"⚠ NO POWER TO SENSORS — feed the dish from the power board">;
        readonly outOfSensorRange: import("../../..").TextEntry<"⚠ OUT OF SENSOR RANGE — close to {range}u ({now}u now)">;
        readonly derelictSlow: import("../../..").TextEntry<"deep scan is slow; salvage & torpedoes recovered at 100%">;
        readonly identified: import("../../..").TextEntry<"◇ identified: {shipClass}">;
        readonly jumpSpool: import("../../..").TextEntry<"⚠ jump spool detected — escape drive at {pct}%">;
        readonly targetPoints: import("../../..").TextEntry<"⚑ target points — call these to fire control">;
        readonly keepScanning: import("../../..").TextEntry<"Keep scanning to locate target points…">;
        readonly idleHelp: import("../../..").TextEntry<"Tap a sweep return to scan. Enemies reveal target points; derelicts yield salvage; mines get marked for the pilot.">;
    } & import("../../../types").TextGroup;
    readonly scope: {
        readonly probePilot: import("../../..").TextEntry<"probe pilot">;
        readonly sensorScan: import("../../..").TextEntry<"sensor scan">;
    } & import("../../../types").TextGroup;
    readonly derelict: {
        readonly title: import("../../..").TextEntry<"◆ DERELICT {designator}">;
        readonly units: import("../../..").TextEntry<"{n} units">;
        readonly stripped: import("../../..").TextEntry<"✦ stripped — salvage recovered">;
        readonly salvageOnFull: import("../../..").TextEntry<"salvage on full scan (slow deep scan)">;
        readonly scanning: import("../../..").TextEntry<"scanning…">;
        readonly deepScan: import("../../..").TextEntry<"deep scan">;
    } & import("../../../types").TextGroup;
    readonly hostile: {
        readonly title: import("../../..").TextEntry<"hostiles">;
        readonly classified: import("../../..").TextEntry<"{designator} · {shipClass}">;
        readonly unknown: import("../../..").TextEntry<"{designator} · Unknown hostile">;
        readonly distScan: import("../../..").TextEntry<"{dist} units · scan {pct}%">;
        readonly scanning: import("../../..").TextEntry<"scanning…">;
        readonly scan: import("../../..").TextEntry<"scan">;
    } & import("../../../types").TextGroup;
    readonly mine: {
        readonly title: import("../../..").TextEntry<"minefield · {n} visible">;
        readonly marked: import("../../..").TextEntry<"⚠ {designator} · {dist}u">;
        readonly faint: import("../../..").TextEntry<"· faint contact · {dist}u">;
        readonly markedTag: import("../../..").TextEntry<"marked">;
        readonly marking: import("../../..").TextEntry<"marking…">;
        readonly scanToMark: import("../../..").TextEntry<"scan to mark">;
    } & import("../../../types").TextGroup;
    readonly friendly: import("../../..").TextEntry<"○ {designator} · Freighter">;
    readonly seconds: import("../../..").TextEntry<"{sec}s">;
    readonly distU: import("../../..").TextEntry<"{n}u">;
} & import("../../../types").TextGroup;
