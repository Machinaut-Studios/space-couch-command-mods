import type { Canvas2D } from "./types";
/** Deep starfield population (prototype: 680). */
export declare const SKY_STAR_COUNT = 680;
/** Faint stars hugging the galactic band (prototype: 320). */
export declare const SKY_BAND_STAR_COUNT = 320;
/** Near-field parallax dust motes (prototype: 140). */
export declare const SKY_DUST_COUNT = 140;
/** Nebula banks per sky (prototype: 6; FOV culling keeps ~1-2 on screen). */
export declare const SKY_NEBULA_COUNT = 6;
/** Radial-gradient puffs sampled across the FOV for the galactic band. */
export declare const SKY_BAND_STEPS = 48;
/** Distant-object roll odds per system, rolled in this order off the seed
 * stream. If every roll misses, a sun is forced — every sky gets an anchor. */
export declare const SKY_ODDS_SUN = 0.7;
export declare const SKY_ODDS_GIANT = 0.55;
export declare const SKY_ODDS_GALAXY = 0.4;
export declare const SKY_ODDS_COMET = 0.55;
/** A second comet rides along this often when the first hits (0-2 total). */
export declare const SKY_ODDS_COMET_SECOND = 0.25;
/** Nebula lobe radius swell fraction (1 ± this, on each bank's own period). */
export declare const SKY_NEBULA_BREATHE = 0.09;
/** Nebula bearing drift rad/s (×(1 + i·0.1) per bank, like the prototype). */
export declare const SKY_NEBULA_DRIFT = 0.004;
/** Spiral-galaxy rotation rad/s. */
export declare const SKY_GALAXY_SPIN = 0.01;
/** Band puff radius breathe rate / band elevation wobble rate. */
export declare const SKY_BAND_BREATHE_RATE = 0.05;
export declare const SKY_BAND_WOBBLE_RATE = 0.08;
/** Phone count-scale rule: full element counts at canvases ≥ this many CSS px
 * wide, scaling linearly down to the floor below it — phones also run the
 * contact pass, so the sky is where the headroom comes from. */
export declare const SKY_FULL_WIDTH_PX = 1000;
export declare const SKY_PHONE_COUNT_SCALE = 0.6;
/** Throttle above which dust motes become impulse streaks (prototype effect). */
export declare const SKY_DUST_STREAK_THROTTLE = 0.4;
/** FOV cull margin (× the view half-FOV) — the prototype's aggressive 1.18. */
export declare const SKY_CULL = 1.18;
/** Count scale for a canvas width (the phone rule above, exposed for tests). */
export declare function skyCountScale(w: number): number;
export interface SkyBandPlan {
    amp: number;
    phase: number;
    c: number;
    wobPhase: number;
    lanes: number[];
}
export interface SkyStar {
    b: number;
    e: number;
    sz: number;
    base: number;
    rgb: string;
    tw: number;
    ph: number;
    big: boolean;
}
export interface SkyDustMote {
    b: number;
    e: number;
    sz: number;
    par: number;
    ph: number;
}
export interface SkyNebulaLobe {
    ox: number;
    oy: number;
    rs: number;
    alpha: number;
}
export interface SkyNebulaStar {
    dx: number;
    dy: number;
    ph: number;
    sz: number;
}
export interface SkyNebula {
    b0: number;
    drift: number;
    e: number;
    angR: number;
    rgb: string;
    lobes: SkyNebulaLobe[];
    stars: SkyNebulaStar[];
    bs: number;
    bp: number;
}
export interface SkySun {
    type: "sun";
    b: number;
    e: number;
    angR: number;
}
export interface SkyGiant {
    type: "giant";
    b: number;
    e: number;
    angR: number;
    ringTilt: number;
}
export interface SkyGalaxy {
    type: "galaxy";
    b: number;
    e: number;
    angR: number;
    rot: number;
}
export interface SkyComet {
    type: "comet";
    b0: number;
    e0: number;
    angR: number;
    vel: number;
    evel: number;
}
export type SkyObject = SkySun | SkyGiant | SkyGalaxy | SkyComet;
export interface SkyPlan {
    seed: string;
    hash: number;
    band: SkyBandPlan;
    stars: SkyStar[];
    bandStars: SkyStar[];
    dust: SkyDustMote[];
    nebulae: SkyNebula[];
    objects: SkyObject[];
}
/** View geometry for one frame, computed by the renderer from ITS pinhole
 * constants so the sky pans exactly 1:1 with the wireframe world. */
export interface SkyGeom {
    cx: number;
    cy: number;
    f: number;
    halfFOV: number;
    yawRad: number;
    pitchRad: number;
    w: number;
    h: number;
}
/** Galactic band elevation at bearing b (tilted great-circle-ish sinusoid). */
export declare function bandElevAt(band: SkyBandPlan, b: number): number;
/** Comet bearing at renderer-clock t (pure — rule: no cross-frame state). */
export declare function cometBearingAt(c: SkyComet, t: number): number;
/** Comet elevation at t, clamped to the prototype's ±0.5 corridor. */
export declare function cometElevAt(c: SkyComet, t: number): number;
export declare function skyPlan(seed: string): SkyPlan;
/** Memoized skyPlan — same object back for the same seed (oldest evicted). */
export declare function getSkyPlan(seed: string): SkyPlan;
/**
 * Draw the full live sky for one frame. Call right after the bg fill, before
 * any phosphor pass. `timeSec` is the renderer clock (rx.t) — all motion is a
 * pure function of it. `throttle01` drives the dust impulse streaks.
 */
export declare function drawSkybox(g: Canvas2D, geom: SkyGeom, plan: SkyPlan, timeSec: number, throttle01: number): void;
