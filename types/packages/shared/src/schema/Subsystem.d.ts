import { Schema } from "@colyseus/schema";
export declare class Subsystem extends Schema {
    id: string;
    designator: string;
    health: number;
    maxHealth: number;
    revealed: boolean;
    online: boolean;
    /** Schematic node position, normalized hull coords (0..1 × 0..1, nose = +x).
     * Server-assigned RANDOM-but-stable at spawn: tactical's targeting schematic
     * and science's scan view render the SAME layout, but designators only — the
     * crew must talk to map designator → function. APPENDED (wire convention). */
    x: number;
    y: number;
}
