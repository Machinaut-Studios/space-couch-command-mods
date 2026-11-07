import type { Canvas2D, ProbeRadarFrame, ProbeViewFrame } from "./types";
/** Tiles across the SHORT view axis — vision range 6.5 fills the glass. */
export declare const PROBE_VIEW_TILES = 13;
/** Rendered-vision scale for a proximity tier: 1 at tier 0 → 0.5 at tier 3
 * (PROX_FOV_SHRINK_MAX). Smooth in the tier value; presentation only. */
export declare function probeFovScale(proximity: number): number;
/** Feed-tear strength at nowMs for a proximity tier: 0 = clean carrier, else
 * a 0..1 envelope (hard attack, tail decay) inside one hashed window per
 * GLITCH_PERIOD_MS cycle. Deterministic from nowMs so the Science phone, the
 * TV blit AND the audio hook (useProbeCues) agree on every single tear. */
export declare function probeGlitch01(nowMs: number, proximity: number): number;
/**
 * Render one frame of the probe interior view. Sets the canvas transform to
 * view.dpr and works in CSS pixels (the renderParascope convention); fills the
 * full background. Camera is locked to the probe; min(w,h)/PROBE_VIEW_TILES px
 * per tile. Light model: undiscovered near-black grain · discovered-but-unlit
 * structural memory (no animation) · the live cone from computeVisibleCells
 * with radial falloff + cone-edge dither.
 */
export declare function renderProbeView(ctx: Canvas2D, frame: ProbeViewFrame): void;
/**
 * Render one frame of the Comms probe radar. Same transform convention as the
 * view (setTransform to dpr, CSS pixels, full bg fill). Circular scope, probe
 * chevron at center; scale documented at the top of this file (farthest map
 * corner from the probe = the rim). Comms sees ONLY what the probe has
 * charted (discovered-mask ghosts) plus the consumer-fed echoes.
 */
export declare function renderProbeRadar(ctx: Canvas2D, frame: ProbeRadarFrame): void;
