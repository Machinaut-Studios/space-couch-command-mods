import { Schema } from "@colyseus/schema";
export declare class RerouteState extends Schema {
    active: boolean;
    /** SystemId being restored (the forcedOffline one). */
    systemId: string;
    cols: number;
    rows: number;
    srcRow: number;
    sinkRow: number;
    /** Col-major cells: hex nibble of opening bits, or "X" for broken. */
    tiles: string;
    /** True while SRC→SYSTEM is linked (restore is flowing). */
    connected: boolean;
    /** Restore progress 0..100 — at 100 the system comes back online. */
    progress: number;
}
