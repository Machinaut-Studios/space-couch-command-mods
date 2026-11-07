export declare const science: {
    readonly common: {
        readonly noPower: import("../..").TextEntry<"⚠ NO POWER TO SENSORS">;
        readonly distanceU: import("../..").TextEntry<"{n}u">;
        readonly scanning: import("../..").TextEntry<"scanning…">;
    } & import("../../types").TextGroup;
    readonly console: {
        readonly title: import("../..").TextEntry<"Science">;
        readonly headerChip: {
            readonly contacts: import("../..").TextEntry<"contacts">;
            readonly unsurveyed: import("../..").TextEntry<"unsurveyed">;
            readonly probes: import("../..").TextEntry<"probes">;
        } & import("../../types").TextGroup;
        readonly onScreen: {
            readonly probe: import("../..").TextEntry<"⧉ probe on screen">;
            readonly scan: import("../..").TextEntry<"⧉ scan on screen">;
        } & import("../../types").TextGroup;
        readonly probeActiveJump: import("../..").TextEntry<"PROBE ACTIVE — take the stick">;
        readonly sweep: {
            readonly title: import("../..").TextEntry<"sensor sweep">;
            readonly titlePlot: import("../..").TextEntry<"sensor sweep · plot">;
        } & import("../../types").TextGroup;
        readonly plot: {
            readonly bearing: import("../..").TextEntry<"BRG">;
            readonly range: import("../..").TextEntry<"RNG">;
            readonly delay: import("../..").TextEntry<"DLY">;
            readonly delayValue: import("../..").TextEntry<"{sec}s">;
            readonly solutionLive: import("../..").TextEntry<"● SOLUTION LIVE — drag to aim">;
            readonly hint: import("../..").TextEntry<"drag to aim · call brg + dly to tactical">;
            readonly retract: import("../..").TextEntry<"mode off retracts">;
        } & import("../../types").TextGroup;
        readonly status: {
            readonly scanning: import("../..").TextEntry<"▸ SCAN {designator} · {pct}%">;
            readonly outOfRange: import("../..").TextEntry<"⚠ OUT OF RANGE">;
            readonly passive: import("../..").TextEntry<"○ PASSIVE SWEEP — tap a return to scan">;
        } & import("../../types").TextGroup;
        readonly mode: {
            readonly label: import("../..").TextEntry<"mode">;
            readonly plot: import("../..").TextEntry<"◉ PLOT">;
            readonly scan: import("../..").TextEntry<"○ SCAN">;
        } & import("../../types").TextGroup;
        readonly foot: {
            readonly noPower: import("../..").TextEntry<"⚠ no power to sensors">;
            readonly bite: import("../..").TextEntry<"sensor bite {range}u">;
            readonly pinned: import("../..").TextEntry<"far returns pin to rim">;
        } & import("../../types").TextGroup;
        readonly activeScan: {
            readonly title: import("../..").TextEntry<"active scan">;
            readonly headline: {
                readonly derelict: import("../..").TextEntry<"Scanning {designator} — derelict hulk">;
                readonly identified: import("../..").TextEntry<"Scanning {designator} — {shipClass}">;
                readonly anomaly: import("../..").TextEntry<"Scanning {designator} — {name}">;
                readonly unknown: import("../..").TextEntry<"Scanning {designator} (unknown)">;
            } & import("../../types").TextGroup;
            readonly unresolvedFallback: import("../..").TextEntry<"unresolved return">;
            readonly stop: import("../..").TextEntry<"stop">;
            readonly noPowerLong: import("../..").TextEntry<"⚠ NO POWER TO SENSORS — ask Engineering to feed the dish">;
            readonly outOfRangeLong: import("../..").TextEntry<"⚠ OUT OF SENSOR RANGE — Helm must close to {range}u ({dist}u now)">;
            readonly derelictSlow: import("../..").TextEntry<"deep scan is slow; salvage & torpedoes recovered at 100%">;
            readonly identified: import("../..").TextEntry<"◇ identified: {shipClass}">;
            readonly jumpSpool: import("../..").TextEntry<"⚠ jump spool detected — escape drive at {pct}%">;
            readonly targetPoints: import("../..").TextEntry<"⚑ target points — call these to Tactical">;
            readonly keepScanning: import("../..").TextEntry<"Keep scanning to locate target points…">;
            readonly selectHint: import("../..").TextEntry<"Select a contact to scan. Enemies reveal target points; derelicts yield salvage; mines get marked for Helm.">;
        } & import("../../types").TextGroup;
        readonly hero: {
            readonly probePilot: import("../..").TextEntry<"probe pilot">;
            readonly sensorScan: import("../..").TextEntry<"sensor scan">;
        } & import("../../types").TextGroup;
        readonly derelict: {
            readonly title: import("../..").TextEntry<"◆ DERELICT {designator}">;
            readonly range: import("../..").TextEntry<"{n} units">;
            readonly stripped: import("../..").TextEntry<"✦ stripped — salvage recovered">;
            readonly pending: import("../..").TextEntry<"salvage on full scan (slow deep scan)">;
            readonly deepScan: import("../..").TextEntry<"deep scan">;
        } & import("../../types").TextGroup;
        readonly hostiles: {
            readonly title: import("../..").TextEntry<"hostiles">;
            readonly identified: import("../..").TextEntry<"{designator} · {shipClass}">;
            readonly unknown: import("../..").TextEntry<"{designator} · Unknown hostile">;
        } & import("../../types").TextGroup;
        readonly mines: {
            readonly title: import("../..").TextEntry<"minefield · {n} visible">;
            readonly marked: import("../..").TextEntry<"⚠ {designator} · {dist}u">;
            readonly faint: import("../..").TextEntry<"· faint contact · {dist}u">;
            readonly markedBadge: import("../..").TextEntry<"marked">;
            readonly marking: import("../..").TextEntry<"marking…">;
            readonly scanToMark: import("../..").TextEntry<"scan to mark">;
        } & import("../../types").TextGroup;
        readonly friendly: {
            readonly label: import("../..").TextEntry<"○ {designator} · Freighter">;
        } & import("../../types").TextGroup;
        readonly contactRow: {
            readonly range: import("../..").TextEntry<"{distance} units · scan {pct}%">;
            readonly scan: import("../..").TextEntry<"scan">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly survey: {
        readonly questThread: import("../..").TextEntry<"◈ quest thread">;
        readonly board: {
            readonly title: import("../..").TextEntry<"anomaly survey">;
            readonly subtitle: import("../..").TextEntry<"deep-scan the unknown">;
            readonly unsurveyed: import("../..").TextEntry<"{n} of {total} unsurveyed">;
            readonly allSurveyed: import("../..").TextEntry<"sector surveyed ✦">;
        } & import("../../types").TextGroup;
        readonly card: {
            readonly nameFallback: import("../..").TextEntry<"anomaly">;
            readonly unresolvedName: import("../..").TextEntry<"UNRESOLVED RETURN">;
            readonly kind: {
                readonly planet: import("../..").TextEntry<"planet">;
                readonly wreck: import("../..").TextEntry<"wreck">;
                readonly phenomenon: import("../..").TextEntry<"phenomenon">;
                readonly organism: import("../..").TextEntry<"organism">;
                readonly mega: import("../..").TextEntry<"mega">;
                readonly comet: import("../..").TextEntry<"comet">;
            } & import("../../types").TextGroup;
            readonly designatorDist: import("../..").TextEntry<"{designator} · {dist}u">;
            readonly unresolvedHint: import("../..").TextEntry<"unresolved return: survey to learn what's out there">;
            readonly outOfRange: import("../..").TextEntry<"⚠ out of sensor range — Helm must close to {range}u">;
            readonly status: {
                readonly complete: import("../..").TextEntry<"✦ survey complete — archived">;
                readonly running: import("../..").TextEntry<"deep scan running…">;
                readonly nextMilestone: import("../..").TextEntry<"next milestone at {pct}%">;
                readonly awaiting: import("../..").TextEntry<"awaiting survey">;
            } & import("../../types").TextGroup;
            readonly surveying: import("../..").TextEntry<"surveying…">;
            readonly survey: import("../..").TextEntry<"survey">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly systemLog: {
        readonly title: import("../..").TextEntry<"system log">;
        readonly order: {
            readonly newestFirst: import("../..").TextEntry<"Newest first — tap for newest last">;
            readonly newestLast: import("../..").TextEntry<"Newest last — tap for newest first">;
        } & import("../../types").TextGroup;
        readonly badge: {
            readonly up: import("../..").TextEntry<"↑ new">;
            readonly down: import("../..").TextEntry<"↓ new">;
        } & import("../../types").TextGroup;
        readonly empty: import("../..").TextEntry<"LOG BUFFER EMPTY — AWAITING TRAFFIC">;
        readonly counter: import("../..").TextEntry<"log {n}">;
    } & import("../../types").TextGroup;
    readonly probe: {
        readonly siteFallback: import("../..").TextEntry<"uncharted interior">;
        readonly phase: {
            readonly landing: import("../..").TextEntry<"descent — telemetry acquiring">;
            readonly exploring: import("../..").TextEntry<"link stable — quiet is survival">;
            readonly extracting: import("../..").TextEntry<"extraction channel {pct}%">;
            readonly extracted: import("../..").TextEntry<"probe recovered">;
            readonly lost: import("../..").TextEntry<"signal lost">;
        } & import("../../types").TextGroup;
        readonly interact: {
            readonly channeling: import("../..").TextEntry<"CHANNELING {pct}%">;
            readonly loot: import("../..").TextEntry<"RECOVER ▸ salvage pod">;
            readonly prize: import("../..").TextEntry<"RECOVER ▸ ✦ core sample">;
            readonly terminal: import("../..").TextEntry<"READ ▸ terminal">;
            readonly exit: import("../..").TextEntry<"EXTRACT ▸ pad">;
            readonly nothing: import("../..").TextEntry<"— nothing in reach">;
        } & import("../../types").TextGroup;
        readonly recovery: import("../..").TextEntry<"RECOVERY">;
        readonly prizeCarried: import("../..").TextEntry<"✦ core sample">;
        readonly throttle: import("../..").TextEntry<"THR {pct}%">;
        readonly ping: {
            readonly ready: import("../..").TextEntry<"ping ready · comms">;
            readonly cooldown: import("../..").TextEntry<"ping {sec}s · comms">;
        } & import("../../types").TextGroup;
        readonly abort: import("../..").TextEntry<"hold·abort">;
        readonly help: {
            readonly drag: import("../..").TextEntry<"drag the glass to fly · release stops">;
            readonly keys: import("../..").TextEntry<"w/s throttle · a/d turn">;
        } & import("../../types").TextGroup;
    } & import("../../types").TextGroup;
    readonly sweep: {
        readonly sns: import("../..").TextEntry<"SNS {n}">;
        readonly returns: import("../..").TextEntry<"RETURNS {n}">;
        readonly anomalyFallback: import("../..").TextEntry<"anomaly">;
        readonly blipIdentified: import("../..").TextEntry<"{designator} {shipClass}">;
        readonly zoomOut: import("../..").TextEntry<"zoom out (wider range)">;
        readonly zoomIn: import("../..").TextEntry<"zoom in (narrower range)">;
        readonly rng: import("../..").TextEntry<"rng">;
    } & import("../../types").TextGroup;
} & import("../../types").TextGroup;
