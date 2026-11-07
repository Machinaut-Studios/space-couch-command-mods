export declare const encounter: {
    readonly survey: {
        readonly label: import("..").TextEntry<"FIRST LIGHT SURVEY">;
        readonly objective: "Survey the system: chart an anomaly to a full scan";
    };
    readonly patrol: {
        readonly label: import("..").TextEntry<"PIRATE PATROL">;
        readonly objective: "Destroy all hostiles";
    };
    readonly ambush: {
        readonly label: import("..").TextEntry<"PIRATE AMBUSH">;
        readonly objective: "Destroy all hostiles";
    };
    readonly asteroidField: {
        readonly label: import("..").TextEntry<"ASTEROID FIELD">;
        readonly objective: "Destroy the pirates hiding in the rocks";
    };
    readonly driftField: {
        readonly label: import("..").TextEntry<"DRIFT FIELD">;
        readonly objective: "Destroy the pirates adrift in the moving rocks";
    };
    readonly derelict: {
        readonly label: import("..").TextEntry<"DERELICT HULK">;
        readonly objective: "Deep-scan the derelict for salvage";
    };
    readonly distress: {
        readonly label: import("..").TextEntry<"DISTRESS CALL">;
        readonly objective: "Comms: answer the mayday";
        readonly defendObjective: import("..").TextEntry<"Defend the freighter: destroy all hostiles">;
    };
    readonly minefield: {
        readonly label: import("..").TextEntry<"MINEFIELD">;
        readonly objective: "Reach and scan the derelict inside the field";
    };
    readonly hunter: {
        readonly label: import("..").TextEntry<"HUNTER-KILLER">;
        readonly objective: "Destroy the elite hunter";
    };
    readonly firstContact: {
        readonly label: import("..").TextEntry<"FIRST CONTACT">;
        readonly objective: "Comms: open a channel";
    };
    readonly trader: {
        readonly label: import("..").TextEntry<"GUILD MERCHANT">;
        readonly objective: "Comms: hail the merchant";
    };
    readonly debrisStorm: {
        readonly label: import("..").TextEntry<"DEBRIS STORM">;
        readonly objective: "Thread the storm and survey the return at its heart";
    };
    readonly evacuation: {
        readonly label: import("..").TextEntry<"COLONY EVACUATION">;
        readonly objective: import("..").TextEntry<"Cover the convoy until the transports jump">;
    };
} & import("../types").TextGroup;
