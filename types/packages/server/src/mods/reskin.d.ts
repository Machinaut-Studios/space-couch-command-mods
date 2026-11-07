import { type AssetKind, type AssetTarget, type AssetType } from "@scc/shared";
import { type TextStr } from "@scc/shared/text/ref";
import type { ReskinContribution } from "./manifest";
/** Largest file per kind of game file: a cue is a second or two, a track is minutes, a portrait is a small picture. */
export declare const ASSET_CAPS: Record<AssetKind, number>;
/** Largest picture side, read from the file's own header. */
export declare const MAX_IMAGE_SIDE = 2048;
export interface Sniffed {
    type: AssetType;
    /** Pictures only. */
    width?: number;
    height?: number;
}
/** What `head` (the first bytes of a file) is, by its magic bytes. Null for anything else, whatever the file is called. */
export declare function sniffAsset(head: Uint8Array): Sniffed | null;
/** Is this sniffed file an allowed replacement for a game file of `kind`? (type, and for pictures the side lengths) */
export declare function acceptable(kind: AssetKind, sniffed: Sniffed | null): sniffed is Sniffed;
/** One replacement file that passed the checks, ready to be copied when the Mod is switched on. */
export interface ScannedAsset {
    logical: string;
    /** Absolute path of the file in the Mod folder. */
    file: string;
    /** realpath of the Mod folder: the file must still be read from inside it. */
    realDir: string;
    size: number;
    /** Modification time at the scan: with the size, it tells a rebuild whether the file changed. */
    mtimeMs: number;
    type: AssetType;
    kind: AssetKind;
    target: AssetTarget;
}
export interface ScannedReskin {
    assets: ScannedAsset[];
}
/** Judge the files a reskin names. `dir` is the Mod folder and `realDir` its realpath. Never throws. */
export declare function scanReskin(dir: string, realDir: string, c: ReskinContribution): Promise<{
    reskin: ScannedReskin;
    problems: TextStr[];
}>;
