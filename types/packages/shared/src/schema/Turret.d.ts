import { Schema } from "@colyseus/schema";
export declare class Turret extends Schema {
    id: string;
    mode: string;
    heat: number;
    cooldownRemaining: number;
}
