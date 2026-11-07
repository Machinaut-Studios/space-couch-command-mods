import { Schema, MapSchema } from "@colyseus/schema";
export declare class PowerState extends Schema {
    reactorOutput: number;
    overclock: boolean;
    totalDemand: number;
    /** Captain's priority weight per SystemId, 0..1. */
    priorities: MapSchema<number, string>;
    reactorHeat: number;
    venting: number;
}
