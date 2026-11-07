import { Contact, type GameState } from "@scc/shared";
import type { AnomalyDef, EnemySpawn, PoiKind, PoiSpec } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
export interface PoiPlan {
    kind: PoiKind;
    designator: TextStr;
    label: TextStr;
    x: number;
    y: number;
}
export declare function rollPoiPlans(spec: PoiSpec | undefined, rng: () => number): PoiPlan[];
export declare function collectUsedDesignators(state: GameState): Set<string>;
export declare function spawnAsteroidField(state: GameState, count?: number): void;
export declare function spawnDriftField(state: GameState): void;
export declare function spawnDebrisStorm(state: GameState): void;
export declare function spawnEnemy(state: GameState, spawn: EnemySpawn, dist: number): Contact;
export declare function spawnDerelict(state: GameState): Contact;
export declare function spawnMinefield(state: GameState, count: number, cx: number, cy: number): void;
export declare function spawnAnomaly(state: GameState, def: AnomalyDef): Contact;
export declare function spawnTrader(state: GameState): Contact;
export declare function spawnFreighter(state: GameState): Contact;
export declare function bankRowsOf(state: GameState): {
    vessels: number;
    signals: number;
};
/** Make the bank exactly `rows` rows (the fit gate's seeded worst case, whatever the sector rolled): `wantVessels` vessels (the sector's own, then decoy freighters: a Probe
 * sector is one derelict) and the rest passive signals. Every real voice is silenced (a sector
 * may roll several anomalies and a voiced derelict, and each is a row); the signals are decoys, asteroids that emit a fixed voice, so the
 * bank's names do not vary either. Real vessels are never removed: more of them than `rows` leaves the bank over, and the gate's raw
 * count fails the row, loudly. Idempotent, and cheap to run every tick. Decoys sit well off the ship, still. */
export declare function pinBank(state: GameState, rows: number, wantVessels?: number): void;
