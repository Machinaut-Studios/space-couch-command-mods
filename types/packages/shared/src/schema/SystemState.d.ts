import { Schema } from "@colyseus/schema";
export declare class SystemState extends Schema {
    id: string;
    health: number;
    online: boolean;
    powerAllocated: number;
    powerDemand: number;
    /** Event-forced outage (hacks, anomaly surges): offline even at full health.
     * Cleared ONLY by the engineer's REROUTE minigame (or event expiry). */
    forcedOffline: boolean;
}
