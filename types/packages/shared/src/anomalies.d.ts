import { LogTone } from "./enums";
import { type PoiKind } from "./pois";
import type { NoParamKey, TextKey } from "./text/keys";
import { type TextStr } from "./text/ref";
export type AnomalyKind = "planet" | "wreck" | "phenomenon" | "organism" | "mega" | "comet";
/** Proximity hazards the room applies per tick (BridgeRoom.hazardTick):
 * "gravity" drags + shears the hull inside hazards.gravityRadius; "pulse"
 * lashes everything inside pulseRadius on a cycle; "shroud" damps the SHIP's
 * signature inside shroudRadius (torpedo seekers struggle — a hiding place).
 * Magnitudes live in balance.anomalies.hazards. */
export type AnomalyHazard = "gravity" | "pulse" | "shroud";
interface OutcomeBase {
    /** Relative roll weight (normalized; shipped tables sum to 1). */
    weight: number;
    /** Ship's-log line when this outcome fires (Text Key; may carry {placeholders} passed as ref params). */
    logKey: TextKey;
}
export type AnomalyOutcome = (OutcomeBase & {
    kind: "salvageCache";
    size: "small" | "large";
}) | (OutcomeBase & {
    kind: "torpedoCache";
}) | (OutcomeBase & {
    kind: "probeCache";
}) | (OutcomeBase & {
    kind: "ambush";
    classes: string[];
}) | (OutcomeBase & {
    kind: "radiationFlare";
}) | (OutcomeBase & {
    kind: "intel";
}) | (OutcomeBase & {
    kind: "hullBloom";
}) | (OutcomeBase & {
    kind: "questClue";
    questId: string;
    toStage: number;
}) | (OutcomeBase & {
    kind: "wormhole";
}) | (OutcomeBase & {
    kind: "nothing";
});
export type AnomalyOutcomeKind = AnomalyOutcome["kind"];
/** True when a def's survey table can produce a probe-costing POI (relic/
 * hatch/organism → POI_ACTIONS[kind].probe). The per-sector draw halves these
 * (balance.anomalies.probeSiteWeightMul) — playtest wave: probe missions
 * should stay an event, not a routine. */
export declare function isProbeSiteDef(def: AnomalyDef): boolean;
/** What survey returns a body carries: guaranteed kinds + a weighted draw. */
export interface PoiSpec {
    /** Kinds that ALWAYS appear, first, in order (a wreck's sealed hatch). */
    guaranteed?: PoiKind[];
    /** Additional rolled returns: count uniform in [countMin, countMax]. */
    countMin: number;
    countMax: number;
    /** Weighted kind table for the rolled returns (shipped tables sum to 1). */
    table: {
        kind: PoiKind;
        weight: number;
    }[];
}
/** A POI action's rolled consequence. `quest` (optional, any kind) advances a
 * thread best-effort BEFORE the main effect — the SLEEPER SEAM vault closes its
 * quest whichever way its 50/50 lands. */
type PoiOutcomeBase = OutcomeBase & {
    quest?: {
        questId: string;
        toStage: number;
    };
};
export type PoiOutcome = (PoiOutcomeBase & {
    kind: "salvage";
    size: "small" | "large" | "jackpot" | "vault";
}) | (PoiOutcomeBase & {
    kind: "tremor";
}) | (PoiOutcomeBase & {
    kind: "questClue";
    questId: string;
    toStage: number;
}) | (PoiOutcomeBase & {
    kind: "cursed";
}) | (PoiOutcomeBase & {
    kind: "lore";
    tone?: LogTone;
}) | (PoiOutcomeBase & {
    kind: "probeLost";
}) | (PoiOutcomeBase & {
    kind: "awakening";
    classId: string;
}) | (PoiOutcomeBase & {
    kind: "intel";
}) | (PoiOutcomeBase & {
    kind: "trapPing";
}) | (PoiOutcomeBase & {
    kind: "hullPatch";
}) | (PoiOutcomeBase & {
    kind: "infestation";
}) | (PoiOutcomeBase & {
    kind: "reactorFlush";
}) | (PoiOutcomeBase & {
    kind: "torpedoes";
});
export type PoiOutcomeKind = PoiOutcome["kind"];
/** Display labels a resolved POI can carry, per kind (designators stay unique;
 * labels may legitimately repeat across bodies). */
export declare const POI_LABELS: Record<PoiKind, NoParamKey[]>;
/** The per-kind outcome tables (rolled at action time, server-private).
 * Magnitude {placeholders} fill from balance.pois. An anomaly def may override
 * a kind's table via `poiOutcomes` (the SLEEPER SEAM vault core). */
