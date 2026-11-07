import type { Client } from "colyseus";
import type { Balance, BalancePatch, AnomalyDef, HailPersona, QuestDef, ShipClassDef } from "@scc/shared";
import type { BridgeRoom } from "../rooms/BridgeRoom";
/** JSON-safe data: what `save` and the message channel carry. */
export type Json = null | boolean | number | string | Json[] | {
    [key: string]: Json;
};
/** Every event a Code Mod can listen to, with what each one is called with. All are called synchronously on the sim's thread. */
export interface ModEvents {
    /** A room was created (or, for a Mod that loads later, already exists): set up per-room things here. */
    roomCreated: {
        room: BridgeRoom;
    };
    /** Every tick (20 a second), after the encounter tick. */
    tick: {
        room: BridgeRoom;
        dt: number;
    };
    /** The crew arrived in a sector: after a jump, at launch (`reason` "start") and after CONTINUE ("resume"). Before the checkpoint is saved. */
    sectorArrival: {
        room: BridgeRoom;
        sector: number;
        systemId: string;
        reason: "jump" | "start" | "resume";
    };
    /** The jump drive fired: the crew is in transit. */
    jumpStart: {
        room: BridgeRoom;
        sector: number;
    };
    /** The room went to RED ALERT. `reason` is a Text Key reference (a string). */
    combatStart: {
        room: BridgeRoom;
        reason: string;
    };
    /** An enemy ship was destroyed. */
    enemyKilled: {
        room: BridgeRoom;
        contactId: string;
        classId: string;
    };
    /** A quest moved to a new stage. */
    questStage: {
        room: BridgeRoom;
        questId: string;
        stage: number;
    };
    /** A survey of an anomaly paid out. */
    anomalyOutcome: {
        room: BridgeRoom;
        anomalyId: string;
        outcome: string;
    };
    /** An action on a point of interest paid out. */
    poiOutcome: {
        room: BridgeRoom;
        outcome: string;
    };
    /** The room is back in the lobby. */
    lobby: {
        room: BridgeRoom;
    };
}
export type ModEventName = keyof ModEvents;
/** The client a message came from. */
export interface ModClient {
    /** The room the client sent it to. */
    room: BridgeRoom;
    sessionId: string;
    /** The host's own viewport. */
    host: boolean;
    /** A terminal's crew name ("" for a viewport). */
    name: string;
}
export interface GameApi {
    /** This Mod's id and version, from mod.json. */
    readonly id: string;
    readonly version: string;
    /**
     * The room that is running now. A getter: with a restart or a second room, hold on to the `room` an event gives you, not this.
     * It is the real BridgeRoom, not a copy. It throws when there is no room. `log`, `save` and `send` use the room of the event or
     * message being handled, else the newest room, and do nothing (with a line in the server log) when there is none.
     */
    readonly room: BridgeRoom;
    /**
     * The live balance table. Changing it here changes the host's game, but NOT the other devices: use `patchBalance` for
     * numbers the crew's screens also read.
     */
    readonly balance: Balance;
    /** Add a line to the ship's log. A Text Key (the game's, or `mod.<your id>.…` from your text files) is translated; anything else is shown as written. */
    log(textKeyOrText: string): void;
    /** Listen to an event. Returns a function that stops listening. */
    on<K extends ModEventName>(event: K, fn: (e: ModEvents[K]) => void): () => void;
    /**
     * Change balance numbers for everyone, the way a balance file does (same rules: only numbers the game has, within their bounds).
     * Applied after every Mod's balance file. Only while activating or in the lobby; at any other time it throws.
     */
    patchBalance(partial: BalancePatch): void;
    /** Data kept in the run's save (up to 256 KiB of JSON per Mod). `set` throws over the limit or for something that is not JSON. */
    readonly save: {
        get(): Json | undefined;
        set(value: Json): void;
    };
    /** Send JSON (up to 16 KiB) to every device in the room, or to one client. A Mod panel or a terminal receives it as a `modMessage` room message. */
    send(payload: Json, client?: Client | string): void;
    /** Listen to messages clients send to this Mod (a `modMessage` intent with your id). 20 a second per client, 16 KiB each. */
    onMessage(fn: (payload: Json, from: ModClient) => void): () => void;
    /** The game's tables, shared with every Mod. Read them freely; changing them is not synced to other devices. */
    readonly content: {
        readonly anomalies: Record<string, AnomalyDef>;
        readonly quests: Record<string, QuestDef>;
        readonly captains: HailPersona[];
        shipClass(classId: string): ShipClassDef;
        hasShipClass(classId: string): boolean;
    };
}
/** What a Code Mod's main file exports. */
export interface CodeModModule {
    activate(game: GameApi): void | Promise<void>;
}
