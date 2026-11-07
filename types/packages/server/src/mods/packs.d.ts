import type { ScannedMod, ScannedPack } from "./index";
export interface ScanOptions {
    /**
     * Demo build rule: a Mod with any Contribution but a language is not usable. Asked when each Mod is judged,
     * which is after the scan's first await, so a room that sets its demo flag right after it starts the scan
     * (BridgeRoom.onCreate) is still seen. Default: not a demo.
     */
    demo?: () => boolean;
    /**
     * The room asking. Only a scan with an owner copies a Code Mod into the private cache (and hashes the copy): a scan for the
     * app's own dialogs or for PUBLISH has no use for it. The owner holds the copy until it lets go (codeCopy.ts).
     */
    codeOwner?: object;
}
/** The text files of one pack may total this many bytes (a normal pack stays far below it). */
export declare const MAX_TEXT_BYTES: number;
/** A pack font may be this big. */
export declare const MAX_FONT_BYTES: number;
/** The font format when `b` starts with font magic bytes: wOF2, 00 01 00 00, "true" or "OTTO". */
export declare function fontFormat(b: Uint8Array): "woff2" | "truetype" | null;
/**
 * Scan every sub-folder of `dir` (skips names starting with `_` or `.`, files and symlinked folders), then every
 * installed Workshop item in workshopId order. Never rejects.
 */
export declare function scanModsIn(dir: string, opts?: ScanOptions): Promise<ScannedMod[]>;
/**
 * The language packs found in `dir`: every legacy pack.json folder and every Mod with a language Contribution,
 * unfiltered (the host's switches and Load Order are applied by the caller). Never rejects.
 */
export declare function scanPacksIn(dir: string, opts?: ScanOptions): Promise<ScannedPack[]>;
