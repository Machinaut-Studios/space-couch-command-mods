export declare const SHIP_SOURCE_ID = "SHIP";
export interface SeekerSource {
    id: string;
    x: number;
    y: number;
    signature: number;
}
export declare function bearingToHeading(deg: number): number;
export declare function headingToBearing(rad: number): number;
/** Homing attractiveness: louder + closer wins (signature / distance²). */
export declare function scoreSource(signature: number, distSq: number): number;
/** Pick the most attractive source within the seeker radius (no IFF). */
export declare function pickBestSource(x: number, y: number, sources: SeekerSource[], seekerRadius: number): SeekerSource | null;
/** Rotate `heading` toward `target`, clamped to ±maxTurn (radians). */
export declare function steerToward(heading: number, target: number, maxTurn: number): number;
/** Cruise speed for a projectile kind (units/sec) — the one speed ladder every
 * consumer (server sim, UI lead computations) reads. Torpedo 190 < missile 260
 * < rocket 300 < rail 420; decoys drift slow. */
export declare function projectileSpeed(kind: string): number;
/** How far from the launch point a torpedo arms, given its activation delay. */
export declare function armingDistance(delay: number): number;
/** Suggested activation delay to arm just before a contact at `range`. */
export declare function suggestedDelay(range: number): number;
