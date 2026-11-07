import { AlertLevel, EncounterType } from "../enums";
import { type TextStr } from "../text/ref";
export interface EnemySpawn {
    classId: string;
    /** Stat multiplier bundle (1 = stock). Applied to hull/shield/damage. */
    mul: {
        hull: number;
        shield: number;
        damage: number;
    };
}
export interface EncounterPlan {
    type: EncounterType;
    label: TextStr;
    objective: TextStr;
    enemies: EnemySpawn[];
    asteroids: number;
    mines: number;
    derelict: boolean;
    freighter: boolean;
    envoy: boolean;
    trader: boolean;
    startAlert: AlertLevel;
    /** True → arrive already in COMBAT (AMBUSH/HUNTER); else EXPLORATION. */
    hot: boolean;
    reward: number;
}
/** Tiny deterministic PRNG (32-bit); good enough for encounter draws. */
export declare function mulberry32(seed: number): () => number;
/** Enemy count scales with the sector, capped. */
export declare function enemyCountFor(sector: number): number;
/** The legacy sector-1 tutorial: a single stock-raptor PATROL. The natural
 * sector-1 draw is the peaceful SURVEY now (owner: "make the first mission
 * interesting and peaceful"); this plan stays reachable via the dev/test-only
 * forceEncounter="PATROL" knob so the deterministic m-suites keep their
 * single-enemy arena (m4/m6/m8/m10/m12 all fight exactly this raptor). */
export declare function tutorialPatrolPlan(): EncounterPlan;
/** DEBRIS STORM (hazard wave): never in the weights table — the room swaps
 * this in when the arrival system carries hazard "debris" (chart-marked, the
 * crew opted in; it outranks the HUNTER cadence — even hunters won't follow a
 * ship into the storm). No hostiles: the weather IS the encounter, and the
 * prize is the debris_heart anomaly force-placed deep in it
 * (BridgeRoom.spawnSectorAnomalies). Suites pin it via forceEncounter. */
export declare function debrisStormPlan(sector: number): EncounterPlan;
/** Draw the encounter plan for a sector. Sector 1 is the peaceful SURVEY
 * (exploration, no hostiles — the star-map first mission); every
 * `hunterEvery`th sector is the elite HUNTER. */
export declare function genEncounter(sector: number, rng: () => number): EncounterPlan;
