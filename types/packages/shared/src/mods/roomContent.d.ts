import { type PalettePatch } from "../theme";
import type { AssetTarget } from "./assets";
import type { ModTextDoc } from "../text/modText";
import { type BalancePatch } from "./balancePatch";
import { type ModContent } from "./content";
import { type RoomPanel } from "./panels";
/** The file types a Reskin may ship, found by their first bytes and never by their extension. */
export type AssetType = "m4a" | "mp3" | "wav" | "png" | "webp";
export declare const ASSET_MIME: Record<AssetType, string>;
export declare function isAssetType(v: unknown): v is AssetType;
export interface RoomContentAsset {
    /** sha256 of the file, lower-case hex: the file is served at /mods/asset/<hash>. */
    hash: string;
    size: number;
    type: AssetType;
    /** Which client downloads it. */
    target: AssetTarget;
}
export interface RoomContent {
    v: 1;
    /** Logical Asset path -> the file that stands in for it. Read it as a Map (parseRoomContent): the keys are not ours. */
    assets: Record<string, RoomContentAsset>;
    palettes: PalettePatch;
    /** The Mods' merged balance patch (step 4): a nested partial of the balance table. Absent when no Mod tunes anything. */
    balance?: BalancePatch;
    /** The Mods' new content (step 5): personas, anomalies, quests, enemy classes and hulls, merged in Load Order. Absent when no Mod adds any. */
    content?: ModContent;
    /** The Mods' text (step 5): language tag -> Text Key -> text. Absent when no Mod ships any. */
    text?: ModTextDoc;
    /** The Mods' Mod Panels (step 7): the HTML pages, inline. Absent when no Mod ships any. */
    panels?: RoomPanel[];
}
/** What a client keeps of a fetched document. */
export interface ParsedRoomContent {
    assets: Map<string, RoomContentAsset>;
    palettes: PalettePatch;
    /** Only numbers the game has, within their bounds: the host is checked again here (docs/MODS-PLAN.md D7). */
    balance: BalancePatch;
    /** The content that passed the same checks the host ran, with every dangling reference dropped. */
    content: ModContent;
    /** The Mod text that passed the same checks the host ran. */
    text: ModTextDoc;
    /** The Mod Panels that passed the same checks the host ran. */
    panels: RoomPanel[];
}
/**
 * Check a fetched document. It came from the host, which is trusted no further than any other network input: every
 * field is checked, entries that do not fit are skipped, and nothing is looked up by a key we did not check.
 * Null when it is not a Room Content document at all.
 */
export declare function parseRoomContent(json: unknown): ParsedRoomContent | null;
/** `ws://host:2567` -> `http://host:2567`, `wss://` -> `https://`: the HTTP face of the endpoint the socket connected to. */
export declare function httpBaseFromWs(endpoint: string): string | null;
/** The slice of fetch's Response the client uses. */
export interface RcResponse {
    ok: boolean;
    status: number;
    json(): Promise<unknown>;
    blob(): Promise<unknown>;
}
export interface RoomContentDeps {
    fetch(url: string, init: {
        signal: AbortSignal;
    }): Promise<RcResponse>;
    createObjectURL(blob: unknown): string;
    revokeObjectURL(url: string): void;
    /** Resolves after `ms`, or early when `signal` aborts. */
    sleep(ms: number, signal: AbortSignal): Promise<void>;
    /** Run `fn` after `ms` (the deferred revoke of an old object URL). */
    later(fn: () => void, ms: number): void;
}
export interface RoomContentProgress {
    hash: string;
    done: number;
    total: number;
}
export interface RoomContentClientOptions {
    /** Which client this is: it downloads only the assets whose target names it. */
    target: "terminal" | "viewport";
    deps: RoomContentDeps;
    /** Called with every change in progress, ending with done == total once the content is applied. */
    onProgress?: (p: RoomContentProgress) => void;
    /** Called after the files (sounds, music, portraits) have been applied or cleared, so the page can repaint. */
    onApplied?: (hasContent: boolean) => void;
    /**
     * Called after the colours and the balance table have changed (applied, replaced or cleared): the numbers and colours
     * the page baked in are stale. They apply as soon as the document is in, before any file (docs/MODS-PLAN.md D5), so a
     * device that never gets its files, or is left behind by LAUNCH ANYWAY, still plays the room's numbers.
     */
    onContentChanged?: () => void;
    /** A warning for a file that could not be fetched. */
    warn?: (msg: string) => void;
    /** Waits between the 3 attempts at one file. */
    retryDelaysMs?: readonly number[];
    /** One attempt at the Room Content document, headers and body, is given up on after this long. */
    documentTimeoutMs?: number;
    /** Waits between rounds of attempts at the document, which is tried for as long as the room wants it; the last delay repeats. */
    documentRetryDelaysMs?: readonly number[];
    /** One attempt at a file, headers and body: a hung download must not hold a late joiner's seat grid forever. */
    fileTimeoutMs?: number;
    concurrency?: number;
    /** How long an old object URL stays valid after it is replaced (audio already playing from it keeps going). */
    revokeDelayMs?: number;
}
export declare class RoomContentClient {
    private readonly o;
    private base;
    /** The hash whose content is applied, files included. "" = none. */
    private applied;
    /** The hash whose document is applied (colours and balance), which comes before its files. "" = none. */
    private tablesHash;
    /** Does the applied document change any colour or number? */
    private tablesLive;
    private appliedTotal;
    /** The hash a run is working on. */
    private running;
    private abort;
    /** Files already fetched, by hash -> object URL. Survives a newer hash so a reorder re-downloads nothing. */
    private readonly held;
    /** Files of the applied hash that could not be fetched: a later onHash for the same hash tries them again. */
    private failed;
    private disposed;
    constructor(o: RoomContentClientOptions);
    /** The origin of the game port this client talks to, as http(s). Set it before onHash. */
    setBase(base: string): void;
    /**
     * meta.contentHash changed (or the client connected). "" clears. A hash already applied, or already being fetched,
     * does nothing: a plain state patch must not start anything or report, or a device would send a report per patch.
     * `retryFailed` is for a NEW Room (the phone came back from a lock or a drop): the device says again that it is ready,
     * tries once more the files it could not get, and restarts a run that was in flight, since its connections may be dead.
     */
    onHash(hash: string, retryFailed?: boolean): void;
    /** Drop everything: stock files and shipped colours again. A room was left, or no Mod applies any more. */
    clear(): void;
    dispose(): void;
    private urlFor;
    /**
     * One attempt: fetch, then `read` the body, all under one timeout, so a stalled connection ends in a retry instead of
     * hanging for good. Up to 1 + retryDelays attempts. Null when every one failed or the run was aborted.
     */
    private get;
    private run;
    /** Apply the document's colours and balance (the same hash is the same document, so it is applied once). */
    private applyTables;
    /** Apply all the files at once: no page ever sees half a Reskin. */
    private finish;
    /** Forget the held files the applied overrides no longer use. Their URLs stay valid a while: something may be playing from one. */
    private releaseExcept;
}
