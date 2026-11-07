/** Up to four numeric parts, or null. */
export declare function parseVersion(v: unknown): number[] | null;
/** Is `modVersion` older than `gameVersion`? false when either is not a version we can read. */
export declare function isOlderGame(modVersion: unknown, gameVersion: unknown): boolean;