export declare const POI_OUTCOMES: Record<PoiKind, PoiOutcome[]>;
/** The DERELICT-encounter hulk's returns: the sealed hatch is the whole point,
 * plus 1–2 lesser returns. (Derelicts aren't ANOMALIES — this spec rides along.) */
export declare const DERELICT_POIS: PoiSpec;
export interface AnomalyMilestone {
    /** scanLevel that triggers this lore beat (ascending; last is 1.0). */
    at: number;
    textKey: NoParamKey;
    tone?: LogTone;
}
export interface AnomalyDef {
    id: string;
    /** Pre-identification display, e.g. "UNCHARTED BODY" (+ the NATO designator). Text Key. */
    prefixKey: NoParamKey;
    /** Display label once identified (synced via Contact.shipClass as a ref). Text Key. */
    labelKey: NoParamKey;
    kind: AnomalyKind;
    /** Relative chance in the random per-sector draw (0 = quest-spawned only). */
    poolWeight: number;
    /** Random-pool sector gate (the sentinel signal is mid/late-game content):
     * absent = any sector. Quest guarantees and the dev/test forceAnomaly knob
     * place a def directly and BYPASS this — the gate is on the pool draw only. */
    minSector?: number;
    /** Scan lore beats, logged once each as the scan crosses them. */
    milestones: AnomalyMilestone[];
    /** Server-private outcome roll table (rolled at spawn, applied at 100%). */
    outcomes: AnomalyOutcome[];
    /** Scanning this to 100% advances a quest thread (fires BEFORE the rolled
     * outcome, and only when the quest sits exactly one stage behind). */
    questAdvance?: {
        questId: string;
        toStage: number;
    };
    /** Survey POIs this body resolves under a deep scan (none = a bare return).
     * Conventions: planets 2–4, wrecks 2–3, phenomena 0–1 (signal only),
     * organisms 0–3, megas 2–5 (colossal structures pay in returns). */
    pois?: PoiSpec;
    /** Per-kind overrides of POI_OUTCOMES — the SLEEPER SEAM vault's core tap. */
    poiOutcomes?: Partial<Record<PoiKind, PoiOutcome[]>>;
    /** Renderer archetype key (bestiary wave): picks a bespoke scan-view drawing
     * (ice moon, black hole, jellyfish…) in ScanScope/ScienceStage. Absent = the
     * kind's default silhouette (every pre-bestiary def keeps its old look). */
    visual?: string;
    /** Proximity hazard the room applies per tick (see AnomalyHazard). */
    hazard?: AnomalyHazard;
    /** "skittish": fired on, it dives for deep sky — the survey window closes.
     * "drift": a wanderer — the room orbits it slowly around the sector center
     * (comets; the survey is a CHASE). */
    behavior?: "skittish" | "drift";
}
export declare const ANOMALIES: Record<string, AnomalyDef>;
export declare const ANOMALY_IDS: string[];
export interface QuestStageDef {
    stage: number;
    /** RunState.questLog while in this stage (Text Key; "" = the thread is closed — NEVER a ref).
     * Servers write it through questObjective(). */
    logKey: NoParamKey | "";
    /** Optional objective that REPLACES `logKey` once this stage's forced anomaly has
     * actually been placed on an arrival (stage 1 of the POI quests, and their stage 2
     * where the site comes back fresh and must be re-surveyed) (Text Key; NEVER "" or a ref). The stage's
     * `logKey` is what the crew reads on the sector the clue was found in ("jump
     * on"); this is what they read where the site exists. Only the quest threads
     * that set it are affected. Servers write it through questArrivalObjective(). */
    arrivalLogKey?: NoParamKey;
    /** Ship's-log beat when the stage is reached (Text Key; may carry {salvage}/{probes}). */
    journalKey: TextKey;
    /** Salvage paid when the stage is reached. */
    salvage?: number;
    /** Survey probes gained when the stage is reached (finite stock, run.probes). */
    probes?: number;
    /** ARCHIVE FRAGMENTS paid when the stage is reached (meta currency — THE
     * VOID campaign; persisted in metaStore, survives the run). */
    fragments?: number;
    /** Guaranteed anomaly spawn each new sector while this stage is active. */
    forceAnomalyId?: string;
}
export interface QuestDef {
    id: string;
    nameKey: NoParamKey;
    stages: QuestStageDef[];
}
export declare const QUESTS: Record<string, QuestDef>;
/** The stage-0 ship's-log beat, logged once at every fresh launch (the same
 * orders the TV boot transmission carries). */
