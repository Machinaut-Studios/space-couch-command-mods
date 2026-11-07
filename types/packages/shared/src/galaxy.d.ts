import { type TextStr } from "./text/ref";
export interface GalaxySystem {
    id: string;
    /** Wire TextStr (`galaxy.name` with nested word refs) — render with renderText(). */
    name: string;
    /** Normalized map coords (0..1) for the helm star map. */
    x: number;
    y: number;
    /** Linked system ids — undirected jump lanes (both ends carry the edge). */
    links: string[];
    /** Environmental hazard ("" = none; "debris" = debris storm). Chart-visible
     * from the start — the crew opts in. The berth exemption is the ROOM's:
     * the start system is picked at room level, after generation. */
    hazard: string;
}
/** Generate the run's galaxy. Deterministic per seed (single mulberry32
 * stream, fixed draw order: positions → link degrees → names → hazards —
 * hazards draw LAST so every earlier position/link/name stays bit-identical
 * to the pre-hazard era for a given seed). */
export declare function generateGalaxy(seed: number): GalaxySystem[];
/** The unexplored-neighbor hint table (StarSystem.signal display strings).
 * Deliberately vague — a hook, not a spoiler; "" (nothing detected) is the
 * most common roll by design. */
export declare const GALAXY_SIGNALS: readonly TextStr[];
/** The signal a wormhole's far mouth shows on the chart once Science charts
 * the aperture (server-set; never rolled). */
export declare const WORMHOLE_MOUTH_SIGNAL: TextStr;
/** Roll the faint signal an unexplored system shows once it becomes adjacent
 * to somewhere the crew has been. "" most of the time (nothing detected).
 * Rolled ONCE per system, server-side — the hint never flickers. */
export declare function galaxySignalFor(_system: {
    id: string;
}, rng?: () => number): string;
