import type { Canvas2D } from "../parascope/types";
export type { Canvas2D };
export declare const PROBE_TILE: {
    readonly WALL: "#";
    readonly FLOOR: ".";
    readonly ENTRY: "E";
    readonly LOOT: "L";
    readonly PRIZE: "P";
    readonly TERMINAL: "T";
    readonly TERMINAL_READ: "t";
    readonly VENT: "V";
    readonly ARC: "A";
    readonly COLLAPSE: "C";
    readonly HOLE: "X";
};
export type ProbeTileChar = (typeof PROBE_TILE)[keyof typeof PROBE_TILE];
export declare const probeIdx: (c: number, r: number, rows: number) => number;
/** Can the probe (or the creature) occupy this cell? */
export declare const probePassable: (ch: string) => boolean;
/** Does this cell block SIGHT? (Holes are see-through pits; walls are not.) */
export declare const probeOpaque: (ch: string) => boolean;
export declare const PROBE_PHASE: {
    readonly LANDING: "LANDING";
    readonly EXPLORING: "EXPLORING";
    readonly EXTRACTING: "EXTRACTING";
    readonly EXTRACTED: "EXTRACTED";
    readonly LOST: "LOST";
};
export type ProbeTheme = "wreck" | "cave" | "organic" | "halls";
export interface ProbePalette {
    bg: string;
    memory: string;
    floor: string;
    wall: string;
    ink: string;
    dim: string;
    accent: string;
    warn: string;
    danger: string;
}
export declare const PROBE_THEME_PALETTES: Record<ProbeTheme, ProbePalette>;
export declare function maskCreate(cells: number): string;
export declare function maskHas(mask: string, idx: number): boolean;
/** OR a set of cell indices into the mask; returns the (possibly new) string. */
export declare function maskOr(mask: string, indices: Iterable<number>): string;
export interface ProbeViewFrame {
    view: {
        w: number;
        h: number;
        dpr: number;
        nowMs: number;
    };
    cols: number;
    rows: number;
    tiles: string;
    discovered: string;
    theme: ProbeTheme;
    /** ProbeState.siteName as synced (may be an encoded text ref); the renderer runs renderText on it. */
    siteName: string;
    phase: string;
    endReason: string;
    probe: {
        x: number;
        y: number;
        headingRad: number;
        throttle: number;
        hull: number;
        noise: number;
    };
    /** Latest creature-proximity fx tier (0 none .. 3 on top of you). */
    proximity: number;
    /** A cone-clip glimpse to flash, if fresh (consumer-fed from fx). */
    glimpse?: {
        bearingDeg: number;
        ageMs: number;
    };
    lootCarried: number;
    lootTotal: number;
    prizeCarried: boolean;
    extractProgress: number;
}
export interface ProbeEcho {
    bearingDeg: number;
    range01: number;
    strength: number;
    ageMs: number;
}
export interface ProbeRadarFrame {
    view: {
        w: number;
        h: number;
        dpr: number;
        nowMs: number;
    };
    cols: number;
    rows: number;
    tiles: string;
    discovered: string;
    theme: ProbeTheme;
    /** ProbeState.siteName as synced (may be an encoded text ref); the renderer runs renderText on it. */
    siteName: string;
    phase: string;
    endReason: string;
    probe: {
        x: number;
        y: number;
        headingRad: number;
    };
    /** Sweep angle in deg — derive from the synced tick so every consumer agrees. */
    sweepDeg: number;
    /** Consumer-kept echo memory (fed from probeEcho fx; renderer just draws). */
    echoes: ProbeEcho[];
    /** 0..1 fraction of the ping cooldown remaining (1 = just fired). */
    pingCooldown01: number;
}
