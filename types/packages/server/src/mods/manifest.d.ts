import { type Palette, type PanelTarget, type ThemeName } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
/**
 * The Contribution kinds this game version can apply. Any other key in `contributes` is kept in the Mod's
 * kinds and reported as a warning, never an error: a Mod made for a later version still lists and loads
 * whatever it has that we do understand. Later steps add names here.
 */
export declare const SUPPORTED_CONTRIBUTIONS: readonly string[];
/** The folder a language Contribution reads its text from when the manifest does not say. */
export declare const DEFAULT_LANGUAGE_DIR = "language";
/** The longest Contribution kind shown or quoted back: the name is the modder's, so it is cut here, not trusted. */
export declare const MAX_KIND_LEN = 32;
/** The longest `description` kept, in characters. The Workshop takes 8000 BYTES; the publisher cuts to that on a character boundary. */
export declare const MAX_DESCRIPTION_CHARS = 8000;
export interface LanguageContribution {
    /** BCP 47 tag, as pack.json `language`. */
    tag: string;
    /** A single plain folder name inside the Mod folder. */
    dir: string;
    font?: string;
    sourceHashes?: Record<string, string>;
}
/** One replaced game file: the Logical Asset (known to the game) and the Mod's file, a clean relative path. */
export interface ReskinAsset {
    logical: string;
    file: string;
}
export interface ReskinContribution {
    /** In the order the manifest lists them; only paths the game has, with a relative path that cannot climb. */
    assets: ReskinAsset[];
    /** Recoloured slots per theme; values are lower-case #rrggbb. */
    palettes: Map<ThemeName, Map<keyof Palette, string>>;
    /** Entries that were dropped, as problem lines (capped). The Mod is still usable. */
    warnings: TextStr[];
}
/** One entry of `contributes.panels` (a Mod Panel): an HTML page, shown on the clients named in `on`. */
export interface PanelDecl {
    id: string;
    /** A Text Key for the panel's title: one of the Mod's own or one of the game's. Whether it exists is decided at scan time. */
    titleKey: string;
    /** The Mod-relative `.html` file. */
    file: string;
    on: PanelTarget[];
}
export interface ModManifest {
    id: string;
    name: string;
    version: string;
    author?: string;
    gameVersion?: string;
    /** Free text for the Workshop page when the Mod is published (optional; cut to MAX_DESCRIPTION_CHARS). */
    description?: string;
    requires: string[];
    loadAfter: string[];
    loadBefore: string[];
    /** Every key of `contributes`, in the order the file lists them (supported or not). */
    kinds: string[];
    language?: LanguageContribution;
    reskin?: ReskinContribution;
    /** The Mod-relative file of a balance Contribution (`contributes.balance`). Whether it can be read and what in it is kept is decided at scan time. */
    balance?: string;
    /** The folder of `<language>.json` files holding the Mod's own Text Keys (`contributes.text`). Read at scan time. */
    text?: string;
    /** The Mod-relative file of a content Contribution (`contributes.content`): personas, anomalies, quests, enemies and hulls. Read at scan time. */
    content?: string;
    /** The Mod-relative file of a code Contribution (`contributes.code`): an ES module that exports `activate(game)`. Never run before the host approves it. */
    code?: string;
    /** The Mod Panels (`contributes.panels`): HTML pages shown in a sandboxed frame. Read at scan time. */
    panels?: PanelDecl[];
}
/** A language folder is one plain name: no separators, nothing that climbs or means "here". */
export declare function isPlainDirName(s: unknown): s is string;
/**
 * A file named inside the Mod: relative, forward slashes, sub-folders allowed, nothing that climbs or means "here".
 * Whether it really lies inside the folder is checked again, link by link, when it is read.
 */
export declare function isSafeRelPath(s: unknown): s is string;
/** Check and normalise a `mod.json` object. Unknown fields are ignored. */
export declare function parseModManifest(input: unknown): {
    manifest: ModManifest | null;
    errors: TextStr[];
};
/** The pack.json-shaped input for the Mod's language Contribution, for the Language Pack path (same id as the Mod). */
export declare function languagePackInput(m: ModManifest): Record<string, unknown>;
