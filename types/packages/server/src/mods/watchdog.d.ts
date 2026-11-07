export declare const WATCHDOG_POLL_MS = 250;
export declare const WATCHDOG_LIMIT_MS = 5000;
export interface WatchdogTarget {
    id: string;
    name: string;
}
export interface Watchdog {
    /** The main thread is alive. */
    beat(): void;
    /** A Mod's code is about to run (index into the list last given; -1 = none). Returns what to put back afterwards. */
    mark(index: number): number;
    /** The Code Mods that are active, in order. */
    setTargets(list: readonly WatchdogTarget[]): void;
    stop(): void;
}
/** Start the watchdog, or null when it must not run (an inspector is attached). */
export declare function startWatchdog(crashPath: string, targets: readonly WatchdogTarget[], opts?: {
    pollMs?: number;
    limitMs?: number;
}): Watchdog | null;
