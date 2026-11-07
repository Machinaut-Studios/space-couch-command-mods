import { Schema } from "@colyseus/schema";
export declare class JamSignal extends Schema {
    active: boolean;
    /** Contact id + designator of the calling ship (Comms calls it out). */
    callerId: string;
    designator: string;
    /** Seconds remaining / total length of the call window. */
    timeLeft: number;
    duration: number;
    /** Enemy carrier frequency 0..1 (server hops it). */
    enemyFreq: number;
    /** Officer's jammer center 0..1 (echo of the last setJamFreq). */
    jamFreq: number;
    /** Live lock quality 0..1 (inside tolerance long enough → 1). */
    lock: number;
    /** Time-weighted fraction of the call blocked so far, 0..1. */
    blocked: number;
}
