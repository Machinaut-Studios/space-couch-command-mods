import { Schema } from "@colyseus/schema";
import { Vector } from "./Vector";
export declare class Projectile extends Schema {
    id: string;
    kind: string;
    ownerId: string;
    pos: Vector;
    heading: number;
    phase: string;
    timeAlive: number;
    activationDelay: number;
    lifetime: number;
    signature: number;
    lockedTargetId: string;
}
