export interface MetaProfile {
    banked: number;
    unlocks: string[];
    /** Ossari ARCHIVE FRAGMENTS recovered across runs (THE VOID campaign meta
     * currency — lore + story-gated unlocks). OPTIONAL on disk for back-compat:
     * a pre-Void profile loads as 0 fragments. */
    fragments: number;
}
/** Load a profile (zeroed defaults when unknown; missing fragments = 0). */
export declare function loadProfile(profileId: string): MetaProfile;
/** Persist a profile (mkdir + full-file rewrite; the store is tiny). Temp-write
 * + rename like runStore, so a crashed PROCESS can never publish a torn
 * meta.json — every profile rides on this one file. (No fsync, so a host/power
 * loss can still lose the tail; runStore makes the same trade.) The temp name
 * carries the pid: two servers sharing a data dir must not write through one
 * scratch path, which would publish each other's half-written buffers. */
export declare function saveProfile(profileId: string, profile: MetaProfile): void;
