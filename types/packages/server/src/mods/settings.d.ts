/** The host's saved Load Order and switched-off Mods (ids). Ids that are no longer installed are kept: they come back with the Mod. */
export interface ModsSettings {
    order: string[];
    disabled: string[];
    /**
     * The Code Mods the host approved (mods step 6b), by Mod id. A folder Mod is approved once, whatever its code; a Workshop Mod
     * only for this exact code hash. Absent = nothing approved. Only the desktop app (or a hand edit, on a server with no app) writes it.
     */
    approved?: Record<string, ApprovedMod>;
}
/** One approval: the code hash that was shown to the host, and where the Mod was found. */
export interface ApprovedMod {
    hash: string;
    source: "folder" | "workshop";
    /** For a Workshop approval: the Steam item (digits) that was approved. Another item that uses the same Mod id is not an update of it. */
    workshopId?: string;
}
export interface Settings {
    /** Pack id; null = English chosen on purpose; undefined = never chosen. */
    language?: string | null;
    /** Hide the room code, QR and addresses on screen. Only ever read back as `true`. */
    streamerMode?: boolean;
    /** Load Order and switched-off Mods. Absent = never touched. */
    mods?: ModsSettings;
}
/** Read the settings. A missing or unusable file reads as "nothing chosen" (never throws). */
export declare function readSettings(): Settings;
/**
 * Persist the settings (mkdir + temp-write + rename). Keys present in `s` replace the stored ones; keys it
 * leaves undefined keep whatever the file holds (`streamerMode: false` stores nothing: off is the default).
 * Throws on I/O failure; the caller decides how loud to be.
 */
export declare function writeSettings(s: Settings): void;
