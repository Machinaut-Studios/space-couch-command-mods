import { type BalancePatch, type ModContent } from "@scc/shared";
import { type Published } from "./assetCache";
import { type ApprovedMod } from "./settings";
/** What the runtime needs of a room's Mods. RoomPacks implements it. */
export interface RuntimeMember {
    /** The room is in the lobby (a room with no state yet counts: it has not started anything). */
    readonly inLobby: boolean;
    /** Show this hash as the room's Room Content ("" = none). */
    adoptHash(hash: string): void;
    /** Another room has come back to the lobby: a change this room was refused may go through now. */
    retryBlocked(): void;
    /** The game's tables just changed (new content, or none): what a room derives from them (the hull, the saved ships) is stale. */
    contentChanged(): void;
    /** The Code Mod `id` in this room's last scan, as the host would be shown it; null when there is none (step 6b). */
    codeModOf(id: string): {
        hash: string;
        source: "folder" | "workshop";
        workshopId: string;
    } | null;
    /** The host's approvals changed: work out again which Code Mods may run. */
    approvalsChanged(): void;
}
/** A built Room Content: the served document plus the balance patch and the content it carries. */
export interface Applied extends Published {
    balance: BalancePatch;
    /** The content that goes into the game's tables before the balance patch does (step 5). */
    content: ModContent;
}
/** The host's Mod switches as the process holds them. */
export interface ModSwitches {
    order: string[];
    disabled: Set<string>;
    /** The Code Mods the host approved, by id (step 6b). Only approveCodeMod writes it. */
    approved: Map<string, ApprovedMod>;
}
/** A Mod as a save names it. */
export interface AppliedMod {
    id: string;
    version: string;
}
export declare class ModRuntime {
    private readonly members;
    private current;
    private currentSig;
    private held;
    private applied;
    /**
     * The host's Load Order and switched-off Mods: read from settings.json once, then authoritative (a write the disk
     * refused loses nothing). Mutate the returned object in place, then persist it.
     */
    get switches(): ModSwitches;
    /** The content in the game's tables right now (what a balance patch from a Code Mod is judged against). */
    get content(): ModContent | null;
    /** The Room Content hash every room shows ("" = none). */
    get hash(): string;
    /** The identity of the plan that was applied ("" = none), so a room can tell its plan is already the applied one. */
    get sig(): string;
    /**
     * The Mods whose changes are in the tables right now (not the ones the host has switched on, which may be waiting for a game to
     * end, a copy to finish or a retry): what a save is stamped with and what CONTINUE is judged against.
     */
    get appliedMods(): readonly AppliedMod[];
    /** The same Mods are applied under a plan that changed no table (a Mod with nothing in the Room Content came or went). Not while a game runs. */
    adoptMods(mods: readonly AppliedMod[]): void;
    /**
     * The host approved the Code Mod `id` whose code hashes to `hash` (docs/adr/0002). The only way an approval is made, and it is
     * reached only from the desktop app's own process (serverProcess.ts), never from a room or a client. The hash must be the one
     * a room's latest scan found, so the approval is for exactly the code the host was shown; a game must not be running.
     */
    approveCodeMod(id: unknown, hash: unknown): "ok" | "busy" | "unknown";
    get size(): number;
    join(m: RuntimeMember): void;
    /**
     * A room closed. With the last one gone nothing is left to serve: the table is stock again, the files are pruned and the
     * switches are read afresh next time. Otherwise the room may have been the one running a game, so a change another room
     * was refused can go through now.
     */
    leave(m: RuntimeMember): void;
    /** May Room Content change now? Not while any room in the process is out of the lobby. */
    get busy(): boolean;
    /**
     * Apply `built` (null = no content) as the process's Room Content, under the plan identity `sig`: serve it, put the
     * balance patch into the live table, and show its hash in every room, in this one step. False, with nothing changed,
     * when a room is out of the lobby. `mods` are the Mods that this puts into the tables: the caller passes none when the build
     * failed, so a save is never stamped with a Mod whose content is not in. A plan identity that starts with "failed:" is never
     * a plan, so the next rebuild tries the copy again.
     */
    commit(sig: string, built: Applied | null, mods: readonly AppliedMod[]): boolean;
    /** A room is back in the lobby: the others that were refused a change may try again. */
    lobbyEntered(from: RuntimeMember): void;
}
/** The one runtime of this process. */
export declare const modRuntime: ModRuntime;
