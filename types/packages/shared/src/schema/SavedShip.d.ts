import { ArraySchema, Schema } from "@colyseus/schema";
export declare class SavedShip extends Schema {
    name: string;
    sector: number;
    shipClassId: string;
    /** Officers aboard when the slot last checkpointed (0 = pre-crew save:
     * the UI renders "crew unrecorded" instead of pretending an empty bridge). */
    crewSize: number;
    /** Pre-formatted roster line, e.g. "JOSH·Pilot-Gunner / MARA·Operations" —
     * ≤80 chars, "…"-truncated server-side so every UI shows the same string. */
    crewLine: string;
    /** How many of the hull's REQUIRED seats the saved crew held (cannoneers/cupola excluded). RESUME needs
     * resumeSeatsNeeded(shipClassId, requiredCrew) of them held; 0 = a pre-crew save (one required seat). */
    requiredCrew: number;
    /** Ids of the Mods this ship was saved with that are not installed, switched on and usable here. Not empty = the save cannot be continued;
     * the row says NEEDS: <ids>. */
    missingMods: ArraySchema<string>;
    /** Ids of the Mods this ship was saved with that are here with a different version. The save still loads; the row warns. */
    updatedMods: ArraySchema<string>;
}
