import { type Contact, type GameState } from "@scc/shared";
export declare function integrateMovement(state: GameState, dt: number): void;
/** A drifting rock's spin rate (rad/s, signed) — hash-derived, stable. The
 * range defaults to the drift-field knobs; DEBRIS_STORM rocks tumble on the
 * storm's own (faster) band. */
export declare function driftSpin(id: string, k?: {
    spinDegMin: number;
    spinDegMax: number;
}): number;
export declare function updateDrifters(state: GameState, dt: number): void;
export declare function resolveCollisions(state: GameState, ramGuard: Map<string, number>, onDebrisHullHit?: (rock: Contact) => void): void;
