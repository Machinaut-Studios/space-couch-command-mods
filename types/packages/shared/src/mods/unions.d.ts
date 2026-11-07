import type { AnomalyHazard, AnomalyKind, AnomalyOutcomeKind, PoiOutcomeKind } from "../anomalies";
import { LogTone } from "../enums";
import type { HailFactionId } from "../hails";
import type { PoiKind } from "../pois";
import type { ShipClassId } from "../ships";
type Equal<A, B> = (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2 ? true : false;
/** Fails to compile unless `T` is `true`. */
export type AssertTrue<T extends true> = T;
export declare const ANOMALY_KINDS: readonly ["planet", "wreck", "phenomenon", "organism", "mega", "comet"];
export type CheckAnomalyKinds = AssertTrue<Equal<(typeof ANOMALY_KINDS)[number], AnomalyKind>>;
export declare const ANOMALY_HAZARDS: readonly ["gravity", "pulse", "shroud"];
export type CheckAnomalyHazards = AssertTrue<Equal<(typeof ANOMALY_HAZARDS)[number], AnomalyHazard>>;
export declare const ANOMALY_BEHAVIORS: readonly ["skittish", "drift"];
export declare const ANOMALY_OUTCOME_KINDS: readonly ["salvageCache", "torpedoCache", "probeCache", "ambush", "radiationFlare", "intel", "hullBloom", "questClue", "wormhole", "nothing"];
export type CheckAnomalyOutcomeKinds = AssertTrue<Equal<(typeof ANOMALY_OUTCOME_KINDS)[number], AnomalyOutcomeKind>>;
export declare const POI_OUTCOME_KINDS: readonly ["salvage", "tremor", "questClue", "cursed", "lore", "probeLost", "awakening", "intel", "trapPing", "hullPatch", "infestation", "reactorFlush", "torpedoes"];
export type CheckPoiOutcomeKinds = AssertTrue<Equal<(typeof POI_OUTCOME_KINDS)[number], PoiOutcomeKind>>;
export declare const POI_KINDS: readonly ["mineral", "relic", "hatch", "signal", "organism", "core"];
export type CheckPoiKinds = AssertTrue<Equal<(typeof POI_KINDS)[number], PoiKind>>;
/** Sizes a salvage outcome may carry: the anomaly table's and the POI table's. */
export declare const SALVAGE_CACHE_SIZES: readonly ["small", "large"];
export declare const POI_SALVAGE_SIZES: readonly ["small", "large", "jackpot", "vault"];
export declare const HAIL_FACTION_IDS: readonly ["corsairs", "syndicate", "guild", "velshaar", "amalgam", "stranded", "unknown", "unregistered", "derelict"];
export type CheckHailFactions = AssertTrue<Equal<(typeof HAIL_FACTION_IDS)[number], HailFactionId>>;
/** The factions whose captains the hail director draws from a pool (sim/hails.ts: pirates, hunters, traders, envoys): a Mod persona can
 * only join one of these. The Amalgam's pool is never drawn from yet, so a persona there would pass and never appear; the rest
 * speak with one fixed voice each. */
export declare const POOLED_HAIL_FACTIONS: readonly ["corsairs", "syndicate", "guild", "velshaar"];
export declare const STOCK_SHIP_CLASS_IDS: readonly ["wren", "cutter", "corvette", "frigate", "cruiser", "dreadnought"];
export type CheckShipClassIds = AssertTrue<Equal<(typeof STOCK_SHIP_CLASS_IDS)[number], ShipClassId>>;
/** The log tones, read off the enum itself (an enum is a runtime object, so it cannot drift). */
export declare const LOG_TONES: readonly LogTone[];
/** The boss classes (bestiary wave): spawned by the rare arrival roll or a quest awakening, paid on defeat via
 * balance.bosses, and never replaced or cloned by a Mod. */
export declare const BOSS_IDS: readonly ["collector", "leviathan", "chimera"];
export declare const isBossClass: (classId: string) => boolean;
/** Content that belongs to THE VOID campaign (the story spine). A Mod may not reference any of it: its anomalies are
 * placed by the campaign director, and a stray reference would let a Mod open or skip the story. */
export declare const VOID_CONTENT_IDS: readonly string[];
export {};
