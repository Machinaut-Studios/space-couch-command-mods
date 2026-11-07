import { Schema, ArraySchema } from "@colyseus/schema";
import { Vector } from "./Vector";
import { Subsystem } from "./Subsystem";
import { Poi } from "./Poi";
export declare class Contact extends Schema {
    id: string;
    designator: string;
    type: string;
    pos: Vector;
    velocity: Vector;
    heading: number;
    hull: number;
    maxHull: number;
    shield: number;
    maxShield: number;
    signature: number;
    radius: number;
    scanLevel: number;
    identified: boolean;
    classId: string;
    shipClass: string;
    /** Target points (engines / shield-gen / weapons), revealed one by one by scanning. */
    subsystems: ArraySchema<Subsystem>;
    aiState: string;
    /** ANOMALY contacts: key into shared/anomalies.ts ANOMALIES (planet/wreck/
     * phenomenon flavor + scan milestones). The OUTCOME roll is server-private —
     * this id only names the flavor table entry. "" on every other contact type. */
    anomalyId: string;
    /** Enemy ESCAPE jump spool, 0..100; -1 = not spooling. A loud, detectable
     * signature — Comms watches for it (design update: fleeing ships jump out). */
    jumpCharge: number;
    /** Reinforcement-call progress 0..1; -1 = not calling. While calling, Comms
     * can jam the uplink (GameState.jam minigame) to starve the arrival roll. */
    calling: number;
    /** Survey points of interest (design update: SENSOR SCAN showcase) — revealed
     * by deep scans on planets/wrecks/anomalies; Science selects one and acts on
     * it (probe, extraction, …). Outcome rolls stay server-private. */
    pois: ArraySchema<Poi>;
    /** APPENDED (sound wave): the passive-signal voice this source emits — a key
     * into shared/sfx SIGNAL_VOICE_FILES ("" = silent source). Assigned at spawn
     * for anomalies/derelicts; Comms lists it in the channel bank, the TV plays
     * its waveform, and a probe-mission stalker at this site SPEAKS WITH IT. */
    signalVoice: string;
}
