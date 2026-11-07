import { type TextStr } from "@scc/shared/text/ref";
/** The whole Mod folder may be this big. */
export declare const MAX_CODE_BYTES: number;
/** `<data>/mod-cache/code`. Resolved on every call, like the other paths. */
export declare function codeCacheDir(): string;
/** A scanned Code Mod's copy. */
export interface ScannedCode {
    /** The entry file, relative to the Mod (the manifest's `contributes.code`). */
    main: string;
    /** sha256 hex over the sorted paths and bytes of every file in the copy. */
    hash: string;
    /** Absolute path of the private copy. */
    dir: string;
}
/** The hash of a list of files: their paths and bytes, in path order, framed so that no two lists can give the same input. */
export declare function hashFiles(files: ReadonlyArray<{
    rel: string;
    bytes: Buffer;
}>): string;
/** Is the copy at `dir` still exactly what was approved? Read back and hashed again, just before it is loaded. */
export declare function copyMatches(dir: string, hash: string): Promise<boolean>;
/** This owner (a room) refers to these copies, replacing what it claimed before. */
export declare function claimCodeDirs(owner: object, names: Iterable<string>): void;
export declare function releaseCodeClaims(owner: object): void;
/** A Mod is running from this copy: it stays until the process ends. */
export declare function retainLoadedCode(dir: string): void;
/** Test hook: forget the loaded set. */
export declare function resetLoadedCode(): void;
/** Delete every copy no room claims and no loaded Mod runs from, and stale staging folders. Never rejects. */
export declare function pruneCode(): Promise<void>;
/**
 * Copy the Mod folder `dir` into the private cache and say what the copy is. `realDir` is the folder's realpath. The entry
 * `main` must be a file in the copy. Claims the copy for `owner` before it is made visible. Never throws.
 */
export declare function prepareCode(owner: object, dir: string, realDir: string, id: string, main: string): Promise<{
    code: ScannedCode | null;
    problems: TextStr[];
}>;
