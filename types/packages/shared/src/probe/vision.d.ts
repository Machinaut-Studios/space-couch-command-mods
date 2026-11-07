/** Structural subset of balance.probe.vision (tests can hand in variants). */
export interface ProbeVisionKnobs {
    fovDeg: number;
    rangeTiles: number;
    ambientTiles: number;
    rayStepDeg: number;
}
/** Cells visible from (x, y) facing headingRad: a fovDeg forward cone of
 * rangeTiles rays plus an ambientTiles ring (line-of-sight applies to both —
 * the wall you're scraping is visible, the room behind it is not). */
export declare function computeVisibleCells(tiles: string, cols: number, rows: number, x: number, y: number, headingRad: number, knobs?: ProbeVisionKnobs): Set<number>;
