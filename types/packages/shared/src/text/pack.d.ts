import { type TextStr } from "./ref";
import type { Intent } from "../intents";
import type { ResolverPack } from "./resolve";
import { type PluralForms } from "./types";
/** `id`: lower-case, doubles as the folder-safe name and the font family suffix. */
export declare const PACK_ID_RE: RegExp;
/** Does this text carry `<tag>` or `&entity;` markup? (Neither is ever drawn as markup; both are dropped.) */
export declare const hasMarkup: (s: string) => boolean;
/** PackInfo.lines holds at most this many problem lines. */
export declare const PACK_INFO_MAX_LINES = 20;
/** A hail node line may run to this multiple of its English length before the checker warns. */
export declare const HAIL_LENGTH_FACTOR = 1.3;
/** Every Text Key a Mod adds starts with this (then the Mod's id and a dot). */
export declare const MOD_KEY_PREFIX = "mod.";
export interface PackManifest {
    id: string;
    /** BCP 47 tag (also the plural-rule locale). */
    language: string;
    name: string;
    version: string;
    author?: string;
    gameVersion?: string;
    /** File name (no path) of a `.woff2` / `.ttf` in the pack folder; the server validates the file itself. */
    font?: string;
    /** Text Key -> `hashEnglish` of the English the entry was translated from (stale detection). */
    sourceHashes?: Record<string, string>;
}
export type PackTexts = Map<string, string | PluralForms>;
/** The CSS family a pack's font is registered under. Minted here from the id: modder input never reaches CSS. */
export declare const packFontFamily: (id: string) => string;
/** `pack.json: {field} is missing or invalid`. */
export declare const manifestProblem: (field: string) => TextStr;
/**
 * Nested pack JSON -> dotted Text Key -> text. A key starting with `_` is a comment and is ignored at
 * every level (before plural detection, so a `_note` beside `one`/`other` is harmless). An object whose
 * remaining keys are all CLDR plural categories is a plural object (it needs `other`). A key may also
 * contain dots literally (`"a.b": "..."`). A key defined twice is an error and the first definition
 * wins. An empty string means "not translated" and is skipped silently.
 */
export declare function flattenPackTexts(json: unknown): {
    texts: PackTexts;
    errors: TextStr[];
};
export interface PackReport {
    /** False only for manifest errors or zero usable entries. */
    ok: boolean;
    /** 0..1: usable entries over catalog keys. */
    coverage: number;
    /** Catalog keys with no usable entry (they show in English). */
    missing: string[];
    /** Pack keys the catalog does not have (ignored). */
    unknown: string[];
    /** Entries whose `sourceHashes` differs from the current English (kept). */
    stale: string[];
    /** Entries that add a placeholder English does not have (dropped). */
    placeholderMismatch: string[];
    /** Entries that leave out a placeholder English has (kept, warning). */
    placeholderOmitted: string[];
    /** Plural objects missing a category the language's rules can select (kept; only checked when Intl exists). */
    pluralGaps: string[];
    /** Entries over the catalog's `maxChars` (kept, warning). */
    tooLong: string[];
    /** Entries containing `<tag>` / `&entity;` markup (dropped). */
    markup: string[];
    /** Hail node lines over 1.3x their English (kept, warning). */
    hailTooLong: string[];
    /** Manifest and file-level errors, as problem-line refs. */
    errors: TextStr[];
    /** The normalised manifest, or null when it was invalid. */
    manifest: PackManifest | null;
    /** The entries that survived every drop rule: what the wire carries and setPack installs. */
    usable: PackTexts;
}
export interface ValidateOptions {
    /** The catalog to check against (default: the shipped CATALOG). */
    catalog?: object;
    /** Reserved for deterministic tests; unused by the current rules. */
    now?: number;
    /** Errors the scanner found around the pack (flatten, file, font, duplicate-id, too-big): merged into
     * `report.errors` after the manifest errors. They do not change `ok`; the scanner sets `report.ok = false`
     * itself for the ones that make a pack unusable (duplicate id, too big). */
    extraErrors?: readonly TextStr[];
}
/** `s` with its control and bidirectional-control characters taken out: for any text of a Mod or pack that the game shows as written. */
export declare function cleanDisplayText(s: string): string;
/** Check and normalise a `pack.json` object. Unknown fields are ignored. */
export declare function parseManifest(input: unknown): {
    manifest: PackManifest | null;
    errors: TextStr[];
};
/**
 * Check a pack against the catalog. Drops (never loads): unknown keys, markup, entries that add a
 * placeholder. Warns but keeps: omitted placeholders, plural gaps, over-long text, hail lines over
 * 1.3x, stale entries. `texts` is what flattenPackTexts (plus the merge of every file) produced.
 */
export declare function validatePack(manifestInput: unknown, texts: ReadonlyMap<string, string | PluralForms>, opts?: ValidateOptions): PackReport;
/** How many problem lines packProblemLines would produce (the PackInfo.problems count). */
export declare function packProblemCount(r: PackReport): number;
/** The one-line verdict for PackInfo.summary, as a wire ref. */
export declare function packSummary(r: PackReport): TextStr;
/** Every problem as a wire ref with the offending key as a raw param (errors first), capped at `limit`. */
export declare function packProblemLines(r: PackReport, limit?: number, catalog?: object): TextStr[];
export interface TextPackWire {
    id: string;
    language: string;
    name: string;
    /** `packWireHash` of everything below that the client applies; clients verify it before applying. */
    hash: string;
    texts: Record<string, string | PluralForms>;
    font?: {
        family: string;
        format: "woff2" | "truetype";
        data: string;
    };
}
/**
 * The wire hash: FNV-1a 32 (8 hex digits) over the canonical JSON of `{id, language, texts}` (sorted
 * keys, plural forms in CLDR order) plus the font's format, length and hash. The id and language are
 * in it so re-tagging a pack re-applies its plural rules; the display name is not.
 */