export declare const VOID_ORDERS_KEY: NoParamKey;
export declare const VOID_CAMPAIGN: QuestDef;
/** Sleeper-pod TAP attempts (sanctuary_berth core POIs): distinct fail-forward
 * lore per attempt, indexed 0..podAttempts−1. The pod NEVER opens — the final
 * attempt marks it spent with nothing but the story to show for it (the
 * unsolvable-by-design puzzle: stabilize, never wake). */
export declare const SLEEPER_POD_LORE: NoParamKey[];
/** THE UNMAKING front band beats (run.unmakingFront crossings, ascending).
 * Logged once per crossing by the room; the discovery-rule voice — the crew
 * reads instruments, the instruments read the sky going wrong. */
export declare const UNMAKING_BANDS: {
    at: number;
    logKey: NoParamKey;
    tone: LogTone;
}[];
/** Solid anomalies (planets/wrecks/megas) collide + block torpedoes like
 * asteroids; phenomena are sensor ghosts with no matter to hit, and organisms
 * are living drift the ship brushes past (a medusa is not a wall). */
export declare function anomalyIsSolid(anomalyId: string): boolean;
/** Scan-rate multiplier for an anomaly kind (balance.anomalies knobs). */
export declare function anomalyScanMul(kind: AnomalyKind): number;
/** Roll an anomaly's outcome (normalized weights). `forceKind` is the dev/test
 * knob: when the def carries an outcome of that kind, it wins the roll. */
export declare function rollAnomalyOutcome(def: AnomalyDef, rng?: () => number, forceKind?: string): AnomalyOutcome;
/** The stage def a quest is currently sitting on ("" questLog = closed). */
export declare function questStageDef(questId: string, stage: number): QuestStageDef | undefined;
/** The RunState.questLog value for a quest stage: the objective as a ref, or ""
 * on the closing stage (the "" sentinel is never encoded as a ref). */
export declare function questObjective(stage: QuestStageDef): string;
/** The RunState.questLog value once a stage's forced anomaly is on the plot:
 * the stage's arrival objective as a ref, or undefined when the stage has none
 * (the objective then stays as questObjective() wrote it). */
export declare function questArrivalObjective(stage: QuestStageDef): string | undefined;
/** The ship's-log beat for reaching a quest stage, as a ref. Only stages that pay
 * {salvage}/{probes} carry those placeholders, so only they get the params. */
export declare function questJournal(stage: QuestStageDef): TextStr;
/** Random-pool stale-clue rule (the server's spawnSectorAnomalies filters call
 * this): a def leaves the pool when any of its questClue outcomes can no
 * longer open/advance its chain — a stale clue is dead weight, and WORSE than
 * dead for single-outcome starters like the sentinel chirp, whose contract is
 * "a 100% scan always opens the chain". A clue is dead when:
 *  - its chain is CLOSED for the run (completedQuestIds — finished threads
 *    never restart, so the clue could only fizzle), or
 *  - its own chain is already open at/past the clue's stage, or
 *  - a DIFFERENT thread is open (one active thread at a time — advanceQuest
 *    would refuse and the find burns on the "no new data" log).
 * Quest guarantees (forceAnomalyId) and the dev/test forceAnomaly knob bypass
 * the pool entirely, so they never see this rule. */
export declare function questCluePoolExcluded(def: AnomalyDef, run: {
    questId: string;
    questStage: number;
    questLog: string;
}, completedQuestIds: ReadonlySet<string>): boolean;
/** Roll a body's survey-return KINDS from its spec: the guaranteed list first,
 * then countMin..countMax weighted draws (with replacement — two seams on one
 * forge world is honest geology). */
export declare function rollPoiKinds(spec: PoiSpec | undefined, rng?: () => number): PoiKind[];
/** A display label for the nth return of a kind on one body — the occurrence
 * offset walks the pool so duplicates only appear once a kind repeats past it. */
export declare function poiLabel(kind: PoiKind, occurrence: number, rng?: () => number): TextStr;
/** The outcome table a POI action rolls against: the anomaly's per-kind
 * override (the SLEEPER SEAM vault core) or the shared per-kind table.
 * `def` is undefined for DERELICT-encounter hulks. */
export declare function poiOutcomeTable(def: AnomalyDef | undefined, kind: PoiKind): PoiOutcome[];
/** Roll a POI action's outcome (normalized weights). `forceKind` is the
 * dev/test knob (TestOptions.forcePoiOutcome): when the table carries an
 * outcome of that kind, the FIRST such entry wins the roll. */
export declare function rollPoiOutcome(table: PoiOutcome[], rng?: () => number, forceKind?: string): PoiOutcome;
export declare const PROBE_TERMINAL_LORE: Record<string, NoParamKey[]>;
export {};
