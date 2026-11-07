import { Schema } from "@colyseus/schema";
export declare class Intercept extends Schema {
    id: string;
    text: string;
    /** Seconds until the intercept scrolls off (server-decremented). */
    ttl: number;
    /** Source designator ("41 Mike") for the console's tuning flavor. */
    source: string;
}
