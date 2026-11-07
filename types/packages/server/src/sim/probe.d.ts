export interface ProbePose {
    x: number;
    y: number;
    heading: number;
    speed: number;
}
export interface ProbeOrdered {
    throttle: number;
    heading: number;
}
export declare const cellAt: (tiles: string, cols: number, rows: number, c: number, r: number) => string;
/** The cell the probe's center currently occupies (clamped). */
export declare function probeCell(pose: {
    x: number;
    y: number;
}, cols: number, rows: number): {
    c: number;
    r: number;
};
/**
 * Radius-aware placement check for EXTERNAL forces (vent shoves, spawners):
 * true when the whole collision circle fits in clear space — not merely the
 * center cell. The owner-reported wedge bug came from a center-only check.
 */
export declare function probeFits(tiles: string, cols: number, rows: number, x: number, y: number, radius?: 0.35): boolean;
/**
 * One integration step: slew heading toward the order, ease speed toward
 * throttle × max, translate with axis-separated slide collision (the classic
 * grid slide — hugging a wall keeps the tangential component). Mutates `pose`;
 * returns whether the hull scraped a wall this step (a noise burst).
 */
export declare function integrateProbe(pose: ProbePose, ordered: ProbeOrdered, dt: number, tiles: string, cols: number, rows: number, knobs?: {
    readonly maxSpeedTiles: 2.6;
    readonly accelPerSec: 6;
    readonly turnRateDeg: 240;
    readonly radiusTiles: 0.35;
}): {
    bumped: boolean;
};
/**
 * The probe's current emission (0..1): idle hum + throttle² movement noise +
 * decaying burst term the caller accumulates (pings/vents/bumps). The caller
 * owns the burst accumulator; this just composes and clamps.
 */
export declare function composeNoise(throttle: number, burst: number, knobs?: {
    readonly idle: 0.08;
    readonly moveMax: 0.55;
    readonly bump: 0.2;
    readonly ping: 1;
    readonly vent: 0.3;
    readonly decayPerSec: 0.9;
    readonly hearRadiusMaxTiles: 14;
}): number;
/** Distance (tiles) at which `noise` (0..1) can be heard. */
export declare function hearRadius(noise: number, knobs?: {
    readonly idle: 0.08;
    readonly moveMax: 0.55;
    readonly bump: 0.2;
    readonly ping: 1;
    readonly vent: 0.3;
    readonly decayPerSec: 0.9;
    readonly hearRadiusMaxTiles: 14;
}): number;
