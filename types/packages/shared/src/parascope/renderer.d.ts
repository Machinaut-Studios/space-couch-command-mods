import type { Canvas2D, ParascopeFrame, ParascopeHit, PickOptions } from "./types";
/** Vertical projection center, fraction of view height. The camera axis — and
 * therefore the cupola BORESIGHT ray, at every pitch (cy − tan(pitch)·F) —
 * lands here, NOT at 0.5h. Anything that must sit on the aim line (the drawn
 * reticle, consumer-side reticle picking) keys off this constant. */
export declare const BORESIGHT_Y01 = 0.47;
/**
 * Render one frame of the pseudo-3D view. Sets the canvas transform to
 * view.dpr and works in CSS pixels; fills the full background. Returns the
 * projected on-screen entities for consumer-side soft-lock picking (see
 * pickAtReticle).
 */
export declare function renderParascope(ctx: Canvas2D, frame: ParascopeFrame): ParascopeHit[];
/**
 * Consumer-side soft-lock helper: nearest hit to the reticle (x01/y01 in 0..1
 * view fractions) within a forgiving pick tolerance — contacts get a wider
 * cone than point-defense targets, matching the prototype's feel.
 */
export declare function pickAtReticle(hits: ParascopeHit[], x01: number, y01: number, w: number, h: number, opts?: PickOptions): ParascopeHit | null;