export declare function packWireHash(w: Pick<TextPackWire, "id" | "language" | "texts" | "font">): string;
/** Build a wire from a validated pack. The font family is minted here (packFontFamily). */
export declare function buildPackWire(manifest: Pick<PackManifest, "id" | "language" | "name">, usable: ReadonlyMap<string, string | PluralForms>, font?: {
    format: "woff2" | "truetype";
    data: string;
}): TextPackWire;
/** True when `wire.hash` matches its content. */
export declare const verifyPackWire: (wire: TextPackWire) => boolean;
/** The resolver view of a wire (what setPack takes). */
export declare function packFromWire(wire: TextPackWire): ResolverPack;
/** Validate untrusted JSON as a TextPackWire (shape only; the hash is checked separately). */
export declare function parseWire(json: unknown): TextPackWire | null;
/** One `"textPackChunk"` message. */
export interface PackChunk {
    /** The wire's hash: chunks with the same hash belong together. */
    hash: string;
    index: number;
    count: number;
    data: string;
}
/** A chunk's `data` is at most this many UTF-8 bytes (the Steam tunnel has no backpressure). */
export declare const PACK_CHUNK_BYTES: number;
/** The most chunks a client assembles. */
export declare const MAX_CHUNKS = 128;
/** Whole-payload ceiling a client accepts, in UTF-16 units of the wire JSON (a full pack is ~4 MiB text + 2 MiB font).
 * A pack whose encoded wire is over this, or over MAX_CHUNKS chunks, is unusable (packWireSize().fits). */
export declare const MAX_PAYLOAD_CHARS: number;
/** Server side: the wire as JSON, cut into chunks of <= PACK_CHUNK_BYTES UTF-8 bytes (never inside a surrogate pair). */
export declare function encodePackChunks(wire: TextPackWire): PackChunk[];
/** The encoded size of a wire as clients see it: JSON length in UTF-16 units, chunk count, and whether a client
 * will accept it (<= MAX_PAYLOAD_CHARS and <= MAX_CHUNKS). The scanner marks a pack that does not fit as
 * unusable (log.mods.problem.packTooBig). */
export declare function packWireSize(wire: TextPackWire): {
    chars: number;
    chunks: number;
    fits: boolean;
};
export type PackAssembleError = "bad-chunk" | "too-big" | "bad-json" | "bad-shape" | "bad-hash";
/**
 * Client side: feed `"textPackChunk"` payloads in any order. A chunk with a new hash restarts the
 * assembly. When the last chunk arrives it returns the verified wire; anything wrong (a corrupted or
 * malformed chunk, a hash mismatch) sets `lastError`, discards the assembly and returns null, so the
 * caller can ask again (`requestPack`). Never throws.
 */
export declare class PackAssembler {
    private hash;
    private count;
    private parts;
    private got;
    private chars;
    /** Why the last feed() failed, or null. Cleared by the next valid chunk. */
    lastError: PackAssembleError | null;
    /** The hash currently being assembled, or null. */
    get pendingHash(): string | null;
    reset(): void;
    private fail;
    feed(chunk: unknown): TextPackWire | null;
}
/** Decode standard base64 (padding optional) without atob/Buffer. Invalid characters are skipped. */
export declare function base64ToBytes(b64: string): Uint8Array;
export interface PackClientHooks {
    /** Register the pack font (FontFace + document.fonts.add + load). May reject: the pack then applies without it. */
    loadFont(family: string, bytes: Uint8Array, format: "woff2" | "truetype"): Promise<void>;
    /** Send `requestPack` to the room. */
    send(intent: Extract<Intent, {
        t: "requestPack";
    }>): void;
    /** Install the pack (or English, with null) and re-render: setPack + font family + the client's rebuild. */
    apply(pack: ResolverPack | null, fontFamily: string | null): void;
    now?: () => number;
}
/** Minimum gap between two requestPack sends from one client (matches the server's rate limit). */
export declare const PACK_REQUEST_INTERVAL_MS = 5000;
/**
 * The client side of pack delivery. Wire `onChunk` to "textPackChunk", `onClear` to "textPackClear" and
 * `onMetaPackHash(state.meta.packHash)` to every state change. `appliedHash` ("" = English) is what the
 * client really shows; it changes only after setPack and the font load finished (apply-then-rerender), and
 * it is the key to rebuild on, never meta.packHash. When meta.packHash differs from appliedHash and nothing
 * for that hash is in flight, a requestPack is sent (at most one per 5 s); the server answers with the
 * chunks or a clear, which heals reconnects and missed broadcasts. A clear, or a newer pack, that arrives
 * while a font is loading wins over the stale pack (generation guard).
 */
export declare class PackClient {
    private readonly hooks;
    private readonly assembler;
    private generation;
    private applied;
    private loading;
    private lastRequest;
    constructor(hooks: PackClientHooks);
    get appliedHash(): string;
    /** Feed a "textPackChunk" payload. Resolves once the pack is applied (or the chunk was not the last / was superseded). */
    onChunk(msg: unknown): Promise<void>;
    /** "textPackClear": back to English. */
    onClear(): void;
    /** Call with state.meta.packHash on every state change. */
    onMetaPackHash(hash: string): void;
}
