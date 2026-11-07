import { MapSchema, Schema } from "@colyseus/schema";
export declare class ChoiceOption extends Schema {
    id: string;
    label: string;
    detail: string;
}
export declare class RunState extends Schema {
    sector: number;
    salvage: number;
    kills: number;
    encounterType: string;
    encounterLabel: string;
    objective: string;
    encounterComplete: boolean;
    jumpCharge: number;
    jumpCharging: boolean;
    questId: string;
    questStage: number;
    questLog: string;
    /** Survey probes aboard (design update): finite — spent on POI actions,
     * bought from merchants or scavenged. APPENDED (wire convention). */
    probes: number;
    systemId: string;
    destinationId: string;
    /** The crew names their ship in the lobby (host/TV). Doubles as the SAVE SLOT
     * identity — unique per profile, hardcore-deleted on death. */
    shipName: string;
    /** THE UNMAKING front: 0..100 pressure advancing behind the crew every jump —
     * the long retreat's escalation dial (husk variants, harder waves). */
    unmakingFront: number;
    /** Colonies evacuated this run — the retreat's score alongside distance. */
    coloniesSaved: number;
    /** Faction reputation ledger (comms is its keeper): keyed by faction id
     * ("corsairs","syndicate","guild","velshaar"), value -100..100. Tribute paid
     * raises pirate boldness; called bluffs buy real fear. */
    reputation: MapSchema<number, string>;
    /** Systems cleared this run (encounter completed, counted once per sector) —
     * drives the guild supply line: every encounters.merchantEveryCleared-th
     * clear warps a merchant into the just-cleared sector. APPENDED. */
    systemsCleared: number;
}
