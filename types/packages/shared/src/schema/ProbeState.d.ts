import { Schema } from "@colyseus/schema";
export declare class ProbeState extends Schema {
    /** Mission live (any phase, including the end cards). */
    active: boolean;
    /** "LANDING" | "EXPLORING" | "EXTRACTING" | "EXTRACTED" | "LOST". */
    phase: string;
    /** Host body + launching POI (headers/designators on every view). */
    contactId: string;
    poiId: string;
    /** Render theme ("wreck" | "cave" | "organic" | "halls") + flavor title. */
    theme: string;
    siteName: string;
    /** Grid dimensions (balance.probe.grid; synced so clients never assume). */
    cols: number;
    rows: number;
    /** Col-major char grid (encoding above). ~0.4 KB, rewritten on events only. */
    tiles: string;
    /** Fog mask, hex nibbles, 4 cells each (encoding above). */
    discovered: string;
    /** Probe pose — TILE units (continuous floats), heading in radians. */
    x: number;
    y: number;
    heading: number;
    /** Echo of the last accepted steer (the pilot's throttle meter). */
    throttle: number;
    /** Probe integrity — hazards chip it; 0 = wrecked (LOST). */
    hull: number;
    /** Current emission 0..1 — the pilot watches their own loudness. */
    noise: number;
    /** Minor caches aboard / present (progress display). */
    lootCarried: number;
    lootTotal: number;
    /** The pre-rolled prize cache is aboard. */
    prizeCarried: boolean;
    /** Seconds until Comms may ping again (the button's cooldown arc). */
    pingCooldown: number;
    /** 0..100 while EXTRACTING (stand on the pad, hold still). */
    extractProgress: number;
    /** End-card copy key: "" | "caught" | "aborted" | "wrecked" | "jump". */
    endReason: string;
}
