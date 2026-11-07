import type { PackManifest, PackReport, PluralForms, ResolverPack, TextPackWire } from "@scc/shared/text";
import type { TextStr } from "@scc/shared/text/ref";
import type { ModManifest } from "./manifest";
import { type ScanOptions } from "./packs";
import type { ScannedBalance } from "./balance";
import type { ScannedContent, ScannedText } from "./modContent";
import type { ScannedPanels } from "./modPanels";
import type { ScannedReskin } from "./reskin";
import type { ScannedCode } from "./codeCopy";
export { dataDir, modsDir } from "./paths";
export { setWorkshopProvider, type WorkshopItem, type WorkshopProvider } from "./sources";
export { readSettings } from "./settings";
/**
 * One sub-folder of the mods folder, scanned. A broken pack is listed with its errors, never thrown.
 *
 * Identity rules (the scanner enforces them; PackInfo mirrors them):
 * - Folders are visited in case-sensitive name order. The FIRST folder whose pack is USABLE (ok) claims its
 *   manifest id and wins; a later folder with the same id is listed with `report.ok = false` and a
 *   `log.mods.problem.duplicateId` ({id}, {folder} = the winner's folder name). A broken folder never claims
 *   an id, so it cannot lock out a later good pack that uses it.
 * - A folder with no usable manifest has PackInfo.id = "folder:<dirname>" and ok = false.
 * - Only ok packs are selectable: `setLanguage` accepts a pack id only when its PackInfo is ok.
 * - A pack whose encoded wire does not fit (packWireSize(wire).fits === false: over MAX_PAYLOAD_CHARS or
 *   MAX_CHUNKS) is unusable with `log.mods.problem.packTooBig`. The scanner's per-file caps (text <= 4 MiB,
 *   font <= 2 MiB) are pre-checks that keep a normal pack under that limit; the wire size is the real test.
 * - Scanner-found errors (flatten, file, font, duplicate id, too big) go in via validatePack's
 *   `extraErrors`; the scanner then sets `report.ok = false` for the fatal ones.
 */
export interface ScannedPack {
    /** Absolute path of the pack folder. */
    dir: string;
    /** The checker's verdict; `report.manifest` is null when pack.json was unusable. */
    report: PackReport;
    /** The wire to ship (texts + minted font family), or null when the pack is not usable. */
    wire: TextPackWire | null;
    /**
     * What the checker was given, kept so the pack can be checked again when the Mods' text changes (a pack may cover a Mod's
     * keys): its merged entries, the scanner's own problem lines and the font. Absent on a pack that never got that far.
     */
    recheck?: {
        texts: ReadonlyMap<string, string | PluralForms>;
        extra: readonly TextStr[];
        font?: {
            format: "woff2" | "truetype";
            data: string;
        };
    };
}
/**
 * One sub-folder of the mods folder, as a Mod. A legacy pack.json folder is a Mod whose only Contribution is its
 * language; a folder with a mod.json is a Mod with whatever it declares. Identity follows the ScannedPack rules
 * above, across both formats: one id namespace, the first USABLE folder in name order claims an id.
 */
export interface ScannedMod {
    /** Absolute path of the Mod folder. */
    dir: string;
    /** The folder's name. */
    folder: string;
    format: "mod" | "legacy";
    /** The checked mod.json; null for a legacy folder and for a mod.json that could not be used. */
    manifest: ModManifest | null;
    /** The Mod's id when `usable`, else `folder:<dirname>`. */
    id: string;
    /** Manifest valid and every Contribution this version supports loaded (and the id is not a duplicate). */
    usable: boolean;
    /** The Contribution kinds the manifest declares, supported or not ("language" for a legacy folder). */
    kinds: string[];
    /** The Mod contributes a language and nothing else: it lives in the LANGUAGE row, not the Mods list. */
    languageOnly: boolean;
    /** Mod-level problems: an unusable mod.json, a duplicate id, a Contribution this version cannot use yet. */
    problems: TextStr[];
    /** The language Contribution, scanned like a pack.json folder; null when the Mod has none. */
    pack: ScannedPack | null;
    /** The reskin Contribution's replacement files that passed the checks; null when the Mod has none. Its palettes are in `manifest.reskin`. */
    reskin: ScannedReskin | null;
    /** The balance Contribution's patch, already checked against the stock table; null when the Mod has none or its file could not be used. */
    balance: ScannedBalance | null;
    /** The text Contribution: the Mod's own Text Keys by language (`en` is required for content to use any); null when it has none or nothing in it could be used. */
    text: ScannedText | null;
    /** The content Contribution: personas, anomalies, quests, enemies and hulls that passed, and the portraits personas name; null when it has none or nothing in it could be used. */
    content: ScannedContent | null;
    /** The panels Contribution (step 7): the HTML pages that passed, inline; null when the Mod has none or none could be read. */
    panels: ScannedPanels | null;
    /** The code Contribution's private copy and its hash (step 6b); null when the Mod has none, or when the scan was not asked to copy code (`ScanOptions.codeOwner`). Never run before the host approves it. */
    code: ScannedCode | null;
    /** Where it was found: the mods folder, or a Steam Workshop item the player is subscribed to. */
    source: "folder" | "workshop";
    /** The Workshop item id (digits) for `source === "workshop"`, else "". A Workshop Mod that cannot be used has id `workshop:<id>`. */
    workshopId: string;
    /** A Workshop item Steam has not finished fetching: there is no folder to read yet, so it is an inert placeholder (`dir` is ""). */
    downloading: boolean;
}
/** What the active pack looks like to a resolver (the Electron main process applies it to its own). */
export type ActivePack = ResolverPack;
export type { PackManifest, PackReport, TextPackWire };
/**
 * The language packs in every sub-folder of `dir` (async fs; skips names starting with `_` or `.` and symlinked
 * folders): legacy pack.json folders as before, plus the language Contribution of any Mod, and the same from installed
 * Workshop items (through the provider the desktop app installs). Never rejects.
 */
export declare function scanPacks(dir: string): Promise<ScannedPack[]>;
/**
 * Every sub-folder of `dir` as a Mod (legacy pack.json folders included), then the installed Workshop items in
 * workshopId order, in the same id namespace: a folder copy of an id beats a Workshop copy (a modder's working
 * copy wins). Never rejects.
 */
export declare function scanMods(dir: string, opts?: ScanOptions): Promise<ScannedMod[]>;
/** BridgeRoom calls this whenever its active pack changes (null = English). Not part of the shell's API. */
export declare function publishActivePack(pack: ActivePack | null): void;
/**
 * Subscribe to changes of the room's active pack (null = English). The current value is replayed to the new
 * subscriber immediately (synchronously, before this returns), so a late subscriber such as the Electron
 * main process never misses a pack that was chosen earlier. Returns the unsubscribe function.
 */
export declare function onActivePackChange(cb: (pack: ActivePack | null) => void): () => void;
/**
 * The pack this machine would host with, resolved WITHOUT starting a room: reads settings.json from dataDir(),
 * scans modsDir() and applies the same rule as the room (the host's switches and Load Order, then persisted
 * choice, else SCC_DEFAULT_LANGUAGE, else English). null = English. A remote guest (no embedded server) uses it for its own dialogs. Never rejects: any
 * failure reads as English. Importing this module starts nothing (no server, no ports).
 */
export declare function loadChosenPack(): Promise<ResolverPack | null>;
