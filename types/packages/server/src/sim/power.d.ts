import { type GameState, type Ship } from "@scc/shared";
export declare function initSystems(ship: Ship): void;
/** Discrete reactor-heat adders (phaser shots land in intent handlers BETWEEN
 * ticks) must run the same red-line edge log as the continuous model in
 * updatePower — otherwise a shot can carry the core past heatCritical
 * silently: the next tick's heatBefore already reads ≥ critical, the rising
 * DANGER line never fires, and the falling OK line later lands unmatched. */
export declare function addReactorHeat(state: GameState, amount: number): void;
export declare function updatePower(state: GameState, dt: number, repairRateMul?: number): void;
export declare function advanceJumpCharge(state: GameState, dt: number): boolean;
/** Effective engine throttle factor from power + health (read by movement). */
export declare function enginePowerFactor(ship: Ship): number;
