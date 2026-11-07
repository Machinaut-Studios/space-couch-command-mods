import { Schema } from "@colyseus/schema";
export declare class Poi extends Schema {
    id: string;
    /** Comms-style designator ("P-3 Kilo") — the callable name before/after ID. */
    designator: string;
    /** Display label once surveyed ("MAGNETITE SEAM", "SEALED AIRLOCK", …). */
    label: string;
    /** PoiKind: what CLASS of action it invites (mineral / relic / hatch / signal …). */
    kind: string;
    /** Normalized position on the body/scan view, 0..1 × 0..1. */
    x: number;
    y: number;
    /** Scan reveal state: pois appear as unresolved returns first, then resolve. */
    surveyed: boolean;
    /** The action has been taken (one-shot) — keeps outcomes from re-rolling. */
    spent: boolean;
}
