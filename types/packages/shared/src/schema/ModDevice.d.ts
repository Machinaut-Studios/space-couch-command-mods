import { Schema } from "@colyseus/schema";
export declare class ModDevice extends Schema {
    sessionId: string;
    /** "terminal" (a crew phone or desktop console) or "viewport" (the TV or a mirror). */
    kind: string;
    /** The Room Content hash this report is about. A device that has not reported for the current hash is not ready. */
    hash: string;
    /** Files this device holds, and how many it needs. done == total means ready. */
    done: number;
    total: number;
}
