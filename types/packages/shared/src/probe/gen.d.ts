import { type ProbeTheme } from "./types";
export interface ProbeMapResult {
    tiles: string;
    cols: number;
    rows: number;
    entry: {
        c: number;
        r: number;
    };
    prize: {
        c: number;
        r: number;
    } | null;
    /** The creature's lair: the deepest plain-floor cell from the entry. */
    den: {
        c: number;
        r: number;
    };
    lootCount: number;
}
/** Structural subset of balance.probe that the generator reads (tests can
 * hand in shrunk knobs without cloning the whole balance block). */
export interface ProbeGenKnobs {
    grid: {
        cols: number;
        rows: number;
    };
    loot: {
        minorMin: number;
        minorMax: number;
        terminalsMin: number;
        terminalsMax: number;
    };
    gen: {
        rooms: {
            min: number;
            max: number;
            wMin: number;
            wMax: number;
            hMin: number;
            hMax: number;
        };
        caveFill: number;
        caveSmooth: number;
        loops: number;
        hazards: {
            arcMin: number;
            arcMax: number;
            ventMin: number;
            ventMax: number;
            collapseMin: number;
            collapseMax: number;
        };
        maxAttempts: number;
    };
}
type Rng = () => number;
/** BFS depth from a cell over PASSABLE tiles (−1 = unreachable). With
 * blockCollapse, 'C' cells are treated as blocked too — the solvability
 * invariant's worst case, and what cautious creature pathing wants. */
export declare function probeBfsDepth(tiles: string, cols: number, rows: number, from: {
    c: number;
    r: number;
}, opts?: {
    blockCollapse?: boolean;
}): Int32Array;
export interface WreckCarve {
    grid: string[];
    roomCount: number;
    /** Corridor connections carved. edgeCount > roomCount − 1 ⟹ the room graph
     * has ≥1 cycle — the loop guarantee that makes creature evasion possible.
     * Exported (with carveWreck) precisely so tests can assert it. */
    edgeCount: number;
}
export declare function carveWreck(rng: Rng, cols: number, rows: number, gen: ProbeGenKnobs["gen"]): WreckCarve;
export declare function generateProbeMap(seed: number, theme: ProbeTheme, opts: {
    includePrize: boolean;
}, knobs?: ProbeGenKnobs): ProbeMapResult;
export {};
