/** The fields of a ModDevice row this reads (the schema class satisfies it). */
export interface DeviceReport {
    sessionId: string;
    kind: string;
    hash: string;
    done: number;
    total: number;
}
/** A device is ready when it reported on THE current content and holds all of it. No report for this hash means not ready. */
export declare function deviceReady(d: DeviceReport | undefined, contentHash: string): boolean;
export interface ModWait {
    /** Devices counted. */
    total: number;
    /** Of those, ready. */
    done: number;
    /** 0..99 while anyone waits, 100 when all are ready. */
    percent: number;
}
/**
 * Where the room stands on the Room Content. Null when there is none ("" hash) or every counted device is ready.
 * `connected` is the set of sessions to count (a row of a device that left is not waited for); rows are matched to it.
 */
export declare function modWait(rows: Iterable<DeviceReport>, contentHash: string, connected?: ReadonlySet<string>): ModWait | null;
/**
 * modWait for a lobby: the devices of players who are in their reconnect window (`away`: session ids) are not waited for,
 * because the host's launch gate does not wait for them either.
 */
export declare function modWaitPresent(rows: Iterable<DeviceReport>, contentHash: string, away: ReadonlySet<string>): ModWait | null;
/** Session ids of the players whose devices are away (disconnected, holding their seat). */
export declare function awayPlayers(players: Iterable<[string, {
    connected: boolean;
}]>): Set<string>;
/** The slice of a ModInfo row the Modded Room badge reads. */
export interface ModRow {
    name: string;
    enabled: boolean;
    ok: boolean;
}
/**
 * The names of the Mods the crew is playing with, in Load Order: enabled and usable. A Mod that only adds a language
 * is not in meta.mods at all (it is a LANGUAGE choice, GLOSSARY: Modded Room), so a language-only room is not "modded".
 */
export declare function moddedRoomNames(mods: Iterable<ModRow>): string[];
