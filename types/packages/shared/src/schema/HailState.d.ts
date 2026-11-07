import { Schema, ArraySchema } from "@colyseus/schema";
import { ChoiceOption } from "./RunState";
export declare class HailState extends Schema {
    active: boolean;
    /** Contact on the other end ("" for off-map voices, e.g. a distant mayday). */
    contactId: string;
    /** Avatar id — clients render /avatars/{avatarId}.png. */
    avatarId: string;
    /** The other captain, e.g. "Vex Marrow". */
    speaker: string;
    /** Display faction, e.g. "Crimson Corsairs". */
    faction: string;
    /** What they just said. */
    text: string;
    /** HailTone — drives the frame color (friendly/neutral/hostile). */
    tone: string;
    /** THEY opened the channel (incoming klaxon + banner on Comms). */
    incoming: boolean;
    /** Comms' response choices; empty = only "END TRANSMISSION". */
    options: ArraySchema<ChoiceOption>;
    /** Seconds until the hail auto-resolves (0 = no clock). Silence is an answer. */
    expiresInSec: number;
}
