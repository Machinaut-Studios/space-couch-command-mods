import { type ScannedAsset } from "./reskin";
import type { AssetType } from "@scc/shared";
/** `<data>/mod-cache/assets`. Resolved on every call, like the other paths. */
export declare function cacheDir(): string;
export declare const isHash: (s: unknown) => s is string;
export interface StoredAsset {
    hash: string;
    size: number;
    type: AssetType;
}
/** What one room serves right now. */
export interface Published {
    /** The Room Content hash. */
    hash: string;
    /** The Room Content document, as served. */
    json: string;
    /** Every file it names, by hash. */
    files: Map<string, {
        type: AssetType;
        size: number;
    }>;
}
/** Serve `content` for `owner` (null stops serving). Whatever the owner had pending is now covered by it. */
export declare function publishContent(owner: object, content: Published | null): void;
/** Release the owner's claim on files it wrote and then did not publish (the build was overtaken). */
export declare function dropPending(owner: object): void;
/** The document some room is serving under this hash. */
export declare function findContent(hash: string): Published | undefined;
/** The file, if some room's current Room Content names it. */
export declare function findFile(hash: string): {
    type: AssetType;
    size: number;
} | undefined;
/**
 * Copy one scanned file into the cache and say what it is. The file is read again here and judged again: the folder
 * may have changed since the scan, and the hash must be of the bytes that are kept. Null when it no longer passes.
 */
export declare function storeAsset(owner: object, a: ScannedAsset): Promise<StoredAsset | null>;
/**
 * Delete every cached file no room refers to (served now, or written and waiting to be served), and stale temp
 * files. Safe with several rooms: it never touches a file any of them still needs. Never rejects.
 */
export declare function pruneCache(): Promise<void>;
