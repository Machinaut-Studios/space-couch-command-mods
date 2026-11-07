import { type BalancePatch, type ModContent } from "@scc/shared";
import type { BridgeRoom } from "../rooms/BridgeRoom";
import type { GameApi, Json, ModClient, ModEventName, ModEvents } from "./api";
/** One Code Mod as the room asks for it: approved, switched on, in Load Order. */
export interface CodeModSpec {
    id: string;
    name: string;
    version: string;
    /** The hash of the private copy: a Mod is loaded once per hash. */
    hash: string;
    /** The private copy's folder, and the entry file inside it. */
    dir: string;
    main: string;
    gameVersion?: string;
}
export declare const EXIT_CODE_RESTART = 75;
export declare const EXIT_CODE_MOD_CRASH = 70;
/** `activate` may be async; this long, then the Mod counts as crashed. */
export declare const ACTIVATE_LIMIT_MS = 10000;
/** What `save.set` accepts per Mod. */
export declare const MAX_SAVE_BYTES: number;
/** Messages a client may send a Code Mod: this many a second. */
export declare const MESSAGE_RATE_PER_SEC = 20;
/** The number of listeners per event. BridgeRoom reads this at every hook point, so it is a plain object of numbers. */
export declare const hookCounts: Record<ModEventName, number>;
interface Running {
    spec: CodeModSpec;
    index: number;
    crashed: boolean;
    patch: BalancePatch;
    api: GameApi | null;
}
interface MessageListener {
    mod: Running;
    fn: (payload: Json, from: ModClient) => unknown;
}
/** How the process leaves. serverProcess.ts installs one that tells the app why first. */
export interface ExitControl {
    /** Never returns in production. `kind` and `detail` are for the log and the supervisor. */
    exit(code: number, kind: string, detail: string): void;
    /** Is a supervisor going to restart us? (Without one, a restart request is only logged.) */
    readonly supervised: boolean;
}
export interface CrashFile {
    mods: Array<{
        id: string;
        name: string;
    }>;
    reason: string;
    at: string;
}
declare class CodeModHost {
    private running;
    private readonly listeners;
    private readonly messageListeners;
    private readonly rooms;
    private control;
    private watchdog;
    private watchdogTried;
    private chain;
    /** The Mod whose activate() is running: patchBalance is allowed for it. */
    private activating;
    private activations;
    private current;
    private crashing;
    private restartTimer;
    private lastDesired;
    /** How long a restart waits for the host to change their mind (tests make it short). */
    restartDelayMs: number;
    /** How long `activate` may take (tests make it short). */
    activateLimitMs: number;
    private patchDirty;
    private noticeText;
    private recovered;
    private readonly rate;
    /** How the process leaves; the default is process.exit. */
    setExitControl(c: ExitControl | null): void;
    /** The Code Mods running, in the order they were activated. */
    get active(): readonly CodeModSpec[];
    /** Is anything being activated right now? LAUNCH waits for it. */
    get busy(): boolean;
    /** The room that is running now (the newest that has not been disposed). Throws when there is none. */
    get currentRoom(): BridgeRoom;
    /**
     * The room a call from a Mod is about: the room whose event or message is being handled, else the newest room. With none (a timer
     * that fires between rooms) the call is dropped with a log line, so a late timer never crashes the Mod.
     */
    roomFor(modId: string, what: string): BridgeRoom | null;
    /** The room of the event or message being handled. */
    private hookRoom;
    private inRoom;
    /** A room was created: Mods already loaded hear `roomCreated` for it. */
    roomCreated(room: BridgeRoom): void;
    roomLeft(room: BridgeRoom): void;
    /**
     * Read and delete <data>/mod-crash.json, switch the Mods it names off and remember the notice the lobby shows. Once per process,
     * before the first scan. The watchdog only writes the file; this is where the host's settings change.
     */
    recoverFromCrash(): void;
    /** The host started a run: the notice has been seen. */
    dismissNotice(): void;
    /**
     * Make the Code Mods running match `desired` (approved, on, in Load Order). New ones at the end are activated; anything else that
     * differs cannot be undone in this process, so a restart is asked for. Serialised: one sync at a time. Never rejects.
     */
    sync(desired: readonly CodeModSpec[], current?: () => boolean): Promise<"ok" | "restart">;
    /** Does the running list differ from `desired` in a way only a restart can fix? */
    mismatch(desired?: readonly CodeModSpec[]): boolean;
    private prefixLength;
    private doSync;
    private syncWatchdogTargets;
    private startWatchdogOnce;
    private activate;
    private requestRestart;
    private tell;
    private restartNow;
    /** A Mod threw, hung in activate, or an error was traced to it: write the crash file and leave with code 70. */
    crash(mods: readonly Running[], err: unknown): void;
    private writeCrash;
    /**
     * The process is dying of an error nobody caught (serverProcess.ts, before it exits). With Code Mods active this counts as a Mod
     * crash: the Mod whose private copy is in the stack, else the Mod that was running, else every active Code Mod.
     */
    attributeFatal(err: unknown): boolean;
    private silence;
    /** Run `fn` as Mod `mod`: marked for the watchdog, and an exception is a crash. Returns false when it threw. */
    runGuarded(mod: Running, what: string, fn: () => unknown): boolean;
    /** The async form for load and activate: the exception goes to the caller, which owns the crash. */
    runGuardedAsync<T>(mod: Running, fn: () => T | Promise<T>): Promise<T>;
    beat(): void;
    addListener(mod: Running, event: ModEventName, fn: (e: never) => unknown): () => void;
    emit<K extends ModEventName>(event: K, payload: ModEvents[K]): void;
    /** Deliver a Mod's activation event for rooms that already exist (a Mod that loads after the room was created). */
    replayRoomCreated(mod: Running): void;
    /** The code patches in Load Order, for the Room Content plan (after every Mod's balance file). */
    patches(): Array<{
        id: string;
        name: string;
        patch: BalancePatch;
    }>;
    patchBalance(mod: Running, partial: unknown, applied: ModContent | null | undefined, lobby: boolean): void;
    /** Has a patch changed since the rooms last planned? (Reading it clears it.) */
    takeDirty(): boolean;
    private flushPatches;
    get hasMessageListeners(): boolean;
    addMessageListener(mod: Running, fn: MessageListener["fn"]): () => void;
    /** A client's `modMessage` intent. Dropped when no Mod listens, when the client is over its rate, or when the payload is not JSON under 16 KiB. */
    deliverMessage(from: ModClient, modId: unknown, payload: unknown, now?: number): boolean;
    /** Forget everything (tests). Does not undo what a Mod did to the game. */
    resetForTests(): void;
}
export declare const codeMods: CodeModHost;
/** Fire an event at the Mods listening to it. BridgeRoom checks `hookCounts[event]` first, so this is only reached when someone listens. */
export declare function fireHook<K extends ModEventName>(event: K, payload: ModEvents[K]): void;
/** modRuntime tells this module how to read the applied content and whether every room is in the lobby (no import cycle). */
export declare function bindRuntime(content: () => ModContent | null | undefined, inLobby: () => boolean): void;
export {};
