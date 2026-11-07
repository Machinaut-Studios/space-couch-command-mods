/** Which client loads the file. A client only downloads the overrides that name it. */
export type AssetTarget = "terminal" | "viewport" | "both";
/** What kind of file a Mod may put in its place: decides the format and the size cap. */
export type AssetKind = "sfx" | "music" | "image";
export interface LogicalAsset {
    /** "sfx/ui-press-1.m4a": the stock path without the leading slash. */
    path: string;
    target: AssetTarget;
    kind: AssetKind;
}
/**
 * The viewscreen's music tracks, by file name. The viewport's TRACKS table adds titles and packs on top; a test
 * there keeps the two in step. Music is viewport only: phones never play it.
 */
export declare const MUSIC_FILES: readonly string[];
/** Captain portraits: the craftpix ids "1".."40" that ship (there is no 9) and the beacon. */
export declare const AVATAR_IDS: readonly string[];
/**
 * The avatar id of a captain a Mod adds: `mod.<modId>.<name>`. Its portrait is served at the Logical Asset
 * `avatars/mod.<modId>.<name>.png`, so the clients draw it the way they draw the stock ones (assetUrl, with the Room's file).
 */
export declare const MOD_AVATAR_RE: RegExp;
/** Every Logical Asset, in a stable order. Built once. */
export declare function logicalAssets(): readonly LogicalAsset[];
/** The Logical Asset at `path`, or undefined. An own-key lookup: a path like "constructor" is simply unknown. A Mod's portrait (`avatars/mod.<id>.<name>.png`) is a Logical Asset too. */
export declare function logicalAsset(path: string): LogicalAsset | undefined;
