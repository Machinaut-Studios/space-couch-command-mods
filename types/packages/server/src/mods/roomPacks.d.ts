import type { Client } from "colyseus";
import type { BridgeRoom } from "../rooms/BridgeRoom";
import { type AppliedMod, type RuntimeMember } from "./modRuntime";
import { type ScannedMod, type ScannedPack } from "./index";
export declare class RoomPacks implements RuntimeMember {
    private readonly room;
    /** The last scan's packs (every folder with a language, broken ones included; the host's switches not applied). */
    scanned: ScannedPack[];
    /** The last scan's Mods (every folder, broken ones included). */
    mods: ScannedMod[];
    /** What the crew may actually use: the packs of Mods that are on and whose requirements are met. */
    private effective;
    private resolved;
    private english;
    private englishSig;
    private catalog;
    private readonly rechecked;
    private scanning;
    /** The ONE follow-up scan queued behind the scan in flight (a rescan asked for while it ran). */
    private followUp;
    private scanGen;
    private choice;
    private choiceLoaded;
    private wire;
    private chunks;
    private readonly lastRequest;
    private disposed;
    /** The plan of the last rebuild: what wins, and the lines for the Mods screen. */
    private plan;
    /** A change to the Room Content was refused because a room in the process is out of the lobby. */
    private runBlocked;
    private contentGen;
    private preparing;
    private prepareTimer;
    private contentWork;
    /** What kind of client each session joined as ("terminal" or "viewport"), kept across a reconnect. */
    private readonly kinds;
    private readonly lastReport;
    constructor(room: BridgeRoom);
    /** The active pack's wire hash ("" = English). */
    get activeHash(): string;
    /**
     * Scan the mods folder and apply the result (LOBBY only). A scan in flight is not restarted; a request that
     * arrives meanwhile queues exactly ONE follow-up scan (so an edit made after the running scan began is not
     * lost) and every such request shares it. Never rejects.
     */
    scan(): Promise<void>;
    /** One pass over the mods folder under the watchdog. False when it failed or timed out (its late result is discarded). */
    private attempt;
    /** Queue a scan on the event loop, off whatever tick asked for it (LOBBY entry). */
    queueScan(): void;
    private run;
    private apply;
    /**
     * The persisted language choice, read once; after that memory is the truth (a failed write loses nothing). The Mod
     * switches are not the room's: ModRuntime holds the one copy every room in the process reads and writes.
     */
    private loadSettings;
    /** Re-resolve the host's switches and Load Order over the last scan, refill both lists and settle the active pack. */
    private rebuild;
    private refreshOrder;
    /** The active Mods' English changed (or did not): the catalog packs are checked against. */
    private setEnglish;
    /**
     * The pack as the room uses it: the scan's verdict, or, when Mods add text, the verdict against the game's catalog plus their
     * English. A pack entry under `mod.` that no active Mod owns is dropped without a word (validatePack).
     */
    private view;
    /** meta.packs: every language the host has not switched off, in folder order. An unmet requirement shows and blocks. */
    private fillPacks;
    /** The Mods the Mods list shows: usable ones in Load Order (a language-only Mod is in the LANGUAGE row instead). */
    private listedMods;
    /** meta.mods: rebuilt from the last scan and the host's current order; needs no rescan. */
    private fillMods;
    /** The Code Mods the host wants running: approved, switched on, usable, in Load Order. */
    private desiredCode;
    /**
     * Bring the process's Code Mods in line with the host's list, after the Room Content is applied. With no Code Mods wanted and none
     * running this returns at once: no worker thread, no timers. Activation runs only while every room is in the lobby.
     */
    private syncCode;
    /** The Code Mods the host wants (as of the last rebuild). */
    private wantCode;
    private codeWork;
    private codeGen;
    private codeBusy;
    /** A Code Mod patched the balance (in the lobby): plan the Room Content again. */
    codeChanged(): void;
    /** RuntimeMember: the Code Mod `id` in the last scan, as the host would be shown it. */
    codeModOf(id: string): {
        hash: string;
        source: "folder" | "workshop";
        workshopId: string;
    } | null;
    /** RuntimeMember: the host approved something. */
    approvalsChanged(): void;
    /** The enabled, usable, unblocked Mods that reskin or tune something, in Load Order. */
    private planContent;
    /** A plan's identity: what wins which game file, from which file at which size and time, which colours, which numbers, which content and which text. "" for a plan with nothing in it. */
    private static planSig;
    /**
     * The Mods a run flown now would need (null before the first scan has finished): the ones that are APPLIED, which are the
     * enabled, usable and unblocked ones that are not language-only (a language is the crew's own choice, not part of the run) once
     * their Room Content is in the tables. A save is stamped with these, and a saved ship is flyable only when they are all here.
     * The ones the host wants but that are not applied yet (a game running in another room, a copy that failed) are `modsPending`.
     */
    activeMods(): AppliedMod[] | null;
    /** The Mods the host has switched on and that are usable: what the room is trying to run (null before the first scan). */
    private desiredMods;
    /** Is the host's Mod list different from what is applied? Then a run would fly with the wrong tables and be stamped wrongly. */
    get modsPending(): boolean;
    /** The room's Room Content hash ("" = none). */
    get contentHash(): string;
    /** LAUNCH waits while the Room Content is being copied (and cannot be overridden). */
    get contentPreparing(): boolean;
    /** Resolves once the Room Content and the Code Mods of the latest rebuild are in place (a Code Mod's balance patch can plan the content again). */
    allSettled(): Promise<void>;
    /** Resolves once the Room Content of the latest rebuild is published (or discarded). Never rejects. */
    settled(): Promise<void>;
    private setPreparing;
    /** In the lobby (a room with no state yet has started nothing). */
    get inLobby(): boolean;
    /** The runtime applied a hash (or this room joined it): show it. */
    adoptHash(hash: string): void;
    /**
     * The game's tables changed under this room (RuntimeMember): a hull the crew had picked may be gone with its Mod, and the
     * saved ships' hulls and crew counts were read against the old tables.
     */
    contentChanged(): void;
    /** Another room is back in the lobby: ask again for what this room was refused. */
    retryBlocked(): void;
    private setBlocked;
    /**
     * Make the process's Room Content match `plan`. Nothing changes while a room is out of the lobby: the room shows what
     * is applied and its Mods carry a "wait" line. A plan that is already applied needs nothing. A plan with nothing in it
     * clears at once; any other is copied in the background and applied only when the copy is done, if no room has left the
     * lobby meanwhile.
     */
    private scheduleContent;
    /** onJoin: this client is a device. It counts as not ready until it reports. */
    noteDevice(client: Client, kind: string): void;
    private findDevice;
    private deviceRow;
    /**
     * modAssets: a device says how much of the current Room Content it holds. Any client, any phase. A report for
     * another hash is ignored (it is about content that is gone); the numbers are clamped; at most 4 a second per
     * client, except the one that says it has everything.
     */
    reportAssets(client: Client, hash: unknown, done: unknown, total: unknown): void;
    /**
     * What stops this room launching that no `force` can skip, with the text the lobby shows for it ("" = the lobby already says it:
     * the copy shows as "preparing"). Null when nothing does. Checked in this order:
     * - the first scan is still running: until it ends the room does not know its Mods, so a run now would fly unmodded and be
     *   saved unstamped. A scan that failed or timed out is tried once more; when that fails or times out too
   *   `scanning` is cleared (a warning is logged), so this holds LAUNCH for two watchdog periods at most and never for good.
     *   A room that never scans (a test's) has nothing in flight and is not held.
     * - the Room Content is being copied.
     * - the Mods the host wants are not the ones applied (`modsPending`): another room's game is running (it clears when that ends), or
     *   the copy failed or timed out. A failed copy does NOT unblock the room, because a run must not silently fly without its Mods.
     *   The host clears it by switching that Mod off on the MODS screen (any switch or REFRESH also tries the copy again).
     * - Code Mods are loading, or one must be removed and the server is about to restart.
     */
    private hardBlock;
    /** meta.modBlock: why LAUNCH cannot go for a reason the host can read ("" = none). Cheap; called wherever the inputs change, and every lobby tick for the ones that live outside the room. */
    syncBlock(): void;
    /**
     * The launch gate for Mods: null when the room may launch. "mods scanning", "mod content preparing", "mods not applied" and
     * "code mods not ready" are never overridable (see `hardBlock`); "mod assets loading" (a connected device has not got the files
     * yet) is skipped by `force`. Only clients in the room count, so a phone in its reconnect window cannot hold the crew up.
     */
    launchBlock(force: boolean): string | null;
    /** Make `sp` (null = English) the active pack; rebroadcast only when what clients hold would change. */
    private activate;
    /** Host chose a language (`null` = English). False when `packId` is not an installed, usable pack. */
    setLanguage(packId: string | null): boolean;
    /** The ids the Mods list shows that the host can switch (usable Mods, in Load Order). */
    private switchable;
    private saveMods;
    /**
     * Host switched a Mod on or off. False when `id` is not a Mod in the list. Rebuilds both lists and the
     * active pack right away; `choice` is untouched, so turning a Mod back on brings its language back.
     */
    setModEnabled(id: string, on: boolean): boolean;
    /**
     * Host moved a Mod one place in the Load Order. The move is made among the Mods the list shows, then written
     * back into the saved order (ids that are not installed keep their places in it). A move a rule forbids
     * resolves to the order it was already in, so nothing is saved and nothing changes. When the first step does
     * resolve back (the Mod is next to a loop in the rules, which keeps its own order), it goes on one place
     * further until the order really changes or the list ends. False when `id` is not a Mod in the list.
     */
    moveMod(id: string, delta: -1 | 1): boolean;
    private sendChunks;
    /** onJoin, FIRST (before any early return): a new client gets the active pack; with none active it needs nothing. */
    sendActive(client: Client): void;
    /** requestPack: answer THAT client with the active pack, or a clear when none; at most one per client per 5 s. */
    request(client: Client): void;
    /** exportTemplate: write the English template and tell the requesting host how it went (a wire ref, ADR 0001). */
    exportTemplate(client: Client): Promise<void>;
    /** A client dropped or left: forget its rate-limit entries. Its device row stays through a reconnect window (see dropDevice). */
    forget(sessionId: string): void;
    /** A client left for good (consented, or its reconnect window ran out): its device row goes. A reconnect skips onJoin, so the row must survive until then. */
    dropDevice(sessionId: string): void;
    dispose(): void;
}
