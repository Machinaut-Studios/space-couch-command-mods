import { type GameState, type Projectile } from "@scc/shared";
/** Does this projectile threaten the ship (as a PD-interceptable round)?
 * Enemy-owned interceptable ordnance always does; an own-launched ACTIVE round
 * locked back onto the ship (no IFF — a lured missile) does too. Torpedoes are
 * NEVER interceptable (owner counter rule) — a come-back-around fish is the
 * noisemakers' problem, not the guns'. */
export declare function isHostileToShip(p: Projectile): boolean;
export declare function updateTurrets(state: GameState, dt: number, fx: (msg: Record<string, unknown>) => void, cupolaManned?: boolean): void;
