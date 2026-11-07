import { Schema } from "@colyseus/schema";
export declare class TorpedoTube extends Schema {
    id: string;
    loaded: string;
    reloadRemaining: number;
    ready: boolean;
}
