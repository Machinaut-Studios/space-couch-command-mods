import { Schema } from "@colyseus/schema";
export declare class Weapon extends Schema {
    id: string;
    type: string;
    charge: number;
    ready: boolean;
    heat: number;
    /** APPENDED (cannoneer wave): the Cannoneer (GUNNER) seat id this phaser is
     * delegated to, or "" = Tactical-controlled. A cannoneer is a "tactical
     * assistant" — they fire this bank at Tactical's locked target/sub-target,
     * while Tactical keeps the undelegated banks. Reassigned live as cannoneer
     * seats connect/drop (BridgeRoom.refreshGunnerAssignments). */
    gunnerSeatId: string;
}
