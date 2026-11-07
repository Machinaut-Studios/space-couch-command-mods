import { Schema } from "@colyseus/schema";
export declare class Player extends Schema {
    sessionId: string;
    name: string;
    /** Claimed seat id on the current ship class (ships.ts), or "" = none. */
    seatId: string;
    /** The seat's FIRST duty (display + legacy compat), or "" when unseated. */
    role: string;
    connected: boolean;
    ready: boolean;
    /** APPENDED (sound wave): held-to-skip during the Phase.BOOT launch gate.
     * Reset by the server when a boot starts; the mission begins once every
     * seated CONNECTED officer has skipped (or the host overrides). */
    bootSkipped: boolean;
}
