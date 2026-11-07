import { ProjectileKind, type GameState, type Ship } from "@scc/shared";
export declare function updateTubes(ship: Ship, dt: number): void;
/** Is the helm's ECM actually scrambling (design update: countermeasures)?
 * The toggle is ship.ecmActive; the EFFECT requires a funded sensor dish —
 * SENSORS online with powerRatio ≥ minSensorRatio ("requires energy use"
 * without invading power.ts; see balance.countermeasures.ecm comments). */
export declare function ecmEffective(state: GameState): boolean;
export declare function spawnProjectile(state: GameState, kind: ProjectileKind, ownerId: string, x: number, y: number, bearingDeg: number, activationDelay: number, lockId?: string): void;
export declare function updateProjectiles(state: GameState, dt: number, fx?: (msg: Record<string, unknown>) => void): void;
