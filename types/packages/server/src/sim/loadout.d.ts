import { balance, type GameState } from "@scc/shared";
export type ShipClassStats = (typeof balance.shipClasses)[keyof typeof balance.shipClasses];
/** Stat block for the selected hull (default-cruiser fallback for unknown ids). */
export declare function classStats(state: GameState): ShipClassStats;
/** Does the host profile own this unlock? (MetaState is synced from the store.) */
export declare function hasUnlock(state: GameState, unlockId: string): boolean;
/** Max hull for the selected hull, including the hull_plating unlock (§3.4). */
export declare function shipMaxHull(state: GameState): number;
/** Reactor output ceiling for the selected hull (+ reactor_plus unlock). */
export declare function reactorOutputBase(state: GameState): number;
/** Turret cooldown multiplier from the pd_suite unlock (§3.4). */
export declare function turretCooldownMul(state: GameState): number;
/** Scan-rate multiplier from the deep_scanner unlock (§3.4). */
export declare function scanRateMul(state: GameState): number;
