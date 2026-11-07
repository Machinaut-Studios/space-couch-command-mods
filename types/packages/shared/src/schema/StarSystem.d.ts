import { Schema, ArraySchema } from "@colyseus/schema";
export declare class StarSystem extends Schema {
    id: string;
    name: string;
    x: number;
    y: number;
    /** The crew has BEEN here (full detail on the map). */
    explored: boolean;
    /** Faint long-range signal: an unexplored neighbor shows a hint of what
     * waits there ("" = nothing detected). Display string, server-curated. */
    signal: string;
    /** Linked system ids (jump targets). Wormhole links get appended when found. */
    links: ArraySchema<string>;
    /** This system holds a KNOWN wormhole to a distant system ("" = none/unknown).
     * Set when Science fully scans a wormhole aperture anomaly here. */
    wormholeTo: string;
    /** Environmental hazard, pre-rolled at galaxy generation ("" = none;
     * "debris" = debris storm). Chart-VISIBLE from the start — the crew opts
     * into the risk/reward, no gamble. APPENDED (wire convention). */
    hazard: string;
}
